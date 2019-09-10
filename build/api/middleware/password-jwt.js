"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configJWTStrategy = void 0;

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _passportJwt = require("passport-jwt");

var _passportJwt2 = _interopRequireDefault(_passportJwt);

var _config = require("../../config/config");

var _user = require("../resources/user/user.model");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _config.getConfig)(process.env.NODE_ENV);

var configJWTStrategy = exports.configJWTStrategy = function configJWTStrategy() {
  var opts = {
    jwtFromRequest: _passportJwt2.default.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
  };

  _passport2.default.use(new _passportJwt2.default.Strategy(opts, function (payload, done) {
    _user2.default.findOne({
      _id: payload.id
    }, function (err, user) {
      if (err) {
        return done(err);
      }

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    });
  }));
};