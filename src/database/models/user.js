'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // user.hasMany(models.transaction, {
      //   foreignKey: 'userId',
      //   as: 'transactions'
      // });
    }
  }
  User.init({
    name: {
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
  });
  return User;
};