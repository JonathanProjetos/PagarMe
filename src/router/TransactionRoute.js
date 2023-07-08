const express = require('express');
const TransactionRouter = express.Router();
const TransactionController = require('../controllers/TransactionControllers');
const { verifyToken } = require('../middlewares/decodeToken');

TransactionRouter.get('/transaction', verifyToken, TransactionController.getAll);

module.exports = TransactionRouter;