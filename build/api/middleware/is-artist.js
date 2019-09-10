"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSuperAdmin = exports.isAdmin = exports.isUser = void 0;

var _user = require("../resources/user/user.model");

var isUser = exports.isUser = function isUser(req, res, next) {
  if (req.user.role !== _user.USER_ROLE) {
    return res.json({
      err: "unauthorized, not a user. Sign up"
    });
  }

  next();
};

var isAdmin = exports.isAdmin = function isAdmin(req, res, next) {
  if (req.user.role !== _user.ADMIN_ROLE) {
    return res.json({
      err: "unauthorized, not an admin"
    });
  }

  next();
};

var isSuperAdmin = exports.isSuperAdmin = function isSuperAdmin(req, res, next) {
  if (req.user.role !== _user.SUPER_ADMIN_ROLE) {
    return res.json({
      err: "unauthorized, not a super admin"
    });
  }

  next();
};