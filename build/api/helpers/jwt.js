"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = require("../../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { devConfig } from '../../config/config';
var config = (0, _config.getConfig)(process.env.NODE_ENV);
exports.default = {
  issue: function issue(payload, expiresIn) {
    return _jsonwebtoken2.default.sign(payload, config.secret, {
      expiresIn: expiresIn
    });
  }
};