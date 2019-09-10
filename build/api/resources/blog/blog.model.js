"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _mongoosePaginate = require("mongoose-paginate");

var _mongoosePaginate2 = _interopRequireDefault(_mongoosePaginate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var blogSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Blog must have a title']
  },
  slug: {
    type: String,
    requierd: [true, 'Blog post should have a slug']
  },
  content: {
    type: String,
    required: [true, 'Blog must have a title']
  },
  comments: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Comment'
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
blogSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model('Blog', blogSchema);