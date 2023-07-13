const PayableServices = require('../services/PayableServices');

const PayableController = {
  getBalance: async (req, res) => {
    const { email } = req;
    const { status } = req.query;
    const balance = await PayableServices.getBalance(status, email);
    res.status(200).json(balance);
  },
};

module.exports = PayableController;
