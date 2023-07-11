'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {

    static associate(models) {
      Transaction.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  
  Transaction.init({
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }

    },

    amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)
    },
    
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },

    paymentMethod: {
      allowNull: false,
      type: DataTypes.ENUM('debit_card', 'credit_card')
    },

    cardNumber: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

    cardHolderName: {
      allowNull: false,
      type: DataTypes.STRING
    },

    cardExpirationDate: {
      allowNull: false,
      type: DataTypes.STRING
    },

    cardCvv: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

  }, {
    sequelize,
    modelName: 'Transaction',
    updatedAt: false
  });
  return Transaction;
};