
// Está função define a taxa de acordo com o método de pagamento. Podendo variar entre 3% e 5%.
const fee = (body) => {

  if(!body.paymentMethod) throw new Error('404|paymentMethod is required');

  if(body.paymentMethod === 'debit_card') {
    const fee = Number(body.amount) * 0.03;
    body.amount = Number(body.amount) - fee;
    return body;    
  }

  if(body.paymentMethod === 'credit_card') {
    const fee = Number(body.amount) * 0.05;
    body.amount = Number(body.amount) - fee;
    return body;
  }
};

module.exports = fee;