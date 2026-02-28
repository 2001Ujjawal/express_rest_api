'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class UserDetails extends Model {
    static associate(models) {
      // FK: users_details.user_id → users.id
      UserDetails.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }

  UserDetails.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      uid: {
        type: DataTypes.STRING(121),
        allowNull: false
      },

      addressJson: {
        type: DataTypes.STRING(121),
        allowNull: false,
        field: 'address_json'
      },

      secondPhoneNo: {
        type: DataTypes.STRING(121),
        field: 'secound_ph_no'
      },

      secondAddressJson: {
        type: DataTypes.TEXT('long'),
        field: 'second_address_json'
      },

      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id'
      }
    },
    {
      sequelize,
      modelName: 'UserDetails',
      tableName: 'users_details',
      timestamps: false
    }
  );

  return UserDetails;
};
