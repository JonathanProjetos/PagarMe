'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }

      },

      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },

      type: {
        allowNull: false,
        type: Sequelize.ENUM('debit_card', 'credit_card')
      },

      cardNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      cardName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cardExpirationDate: {
        allowNull: false,
        type: Sequelize.DATE
      },

      cardCvv: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      payable: {
        allowNull: false,
        type: Sequelize.ENUM('waiting_funds', 'paid')
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },

  async down (queryInterface, Sequelize) {}
};