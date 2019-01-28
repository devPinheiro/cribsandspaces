import commentService from "./comment.service";
import Comment from './comment.model';

export default {
    async create(req, res) {
        try {
           // Use JOI validate
           const {value, error} = commentService.validateComment(req.body);
           if(error){
               return res.json(error);
           }
           const comment = await Comment.create(Object.assign({}, value, { user: req.user._id}, {blog: req.params.id}));
           return res.json(comment);
        } catch(err){
            console.error(err);
            return res.status(500).send(err); 
        }
    },

    async getComments(req, res) {
        try {
            // Use JOI validate
            const { page, perPage } = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10,
                populate: {
                    path: 'user blog',
                    select: 'firstName lastName title'
                }
            };
            const comment = await Comment.paginate({ blog: req.params.id }, options);
            return res.json(comment);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }
}