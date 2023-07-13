// Está função recebe o status e as transações e retorna a soma dos valoes em função do status.
const sumPayable = async (type, transactions) => {
  const { status } = type;
  let sum = 0;

  // Caso o status seja 'paid' ou 'waiting_funds', o valor do payable será somado e retornado.
  if (status === 'paid') {
    const paid = await transactions.transactions.filter((transaction) => transaction.payable.status === 'paid');
    paid.forEach((transaction) => {
      sum += Number(transaction.payable.amount);
    });
  }

  if (status === 'waiting_funds') {
    const waitingFunds = await transactions.transactions.filter((transaction) => transaction.payable.status === 'waiting_funds');
    waitingFunds.forEach((transaction) => {
      sum += Number(transaction.payable.amount);
    });
  }

  const balance = {
    message: 'Balance successfully.',
    status,
    balance: `$${sum.toFixed(2)}`,
  };

  return balance;
};

module.exports = sumPayable;
