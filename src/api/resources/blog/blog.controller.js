import Joi from 'joi';
import Blog from './blog.model';


export default {

    // Method for creating new blog
    async create(req, res){
        try{           
        const schema = Joi.object().keys({
            title: Joi.string().required(),
            content: Joi.string().required()
        });
        const {value, error } = Joi.validate(req.body, schema);
        //
        value.created_at = Date.now();
        value.slug = value.title.replace(/\s+/g, '_').toLowerCase();

        if( error && error.details ){
            return res.status(400).json(error);
        } 
            const blog = await Blog.create(Object.assign({}, value, { author: req.user._id}));
        return res.json(blog);
        } 
        catch (err) {
          console.error(err);
          return res.status(500).send(err);
        }
    },

    // Method for getting all blogposts from collection
    async getAll(req, res) {
        try {
            // 
            const {page, perPage} = req.query;
            const options = {
                page: parseInt(page, 10) || 1,
                limit: parseInt(perPage, 10) || 10,
                populate: {
                    path: 'author',
                    select: 'firstName lastName'
                }
            };
            const allBlogs = await Blog.paginate({}, options);
            return res.json(allBlogs);
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },


    // Method for getting one blogpost from collection
    async getOne(req, res) {
        try {
            //      
            const blog = await Blog.findOne({ slug: req.params.slug });      
            if(!blog){
                return res.status(404).json({ err: `could not find blog with id:${blogSlug}`});
            }
            return res.json(blog)
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    // Method for getting one song from collection
    async deleteOne(req, res) {
        try {
            // 
            const { id } = req.params;
            const blog = await Blog.findByIdAndRemove({ _id: id });
            
            if (!blog) {
                return res.status(404).json({ err: `could not find blog post with id:${id}` });
            }
            return res.json({success:`blog post deleted successfully`});
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    },

    // Method for getting one song from collection
    async updateOne(req, res) {
        try {
            // 
            const { id } = req.params;
            const schema = Joi.object().keys({
                title: Joi.string().required(),
                content: Joi.string()
            });
            const { value, error } = Joi.validate(req.body, schema);
            value.slug = value.title.replace(/\s+/g, '_').toLowerCase();

            if (error && error.details) {
                return res.status(400).json(error);
            } 

            const blog = await Blog.findByIdAndUpdate({ _id: id }, value, {new: true});
            
            if (!blog) {
                return res.status(404).json({ err: `could not find blog post with id:${id}` });
            }
            return res.json({ blog, success: `blog post updated successfully` });
        } catch (err) {
            console.error(err);
            return res.status(500).send(err);
        }
    }
}