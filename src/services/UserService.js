const { User } = require('../database/models');
const bycrypt = require('bcryptjs');
const jwt = require('../middlewares/token');
const { validateBodyLogin, validateBodyRegister } = require('../helpers/joiUser');


const UserService = {
  Login: async (body) => {
    // Esta função deve receber um objeto body com email e password.
    const data = validateBodyLogin(body);

    const { email, password } = data;

    // Resgato o usuário no banco de dados com base no email.
    const checkUser = await User.findOne({ where: { email } });

    // Caso não exista, retorna um erro.
    if (!checkUser) throw new Error('400|User not found');

    // Verifica se a senha informada é a mesma do banco de dados.
    if (!bycrypt.compareSync(password, checkUser.hashPassword)){
      throw new Error('401|Password does not match');
    }

    // Cria o token de autenticação.
    const createToken = jwt.generateToken(email);

    return { token: createToken };
  },

  Register: async (body) => {

    // Esta função deve receber um objeto body com name, lastName, email e password.
    const data = validateBodyRegister(body);

    const { email, password } = data;

    // Resgato o usuário no banco de dados com base no email.
    const checkUser = await User.findOne({ where: { email } });

    // Caso exista, retorna um erro.
    if (checkUser) throw new Error('409|User already registered');

    // Criptografa a senha.
    const hashPassword = bycrypt.hashSync(password, 10);

    // Cria o usuário no banco de dados.
    await User.create({ email, hashPassword });

    return { message: 'User created successfully' };
  }
}

module.exports = UserService;