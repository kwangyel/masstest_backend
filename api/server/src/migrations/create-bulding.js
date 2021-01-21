'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Buildings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id:{ type:Sequelize.INTEGER, allowNull: false, unique: true },
      nameOfTheBuilding:{ type: Sequelize.STRING },
      buildingOwnership:{ type: Sequelize.STRING },
      nameOfTheBuildingOwner:{ type: Sequelize.STRING },
      contactNumberBuilding:{ type: Sequelize.STRING },
      approvedDrawing:{ type: Sequelize.STRING },
      occupancyCertificate:{ type: Sequelize.STRING },
      associativePosition:{ type: Sequelize.STRING },
      existancyStatus:{ type: Sequelize.STRING },
      yearOfConstruction:{ type: Sequelize.STRING },
      yearOfRenovation:{ type: Sequelize.STRING },
      numberOfFloors:{ type: Sequelize.STRING },
      attic:{ type: Sequelize.STRING },
      stilt:{ type: Sequelize.STRING },
      jamthog:{ type: Sequelize.STRING },
      basement:{ type: Sequelize.STRING },
      buildingStyle:{ type: Sequelize.STRING },
      structureType:{ type: Sequelize.STRING },
      materialType:{ type: Sequelize.STRING },
      roofType:{ type: Sequelize.STRING },
      roofingMaterial:{ type: Sequelize.STRING },
      emergencyExit:{ type: Sequelize.STRING },
      lift:{ type: Sequelize.STRING },
      sewerTreatment:{ type: Sequelize.STRING },
      wasteCollection:{ type: Sequelize.STRING },
      dryWasteCollection:{ type: Sequelize.STRING },
      wetWasteCollection:{ type: Sequelize.STRING },
      waterSupply:{ type: Sequelize.STRING },
      buildingUse:{ type: Sequelize.STRING },
      parking:{ type: Sequelize.STRING },
      buildingRemarksstring:{ type: Sequelize.STRING },
      user_id:{ type: Sequelize.INTEGER },

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
    return queryInterface.dropTable('Buildings');
  }
};