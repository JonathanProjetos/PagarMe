const Joi = require('joi');

// Está função esta validando os dados de entrada para a realização de uma transação.
// Caso surja alguma incompatibilidade, retorno o erro personalizado no formato 'status|message'.

const validadeBodyTransaction = (body) => {
  const schemaTRansaction = Joi.object({
    amount: Joi.number().greater(0).required().messages({
      'any.required': '400|amount is required',
      'number.base': '400|amount must be a number é cannot be empty',
      'number.greater': '400|amount must be greater than 0',
    })
      .strict(),

    description: Joi.string().required().messages({
      'any.required': '400|description is required',
      'string.base': '400|description must be a string',
      'string.empty': '400|description is not allowed to be empty',
    }),

    paymentMethod: Joi.string().valid('debit_card', 'credit_card').required().messages({
      'any.required': '400|paymentMethod is required',
      'string.base': '400|paymentMethod must be a string',
      'string.empty': '400|paymentMethod is not allowed to be empty',
      'any.only': '400|paymentMethod must be debit_card or credit_card',
    }),

    cardNumber: Joi.number().required().unsafe().messages({
      'any.required': '400|cardNumber is required',
      'number.base': '400|cardNumber must be a number',
      'number.unsafe': '400|cardNumber must be a number',
    })
      .strict(),

    cardHolderName: Joi.string().min(10).required().messages({
      'any.required': '400|cardHolderName is required',
      'string.base': '400|cardHolderName must be a string',
      'string.empty': '400|cardHolderName is not allowed to be empty',
      'string.min': '400|cardHolderName must be at least 10 characters.',
    })
      .strict(),

    cardExpirationDate: Joi.string().required().messages({
      'any.required': '400|cardExpirationDate is required',
      'string.base': '400|cardExpirationDate must be a string',
      'string.empty': '400|cardExpirationDate is not allowed to be empty',
    })
      .strict(),

    cardCvv: Joi.number().required().messages({
      'any.required': '400|cardCvv is required',
      'number.base': '400|cardCvv must be a number',
    }),
  });

  const { error, value } = schemaTRansaction.validate(body);

  if (error) {
    throw error;
  }
  return value;
};

module.exports = validadeBodyTransaction;
