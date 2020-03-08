import express from 'express';
const routes = express.Router();

routes.get('/resources', (req, res, next) => res.send('fetched resources'));
routes.get('/healthy', (req, res, next) => res.send(''));
routes.get('/', (req, res, next) => res.send(process.env.VAR_TEST));

export default routes;
