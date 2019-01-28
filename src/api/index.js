import express from 'express';
import { blogRouter } from './resources/blog';
import { userRouter } from './resources/user/user.router';
import { commentRouter } from './resources/comment';

export const restRouter = express.Router();
// song route
restRouter.use('/blogs', blogRouter);
// user route
restRouter.use('/users', userRouter);
// playlist route
restRouter.use('/comments', commentRouter);