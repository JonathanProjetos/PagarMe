const express = require('express');

const UseRouter = express.Router();
const UserController = require('../controllers/UserControllers');

UseRouter.post('/sign-in', UserController.Login);
UseRouter.post('/register', UserController.Register);

module.exports = UseRouter;
