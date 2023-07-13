const token = require('./token');

module.exports = {
  // Middleware que verifica se o token é válido.
  verifyToken: (req, _res, next) => {
    try {
      const { authorization } = req.headers;
      const filterBearerSwagger = authorization.split(' ').pop('Bearer');
      const dados = token.validateToken(filterBearerSwagger);
      req.email = dados.email;
      next();
    } catch (err) {
      throw new Error('404|Token not found');
    }
  },
};
