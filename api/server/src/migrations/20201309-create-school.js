'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Schools', {
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
      schoolName:{
          type: Sequelize.STRING
      }, 
      schoolEstablishmentYear:{
        type: Sequelize.STRING
      },
      schoolStaffMale:{
        type: Sequelize.STRING
      },
      schoolStaffFemale:{
        type: Sequelize.STRING
      },
      studentsMale:{
        type: Sequelize.STRING
      },
      studentsFemale:{
        type: Sequelize.STRING
      },
      vehicles:{
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
    return queryInterface.dropTable('Schools');
  }
};