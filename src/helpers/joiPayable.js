const Joi = require('joi');

// Está função esta validando o dados de entrada se é paid ou waiting_founds. Qualquer outro valor será retornado um erro.
const validatePayable = (body) => {
  const payableSchema = Joi.object({
    status: Joi.string().valid("paid", "waiting_funds").required().messages({
      'string.empty': '404|The "status_payment" field cannot be empty.',
      'any.required': '404|The "status_payment" field is mandatory.',
      'any.only': '404|status_payment must be paid or waiting_funds'
    }),
  });

  const { error, value } = payableSchema.validate(body);

  if (error) {
    throw error;
  }
  return value;
}



module.exports = validatePayable;