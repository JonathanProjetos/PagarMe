const { User, Transaction, Payable } = require('../database/models');
const joiPayable = require('../helpers/joiPayable');
const sumPayable = require('../helpers/sumPayable');

const PayableServices = {
  getBalance: async (query, email) => {
    if (!query) throw new Error('400|Status is required');

    // Faz a validação do status da query
    const status = joiPayable({ status: query });

    // Resgato o usuário no banco de dados com base no email.
    const user = await User.findOne({ where: { email } });

    // Caso não exista, retorna um erro.
    if (!user) throw new Error('401|Unauthorized user');

    // Resgato as transações do usuário.
    const transactions = await User.findOne({
      where: { id: user.id },
      attributes: { exclude: ['hashPassword'] },
      include: {
        model: Transaction,
        as: 'transactions',
        include: {
          model: Payable,
          as: 'payable',
          attributes: { exclude: ['id'] },
        },
      },

    });

    // Calcula o saldo do usuário
    const balance = sumPayable(status, transactions);

    return balance;
  },
};

module.exports = PayableServices;
