const sliceNumber = (number) => {
  // Recebo o numero do cartao e converto para string.
  const numberString = number.toString();

  // Verifica se o número tem 16 digitos.
  if (numberString.split('').length !== 16) {
    throw new Error('400|The number must have 16 digits');
  }

  // Pega os 4 últimos dígitos do número.
  const slice = numberString.slice(-4);

  return Number(slice);
};

module.exports = sliceNumber;
