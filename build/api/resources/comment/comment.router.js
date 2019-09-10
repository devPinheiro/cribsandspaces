"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentRouter = void 0;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _comment = require("./comment.controller");

var _comment2 = _interopRequireDefault(_comment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var commentRouter = exports.commentRouter = _express2.default.Router();

commentRouter.route('/:id').post([_passport2.default.authenticate('jwt', {
  session: false
})], _comment2.default.create).get([_passport2.default.authenticate('jwt', {
  session: false
})], _comment2.default.getComments);