const { User, Transaction } = require('../database/models');

const TransactionService = {

  getAll: async (email) => {
    const user = await User.findOne({ where: { email } });
    if(!user) throw new Error('400|User not found');
    const transactions = await User.findAll({ 
      where: { id: user.id },
      include: { model: Transaction, as: 'transactions' }, 
    });
    return transactions;
  },

};

module.exports = TransactionService;