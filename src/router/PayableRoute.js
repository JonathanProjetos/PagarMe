const express = require('express');
const PayableRouter = express.Router();
const PayableController = require('../controllers/PayableControllers');
const { verifyToken } = require('../middlewares/decodeToken');

PayableRouter.get('/payable', verifyToken, PayableController.getBalance);

module.exports = PayableRouter;