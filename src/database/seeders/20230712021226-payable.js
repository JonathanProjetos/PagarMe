'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const daysLater = new Date().setDate(new Date().getDate() + 30);

    await queryInterface.bulkInsert('Payables', [
      {
        id:1,
        transactionId: 1,
        status: 'paid',
        paymentDate: new Date().toISOString().split("T")[0],
        amount: 97.00,
      },
      {
        id:2,
        transactionId: 2,
        status: 'waiting_funds',
        paymentDate: new Date(daysLater).toISOString().split("T")[0],
        amount: 95.00,
      }
  
    ], {});
  
  },

  async down (queryInterface, Sequelize) {}
};
