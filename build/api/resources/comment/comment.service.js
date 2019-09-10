"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  validateComment: function validateComment(body) {
    var schema = _joi2.default.object().keys({
      content: _joi2.default.string().required()
    });

    var _Joi$validate = _joi2.default.validate(body, schema),
        value = _Joi$validate.value,
        error = _Joi$validate.error;

    if (error && error.details) return {
      error: error
    };
    return {
      value: value
    };
  }
};