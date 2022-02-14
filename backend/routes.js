const express = require('express');

const controllerUser = require('./src/controllers/ControllerUser');
const redis = require('./src/databases/db_redis');

const routes = express.Router();

routes.post('/users', controllerUser.create);
routes.get('/users', controllerUser.getUsers);
routes.put('/users/:id', controllerUser.update);
routes.delete('/users/:id', controllerUser.delete);

routes.post('/rascunho', redis.addToRedis);
routes.get('/rascunho/:id', redis.getRascunho);

module.exports = routes;