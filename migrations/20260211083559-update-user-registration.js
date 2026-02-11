'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('user_registrations', 'uid', {
      type: Sequelize.STRING,
      allowNull: false,
      unique:true,
    });
  },
  
};

