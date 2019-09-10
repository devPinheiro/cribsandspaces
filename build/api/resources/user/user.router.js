"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userRouter = void 0;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _user = require("./user.controller");

var _user2 = _interopRequireDefault(_user);

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _isArtist = require("../../middleware/is-artist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userRouter = exports.userRouter = _express2.default.Router();

userRouter.post('/signup', _user2.default.signup);
userRouter.post('/login', _user2.default.login);
userRouter.get('/auth', _passport2.default.authenticate('jwt', {
  session: false
}), _user2.default.authenticate);
userRouter.route('/all').get([_passport2.default.authenticate('jwt', {
  session: false
}), _isArtist.isSuperAdmin], _user2.default.getAll);