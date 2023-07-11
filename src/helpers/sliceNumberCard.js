const sliceNumber = (number) => {
  console.log(number);
  const numberString = number.toString();
  
  if(numberString.split('').length !== 16){
    throw new Error('404|The number must have 16 digits');
  }

  const sliceNumber = numberString.slice(-4);

  return Number(sliceNumber);

}

module.exports = sliceNumber