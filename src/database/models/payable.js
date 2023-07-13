'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payable extends Model {

    static associate(models) {
      Payable.belongsTo(models.Transaction, {
        foreignKey: 'id',
        as: 'transaction'
      });
    }
  }

  Payable.init({

    transactionId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Transactions',
        key: 'id'
      },
      onUpdate: 'CASCADE',
    },

    status: {
      allowNull: false,
      type: DataTypes.ENUM('paid', 'waiting_funds'),
    },
    paymentDate: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    amount: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2)    
    }
  }, {
    sequelize,
    modelName: 'Payable',
    timestamps: false
  });
  return Payable;
};