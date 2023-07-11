const { User, Transaction } = require('../database/models');
const joiTransaction = require('../helpers/joiTransaction');
const sliceNumberCard = require('../helpers/sliceNumberCard');
const cardExpirationDateFormat = require('../helpers/expiredCardDate');
const cvv = require('../helpers/cvvFormat');

const TransactionService = {

  getOne: async (email) => {
    const user = await User.findOne({ where: { email } });

    if(!user) throw new Error('401|Unauthorized user');

    const transactions = await User.findOne({ 
      where: { id: user.id },
      attributes: { exclude: ['hashPassword'] },
      include: { model: Transaction, as: 'transactions' }, 
    });
    
    return transactions;
  },

  create: async (body, email) => {
    const data = joiTransaction(body);

    const sliceNumber = sliceNumberCard(data.cardNumber);

    const cardExpiration = cardExpirationDateFormat(data.cardExpirationDate);

    const cardCvv = cvv(data.cardCvv);

    const user = await User.findOne({ where: { email } });

    if(!user) throw new Error('400|User not found');

    await Transaction.create({
      userId: user.id,
      amount: data.amount,
      description: data.description,
      paymentMethod: data.paymentMethod,
      cardNumber: sliceNumber,
      cardHolderName: data.cardHolderName,
      cardExpirationDate: cardExpiration,
      cardCvv,
    });

    return { message: 'Transaction created successfully'}
  }
};

module.exports = TransactionService;