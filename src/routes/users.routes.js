const { Router } = require('express');
const usersRoute = Router();
const UsersController = require('../controllers/usersController')
const usersController = new UsersController();

usersRoute.post('/', usersController.create);
usersRoute.put('/:id', usersController.update);


module.exports = usersRoute;