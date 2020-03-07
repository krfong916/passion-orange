import express from 'express';
const routes = express.Router();

routes.get('/resources', (req, res, next) => res.send('fetched resources'));
routes.get('/healthy', (req, res, next) => res.send(''));

export default routes;
