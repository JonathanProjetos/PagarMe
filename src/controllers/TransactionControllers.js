const TransactionService = require('../services/TransectionService');

const TransactionController = {
  getAll: async (req, res) => {
    const { email } = req;
    console.log('controller',email);
    const transactions = await TransactionService.getAll(email);
    res.status(200).json(transactions);
  },
};

module.exports = TransactionController;