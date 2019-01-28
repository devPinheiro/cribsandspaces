import express from 'express';
import passport from 'passport';

import commentController  from './comment.controller';

export const commentRouter = express.Router();

commentRouter.route('/:id')
    .post([passport.authenticate('jwt', { session: false })], commentController.create)
    .get([passport.authenticate('jwt', {session: false})], commentController.getComments);