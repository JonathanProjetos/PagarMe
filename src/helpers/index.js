const joiTransaction = require('./joiTransaction');
const sliceNumberCard = require('./sliceNumberCard');
const cardExpirationDateFormat = require('./expiredCardDate');
const cvv = require('./cvvFormat');
const fee = require('./fee');

const dataTransaction = (body) => {
  // Está função está validando todos os campos nescessários para a criação de uma transação.
  const data = joiTransaction(body);

  // Esta função recebe o número do titular do cartão e retorna os 4 últimos números.
  const sliceNumber = sliceNumberCard(data.cardNumber);

  // Substituo o número do cartão pelos 4 últimos números.
  data.cardNumber = sliceNumber;

  // Esta função recebe a data de expiração do cartão.
  // Nela, é feita uma validação de formatação e uma pequena validação
  // caso o cartão tenha 5 anos de diferença para menos em comparação com a data atual.
  const cardExpiration = cardExpirationDateFormat(data.cardExpirationDate);

  // Substituo a data de expiração do cartão pela data formatada.
  data.cardExpirationDate = cardExpiration;

  // Esta função recebe o cvv do cartão e retorna o cvv formatado.
  const cardCvv = cvv(data.cardCvv);

  // Substituo o cvv do cartão pelo cvv formatado.
  data.cardCvv = cardCvv;

  return data;
};

// Esta função recebe uma transação e, com base no método de pagamento,
// realiza a formatação da data e atribuição do status para 'paid' ou 'waiting_funds'.
const dataPayable = (body) => {
  if (!body.paymentMethod) {
    throw new Error('400|paymentMethod is required');
  }

  // Este case atribui a data atual é formato pegando somente a data.
  if (body.paymentMethod === 'debit_card') {
    const create = new Date().toISOString().split('T')[0];
    const payable = {
      status: 'paid',
      paymentDate: create,
      amount: fee(body).amount,
    };
    return payable;
  }

  // Este case atribui a data atual e a formatação pegando somente a data.
  // Este modelo de pagamento leva 30 dias para ser pago.
  if (body.paymentMethod === 'credit_card') {
    const daysLater = new Date().setDate(new Date().getDate() + 30);
    const create = new Date(daysLater).toISOString().split('T')[0];

    const payable = {
      status: 'waiting_funds',
      paymentDate: create,
      amount: fee(body).amount,
    };
    return payable;
  }
  return true;
};

module.exports = { dataTransaction, dataPayable };
