'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
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
        },
        onUpdate: 'CASCADE',
      },

      amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      
      description: {
        allowNull: false,
        type: Sequelize.STRING
      },

      paymentMethod: {
        allowNull: false,
        type: Sequelize.ENUM('debit_card', 'credit_card')
      },

      cardNumber: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      cardHolderName: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cardExpirationDate: {
        allowNull: false,
        type: Sequelize.STRING
      },

      cardCvv: {
        allowNull: false,
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

    }, {
      updatedAt: false
    });
  },

  async down (queryInterface, Sequelize) {}
};