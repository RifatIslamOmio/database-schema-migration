"use strict";

const TABLENAME = "user-table";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(TABLENAME, "userName", {
      type: Sequelize.STRING
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(TABLENAME, "userName");
  }
};
