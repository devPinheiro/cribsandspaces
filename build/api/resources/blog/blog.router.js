"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.blogRouter = void 0;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _blog = require("./blog.controller");

var _blog2 = _interopRequireDefault(_blog);

var _isArtist = require("../../middleware/is-artist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blogRouter = exports.blogRouter = _express2.default.Router(); // authenticated users can view all songs
// only an admin can create, update and delete blog posts
// admin can manage users
//grouped middleware


var accessPolicy = [_passport2.default.authenticate('jwt', {
  session: false
}), _isArtist.isAdmin];
blogRouter.route('/').post(accessPolicy, _blog2.default.create).get(_blog2.default.getAll);
blogRouter.route('/:id').delete(accessPolicy, _blog2.default.deleteOne).put(accessPolicy, _blog2.default.updateOne);
blogRouter.route('/:slug').get(_blog2.default.getOne);