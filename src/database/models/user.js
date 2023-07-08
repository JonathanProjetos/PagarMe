'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Transaction, {
        foreignKey: 'userId',
        as: 'transactions'
      });
    }
  }
  User.init({
    name: {
      allowNull: true,
      type: DataTypes.STRING
    },

    lastName: {
      allowNull: true,
      type: DataTypes.STRING
    },

    email: {
      allowNull: false,
      type: DataTypes.STRING
    },

    hashPassword: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User',
    updatedAt: false
  });
  return User;
};