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
var commentSchema = new Schema({
  content: {
    type: String,
    required: [true, 'Comment must have a content']
  },
  blog: [{
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true
  }],
  user: {
    type: _mongoose2.default.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
commentSchema.plugin(_mongoosePaginate2.default);
exports.default = _mongoose2.default.model('Comment', commentSchema);