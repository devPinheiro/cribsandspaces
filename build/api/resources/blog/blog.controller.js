"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _joi = require("joi");

var _joi2 = _interopRequireDefault(_joi);

var _blog = require("./blog.model");

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

exports.default = {
  // Method for creating new blog
  create: function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(req, res) {
      var schema, _Joi$validate, value, error, blog;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              schema = _joi2.default.object().keys({
                title: _joi2.default.string().required(),
                content: _joi2.default.string().required()
              });
              _Joi$validate = _joi2.default.validate(req.body, schema), value = _Joi$validate.value, error = _Joi$validate.error; //

              value.created_at = Date.now();
              value.slug = value.title.replace(/\s+/g, '_').toLowerCase();

              if (!(error && error.details)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(400).json(error));

            case 7:
              _context.next = 9;
              return _blog2.default.create(Object.assign({}, value, {
                author: req.user._id
              }));

            case 9:
              blog = _context.sent;
              return _context.abrupt("return", res.json(blog));

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).send(_context.t0));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 13]]);
    }));

    function create(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return create;
  }(),
  // Method for getting all blogposts from collection
  getAll: function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(req, res) {
      var _req$query, page, perPage, options, allBlogs;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              // 
              _req$query = req.query, page = _req$query.page, perPage = _req$query.perPage;
              options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10,
                populate: {
                  path: 'author',
                  select: 'firstName lastName'
                }
              };
              _context2.next = 5;
              return _blog2.default.paginate({}, options);

            case 5:
              allBlogs = _context2.sent;
              return _context2.abrupt("return", res.json(allBlogs));

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

    function getAll(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return getAll;
  }(),
  // Method for getting one blogpost from collection
  getOne: function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(req, res) {
      var blog;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _blog2.default.findOne({
                slug: req.params.slug
              });

            case 3:
              blog = _context3.sent;

              if (blog) {
                _context3.next = 6;
                break;
              }

              return _context3.abrupt("return", res.status(404).json({
                err: "could not find blog with id:".concat(blogSlug)
              }));

            case 6:
              return _context3.abrupt("return", res.json(blog));

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              console.error(_context3.t0);
              return _context3.abrupt("return", res.status(500).send(_context3.t0));

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 9]]);
    }));

    function getOne(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return getOne;
  }(),
  // Method for getting one song from collection
  deleteOne: function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4(req, res) {
      var id, blog;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              // 
              id = req.params.id;
              _context4.next = 4;
              return _blog2.default.findByIdAndRemove({
                _id: id
              });

            case 4:
              blog = _context4.sent;

              if (blog) {
                _context4.next = 7;
                break;
              }

              return _context4.abrupt("return", res.status(404).json({
                err: "could not find blog post with id:".concat(id)
              }));

            case 7:
              return _context4.abrupt("return", res.json({
                success: "blog post deleted successfully"
              }));

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              console.error(_context4.t0);
              return _context4.abrupt("return", res.status(500).send(_context4.t0));

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 10]]);
    }));

    function deleteOne(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return deleteOne;
  }(),
  // Method for getting one song from collection
  updateOne: function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee5(req, res) {
      var id, schema, _Joi$validate2, value, error, blog;

      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              // 
              id = req.params.id;
              schema = _joi2.default.object().keys({
                title: _joi2.default.string().required(),
                content: _joi2.default.string()
              });
              _Joi$validate2 = _joi2.default.validate(req.body, schema), value = _Joi$validate2.value, error = _Joi$validate2.error;
              value.slug = value.title.replace(/\s+/g, '_').toLowerCase();

              if (!(error && error.details)) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", res.status(400).json(error));

            case 7:
              _context5.next = 9;
              return _blog2.default.findByIdAndUpdate({
                _id: id
              }, value, {
                new: true
              });

            case 9:
              blog = _context5.sent;

              if (blog) {
                _context5.next = 12;
                break;
              }

              return _context5.abrupt("return", res.status(404).json({
                err: "could not find blog post with id:".concat(id)
              }));

            case 12:
              return _context5.abrupt("return", res.json({
                blog: blog,
                success: "blog post updated successfully"
              }));

            case 15:
              _context5.prev = 15;
              _context5.t0 = _context5["catch"](0);
              console.error(_context5.t0);
              return _context5.abrupt("return", res.status(500).send(_context5.t0));

            case 19:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 15]]);
    }));

    function updateOne(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return updateOne;
  }()
};