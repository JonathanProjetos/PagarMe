'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
        id: 1,
        userId: 1,
        amount: 100.00,
        description: 'Smartband XYZ 3.0',
        paymentMethod: 'debit_card',
        cardNumber: 123456789,
        cardHolderName: 'John Doe',
        cardExpirationDate: '2021-12',
        cardCvv: 123,
        createdAt: new Date().toISOString().split("T")[0]
      },
      {
        id: 2,
        userId: 1,
        amount: 100.00,
        description: 'Smartband XYZ 3.0',
        paymentMethod: 'credit_card',
        cardNumber: 123456789,
        cardHolderName: 'John Doe',
        cardExpirationDate: '2021-12',
        cardCvv: 123,
        createdAt: new Date().toISOString().split("T")[0]
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {}
};
