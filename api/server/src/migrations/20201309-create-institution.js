'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Institutions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id:{
        type: Sequelize.INTEGER
      },
      user_id:{
        type: Sequelize.INTEGER
      },
      instituteName:{
          type: Sequelize.STRING
      }, 
      instituteEstablishmentYear:{
        type: Sequelize.STRING
      },
      instituteStaffMale:{
        type: Sequelize.STRING
      },
      instituteStaffFemale:{
        type: Sequelize.STRING
      },
      instituteVehicle:{
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Institutions');
  }
};