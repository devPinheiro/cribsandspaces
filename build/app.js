"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _morgan = require("morgan");

var _morgan2 = _interopRequireDefault(_morgan);

var _swaggerUiExpress = require("swagger-ui-express");

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _swagger = require("./config/swagger.json");

var _swagger2 = _interopRequireDefault(_swagger);

var _db = require("./config/db");

var _api = require("./api");

var _passwordJwt = require("./api/middleware/password-jwt");

var _webpack3 = require("../webpack.config");

var _webpack4 = _interopRequireDefault(_webpack3);

var _webpackDevMiddleware = require("webpack-dev-middleware");

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require("webpack-hot-middleware");

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3500;
(0, _db.connect)();
app.use((0, _morgan2.default)('dev'));
var compiler = (0, _webpack2.default)(_webpack4.default);
app.use((0, _webpackDevMiddleware2.default)(compiler, {
  hot: true,
  publicPath: _webpack4.default.output.publicPath
}));
app.use((0, _webpackHotMiddleware2.default)(compiler)); // middleware

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({
  extended: true
}));
app.use(_passport2.default.initialize()); //req user

(0, _passwordJwt.configJWTStrategy)(); // api endpoints

app.use('/api/v1', _api.restRouter); // swagger api docs endpoint

app.use('/api-docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default, {
  explorer: true
}));
app.get('*', function (req, res) {
  return res.sendFile(_path2.default.resolve(__dirname, '../dist/index.html'));
});
app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.message = 'Invalid route';
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  return res.json({
    error: {
      message: error.message
    }
  });
});
app.listen(PORT, function () {
  console.log("Server is running at PORT http://localhost:".concat(PORT));
}); // export app for testing

exports.default = app;