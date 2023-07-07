const express = require('express');
const UseRouter = express.Router();
const UserController = require('../controllers/UserControllers');

UseRouter.post('/login', UserController.Login);


module.exports = UseRouter;