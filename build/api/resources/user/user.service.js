"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _bcryptjs = require("bcryptjs");

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  comparePass: function comparePass(plainText, encryptPassword) {
    return _bcryptjs2.default.compareSync(plainText, encryptPassword);
  },
  validateLogin: function validateLogin(body) {
    var schema = _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        value = _Joi$validate.value,
        error = _Joi$validate.error;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  },
  encryptPassword: function encryptPassword(plainText) {
    var salt = _bcryptjs2.default.genSaltSync(10);

    return _bcryptjs2.default.hashSync(plainText, salt);
  },
  validateSignup: function validateSignup(body) {
    var schema = _joi2.default.object().keys({
      firstName: _joi2.default.string().required(),
      lastName: _joi2.default.string().required(),
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().required(),
      role: _joi2.default.number().integer()
    });

    var _Joi$validate2 = _joi2.default.validate(body, schema),
        value = _Joi$validate2.value,
        error = _Joi$validate2.error;

    if (error && error.details) {
      return {
        error: error
      };
    }

    return {
      value: value
    };
  }
};