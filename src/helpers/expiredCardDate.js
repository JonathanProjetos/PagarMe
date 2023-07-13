// Está função recebe a data expiração do cartão de crédito ou débito.
// Caso a data seja inválida ou o cartão esteja expirado,
// retorna um erro personalizado no formato 'status|message'.

const cardExpirationDateFormat = (date) => {
  const regex = /^(20[2-9][0-9]|2100)-(0[1-9]|1[0-2])$/;

  if (!regex.test(date)) {
    throw new Error('400|Invalid card expiration date');
  }

  const [year, month] = date.split('-');

  const expirationDate = new Date().getFullYear() + 5;

  if (expirationDate < Number(year)) {
    throw new Error('400|Expired card');
  }

  return `${year}-${month}`;
};

module.exports = cardExpirationDateFormat;
