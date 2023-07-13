const { User, Transaction, Payable } = require('../database/models');
const { dataTransaction, dataPayable } = require('../helpers/index');

const TransactionService = {
  getOne: async (email) => {
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
    return transactions;
  },

  create: async (body, email) => {
    // Resgato o usuário no banco de dados com base no email.
    const user = await User.findOne({ where: { email } });

    // Caso não exista, retorna um erro.
    if (!user) throw new Error('401|Unauthorized user');

    // Atribuo o ID do usuário à transação e crio a transação.
    const transaction = await Transaction.create({
      userId: user.id,
      ...dataTransaction(body),
    });

    // Atribuo o ID da transação ao payable e crio o recebível.
    await Payable.create({
      transactionId: transaction.id,
      ...dataPayable(body),
    });

    return { message: 'Transaction created successfully' };
  },
};

module.exports = TransactionService;
