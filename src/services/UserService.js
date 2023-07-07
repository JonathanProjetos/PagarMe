const { User } = require('../database/models');
const bycrypt = require('bcryptjs');
const jwt = require('../middlewares/token');


const UserService = {
  Login: async (body) => {
    const { email, password } = body;

    console.log(email);
    const checkUser = await User.findOne({ where: { email } });

    if (!checkUser) throw new Error('400|User not found');

    const passwordMatch = await bycrypt.compareSync(password, checkUser.hashPassword);

    if (!passwordMatch) throw new Error('400|Password does not match');

    const createToken = jwt.generateToken(email);

    return { token: createToken };
  },

  Registrer: async (body) => {
  
  }
}

module.exports = UserService;