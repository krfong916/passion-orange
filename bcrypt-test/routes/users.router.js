import express from 'express';
import { loginController } from '../features/users/useCases/login/index';
const usersRouter = express.Router();

usersRouter.get('/login', (req, res, next) => {
  console.log('here');
  loginController.execute(req, res, next);
});

export default usersRouter;
