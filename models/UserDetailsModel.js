"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDetailsModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetailsModel.init(
    {
      uid: DataTypes.STRING,
      user_id: DataTypes.STRING,
      address: DataTypes.string,
      phone: DataTypes.string,
      status: {
        type: DataTypes.ENUM("active", "inactive", ""),
        allowNull: false,
        defaultValue: "active",
      },
      second_address: DataTypes.string,
    },
    {
      sequelize,
      modelName: "UserDetailsModel",
      tableName: user_details,
      timestamps: true,
    },
  );
  return UserDetailsModel;
};
