const sliceNumber = (number) => {
  const numberString = number.toString();

  if(numberString.split('').length !== 16){
    throw new Error('The number must have 16 digits');
  }

  const sliceNumber = numberString.slice(-4);

  return Number(sliceNumber);
}

module.exports = sliceNumber