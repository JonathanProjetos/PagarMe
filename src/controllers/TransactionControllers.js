const TransactionService = require('../services/TransectionService');

const TransactionController = {
  getOne: async (req, res) => {
    const { email } = req;
    const transactions = await TransactionService.getOne(email);
    res.status(200).json(transactions);
  },

  create: async (req, res) => {
    const { body, email } = req;
    const result = await TransactionService.create(body, email);
    res.status(201).json(result);
  },
};

module.exports = TransactionController;