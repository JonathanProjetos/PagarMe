const UserServices = require('../services/UserService');

const UserController = {
  Login: async (req, res) => {
    const { body } = req;
    const user = await UserServices.Login(body);
    res.status(200).json(user);
  },
};

module.exports = UserController;