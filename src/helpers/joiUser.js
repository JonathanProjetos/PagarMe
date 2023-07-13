const Joi = require('joi');

// Está função esta validando os dados de entrada para login. Caso surja alguma incompatibilidade, retorno o erro personalizado no formato 'status|message'.
const validateBodyLogin = (body) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required().messages({
      'string.empty': '400|The "email" field cannot be empty.',
      'any.required': '400|The "email" field is mandatory.',
      'string.email': '400|The "email" must be in the format test@test.com.',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': '400|The "password" field cannot be empty.',
      'any.required': '400|The "password" field is mandatory.',
      'string.min': '400|The "password" field must be at least 6 characters.',
    }),
  });

  const { error, value } = userSchema.validate(body);

  if (error) {
    throw error;
  }
  return value;
}

// Está função esta validando os dados de cadastro de usuário. Caso surja alguma incompatibilidade, retorno o erro personalizado no formato 'status|message'.
const validateBodyRegister = (body) => {

  const registerSchema = Joi.object({
    name: Joi.string().messages({
      'string.base': '400|The "name" field must be a string.',
    }),
    lastName: Joi.string().messages({
      'string.base': '400|The "lastName" field must be a string.',
    }),
    email: Joi.string().email().required().messages({
      'string.empty': '400|The "email" field cannot be empty.',
      'any.required': '400|The "email" field is mandatory.',
      'string.email': '400|The "email" must be in the format test@test.com.',
    }),
    password: Joi.string().min(6).required().messages({
      'string.empty': '400|The "password" field cannot be empty.',
      'any.required': '400|The "password" field is mandatory.',
      'string.min': '400|The "password" field must be at least 6 characters.',
    }),
  })

  const { error, value } = registerSchema.validate(body);

  if (error) {
    console.log(error);
    throw error;
  }
  return value;
}

module.exports = {
  validateBodyLogin,
  validateBodyRegister,
};