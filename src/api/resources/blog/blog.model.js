import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate';
 
const { Schema } = mongoose;
const blogSchema = new Schema({
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
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Comment'
     },
     created_at: {
         type: Date,
         default: Date.now()
     },
     author: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',
         required: true
     }
});

blogSchema.plugin(mongoosePaginate);
export default mongoose.model('Blog', blogSchema);