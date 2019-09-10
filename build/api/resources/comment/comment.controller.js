"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comment = require("./comment.service");

var _comment2 = _interopRequireDefault(_comment);

var _comment3 = require("./comment.model");

var _comment4 = _interopRequireDefault(_comment3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

exports.default = {
  create: function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var _commentService$valid, value, error, comment;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              // Use JOI validate
              _commentService$valid = _comment2.default.validateComment(req.body), value = _commentService$valid.value, error = _commentService$valid.error;

              if (!error) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", res.json(error));

            case 4:
              _context.next = 6;
              return _comment4.default.create(Object.assign({}, value, {
                user: req.user._id
              }, {
                blog: req.params.id
              }));

            case 6:
              comment = _context.sent;
              return _context.abrupt("return", res.json(comment));

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

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  getComments: function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$query, page, perPage, options, comment;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // Use JOI validate
              _req$query = req.query, page = _req$query.page, perPage = _req$query.perPage;
              options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10,
                populate: {
                  path: 'user blog',
                  select: 'firstName lastName title'
                }
              };
              _context2.next = 5;
              return _comment4.default.paginate({
                blog: req.params.id
              }, options);

            case 5:
              comment = _context2.sent;
              return _context2.abrupt("return", res.json(comment));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.error(_context2.t0);
              return _context2.abrupt("return", res.status(500).send(_context2.t0));

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 9]]);
    }));

    function getComments(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getComments;
  }()
};