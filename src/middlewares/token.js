const jsonwebtoken = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const jwt = {
  
  // Gera o token de autenticação.
  generateToken: (email) => {
    const token = jsonwebtoken.sign({ email } , secret, {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  },

  // Valida o token de autenticação.
  validateToken: (token) => {
    if (!token) throw new Error('401|Token not found');
    try {
      const payload = jsonwebtoken.verify(token, secret);
      return payload;
    } catch (error) {
      console.log(error);
      throw new Error('401|Token must be a valid token');
    }
  },
};

module.exports = jwt;