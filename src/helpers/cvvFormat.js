const cvvFormat = (data) => {
  const cvv = data.toString();
  if(cvv.length !== 3) throw new Error('400|Invalid card cvv');
  return Number(cvv);
} 

module.exports = cvvFormat;
