"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUPER_ADMIN_ROLE = exports.ADMIN_ROLE = exports.USER_ROLE = void 0;

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var USER_ROLE = exports.USER_ROLE = 3;
var ADMIN_ROLE = exports.ADMIN_ROLE = 2;
var SUPER_ADMIN_ROLE = exports.SUPER_ADMIN_ROLE = 1;
var Schema = _mongoose2.default.Schema;
var userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    default: 3,
    required: true,
    type: Number
  }
});
exports.default = _mongoose2.default.model('User', userSchema);