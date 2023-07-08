'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John Doe',
        email: 'test@test.com',
        hashPassword: '$2a$10$ct.1ZS11o6b10aASci3sIe826wQWN/6Rxl.e0XT.y48ZwWGuE3Rt.', // 123456
        createdAt: new Date(),
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {}
};
