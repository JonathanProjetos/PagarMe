const { User } = require('../database/models');
const bycrypt = require('bcryptjs');
const jwt = require('../middlewares/token');
const { validateBodyLogin, validateBodyRegister } = require('../helpers/joiUser');


const UserService = {
  Login: async (body) => {
    const data = validateBodyLogin(body);

    const { email, password } = data;

    const checkUser = await User.findOne({ where: { email } });

    if (!checkUser) throw new Error('400|User not found');

    if (!bycrypt.compareSync(password, checkUser.hashPassword)){
      throw new Error('401|Password does not match');
    }

    const createToken = jwt.generateToken(email);

    return { token: createToken };
  },

  Register: async (body) => {

    const data = validateBodyRegister(body);

    const { email, password } = data;

    const checkUser = await User.findOne({ where: { email } });

    if (checkUser) throw new Error('409|User already registered');

    const hashPassword = bycrypt.hashSync(password, 10);

    await User.create({ email, hashPassword });

    return { message: 'User created successfully' };
  }
}

module.exports = UserService;