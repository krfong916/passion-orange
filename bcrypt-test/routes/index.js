import express from 'express';
import usersRouter from './users.router';
const routes = express.Router();

routes.use(usersRouter);

export default routes;
