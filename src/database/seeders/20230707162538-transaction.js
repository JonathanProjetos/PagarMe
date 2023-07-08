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
        cardHouderName: 'John Doe',
        cardExpirationDate: '2021-12-31',
        cardCvv: 123,
        createdAt: new Date(),
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {}
};
