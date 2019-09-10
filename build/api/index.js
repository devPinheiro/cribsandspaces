"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.restRouter = void 0;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _blog = require("./resources/blog");

var _user = require("./resources/user/user.router");

var _comment = require("./resources/comment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var restRouter = exports.restRouter = _express2.default.Router(); // song route


restRouter.use('/blogs', _blog.blogRouter); // user route

restRouter.use('/users', _user.userRouter); // playlist route

restRouter.use('/comments', _comment.commentRouter);