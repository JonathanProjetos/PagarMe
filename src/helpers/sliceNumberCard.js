const sliceNumber = (number) => {

  //Recebo o numero do cartao e converto para string
  const numberString = number.toString();
  
  //verifico se o numero tem 16 digitos
  if(numberString.split('').length !== 16){
    throw new Error('404|The number must have 16 digits');
  }

  //pego os 4 ultimos digitos do numero
  const sliceNumber = numberString.slice(-4);

  return Number(sliceNumber);

}

module.exports = sliceNumber