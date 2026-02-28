'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserModel.init({
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    mobile: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    uid: DataTypes.STRING,
    is_login: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserModel',
    tableName: 'users'
  });
  console.log("=================== userModel" , UserModel);
  
  return UserModel;
};