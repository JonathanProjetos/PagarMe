
//Está função recebe o cvv do cartão de crédito ou débito. Caso o cvv seja inválido, retorna um erro personalizado no formato 'status|message'.
const cvvFormat = (data) => {
  const cvv = data.toString();
  if(cvv.length !== 3) throw new Error('400|Invalid card cvv');
  return Number(cvv);
} 

module.exports = cvvFormat;
