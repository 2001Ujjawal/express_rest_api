"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserRegisterModel extends Model {
    static associate(models) {
      // define associations here later
    }
  }

  UserRegisterModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      uid: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      full_name: {
        type: DataTypes.STRING(121),
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING(121),
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(121),
        allowNull: false,
        unique: true,
      },

      mobile: {
        type: DataTypes.STRING(121),
        allowNull: true,
      },

      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "UserRegisterModel",
      tableName: "user_registrations", 
      timestamps: true,
    }
  );

  return UserRegisterModel;
};
