"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require("./user.service");

var _user2 = _interopRequireDefault(_user);

var _user3 = require("./user.model");

var _user4 = _interopRequireDefault(_user3);

var _jwt = require("../../helpers/jwt");

var _jwt2 = _interopRequireDefault(_jwt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

exports.default = {
  signup: function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _userService$validate, value, _error, encryptedPass;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _userService$validate = _user2.default.validateSignup(req.body), value = _userService$validate.value, _error = _userService$validate.error;

              if (!_error) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.status(400).json(_error));

            case 4:
              encryptedPass = _user2.default.encryptPassword(value.password);
              _context.next = 7;
              return _user4.default.create({
                firstName: value.firstName,
                lastName: value.lastName,
                email: value.email,
                password: encryptedPass,
                role: value.role || _user3.USER_ROLE
              });

            case 7:
              return _context.abrupt("return", res.json({
                success: true
              }));

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).send(_context.t0));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    }));

    function signup(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var _userService$validate2, value, _error2, user, authenticated, token;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _userService$validate2 = _user2.default.validateLogin(req.body), value = _userService$validate2.value, _error2 = _userService$validate2.error;

              if (!_error2) {
                _context2.next = 4;
                break;
              }

              return _context2.abrupt("return", res.status(400).json(_error2));

            case 4:
              _context2.next = 6;
              return _user4.default.findOne({
                email: value.email
              });

            case 6:
              user = _context2.sent;

              if (user) {
                _context2.next = 9;
                break;
              }

              return _context2.abrupt("return", res.status(404).json({
                err: "user not found"
              }));

            case 9:
              authenticated = _user2.default.comparePass(value.password, user.password);

              if (authenticated) {
                _context2.next = 12;
                break;
              }

              return _context2.abrupt("return", res.status(401).json({
                err: "unauthorized"
              }));

            case 12:
              token = _jwt2.default.issue({
                id: user._id
              }, '1d');
              return _context2.abrupt("return", res.json({
                token: token
              }));

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              return _context2.abrupt("return", res.status(500).send(_context2.t0));

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 16]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  authenticate: function authenticate(req, res) {
    return res.json(req.user);
  },
  getAll: function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var value;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _user4.default.find().populate('user');

            case 3:
              value = _context3.sent;
              return _context3.abrupt("return", res.json(value));

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              return _context3.abrupt("return", res.status(500).json(error));

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 7]]);
    }));

    function getAll(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return getAll;
  }()
};