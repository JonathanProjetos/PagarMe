const UserServices = require('../services/UserService');

const UserController = {
  Login: async (req, res) => {
    const { body } = req;
    const user = await UserServices.Login(body);
    res.status(200).json(user);
  },

  Register: async (req, res) => {
    const { body } = req;
    const user = await UserServices.Register(body);
    res.status(201).json(user);
  },
};

module.exports = UserController;
