import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';
const { Schema } = mongoose;
const commentSchema = new Schema({
    content: {
        type: String,
        required: [true, 'Comment must have a content']
    },
    blog: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Blog',
       required: true
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

commentSchema.plugin(mongoosePaginate);
export default mongoose.model('Comment', commentSchema);