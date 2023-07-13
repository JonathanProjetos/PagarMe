const Joi = require('joi');

// Está função esta validando os dados de entrada para a realização de uma transação. 
//Caso surja alguma incompatibilidade, retorno o erro personalizado no formato 'status|message'.

const validadeBodyTransaction = (body) => {

  const schemaTRansaction = Joi.object({
    amount: Joi.number().required().messages({
      'any.required': '404|amount is required',
      'number.base': '404|amount must be a number',
    }).strict(),
    description: Joi.string().required().messages({
      'any.required': '404|description is required',
      'string.base': '404|description must be a string',
      'string.empty': '404|description is not allowed to be empty'
    }),
    paymentMethod: Joi.string().valid('debit_card', 'credit_card').required().messages({
      'any.required': '404|paymentMethod is required',
      'string.base': '404|paymentMethod must be a string',
      'string.empty': '404|paymentMethod is not allowed to be empty',
      'any.only': '404|paymentMethod must be debit_card or credit_card'
    }),
    cardNumber: Joi.number().required().unsafe().messages({
      'any.required': '404|cardNumber is required',
      'number.base': '404|cardNumber must be a number',
      'number.unsafe': '404|cardNumber must be a number',
    }),
    cardHolderName: Joi.string().required().messages({
      'any.required': '404|cardHolderName is required',
      'string.base': '404|cardHolderName must be a string',
      'string.empty': '404|cardHolderName is not allowed to be empty'
    }),
    cardExpirationDate: Joi.string().required().messages({
      'any.required': '404|cardExpirationDate is required',
      'string.base': '404|cardExpirationDate must be a string',
      'string.empty': '404|cardExpirationDate is not allowed to be empty'
    }),
    cardCvv: Joi.number().required().messages({
      'any.required': '404|cardCvv is required',
      'number.base': '404|cardCvv must be a number',
    }),
  })

  const { error, value } = schemaTRansaction.validate(body);

  if (error) {
    throw error;
  }
  return value;
};

module.exports = validadeBodyTransaction;
