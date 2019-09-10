"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = void 0;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = (0, _config.getConfig)(process.env.NODE_ENV);
_mongoose2.default.Promise = global.Promise;

var connect = exports.connect = function connect() {
  return _mongoose2.default.connect(config.MONGO_URI);
};