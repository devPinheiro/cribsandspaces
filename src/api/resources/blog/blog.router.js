import express from 'express';
import passport from 'passport';
import blogController from './blog.controller';
import { isArtist, isAdmin, isSuperAdmin } from '../../middleware/is-artist';

export const blogRouter = express.Router();
// authenticated users can view all songs
// only an admin can create, update and delete blog posts
// admin can manage users

//grouped middleware
const accessPolicy = [passport.authenticate('jwt', { session: false }), isAdmin]
blogRouter.route('/')
.post(accessPolicy, blogController.create)
.get(blogController.getAll);

blogRouter.route('/:id')
    .delete(accessPolicy, blogController.deleteOne)
    .put(accessPolicy, blogController.updateOne);


blogRouter.route('/:slug')
    .get(blogController.getOne)