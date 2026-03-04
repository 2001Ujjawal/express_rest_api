"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove unique index from mobile column
    await queryInterface.removeIndex("users", "mobile");

    // Change column to normal (without unique)
    await queryInterface.changeColumn("users", "mobile", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    // Add unique back (rollback support)
    await queryInterface.changeColumn("users", "mobile", {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  },
};