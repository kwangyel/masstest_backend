'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Residents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      structure_id:{type: Sequelize.INTEGER},
      unit_id:{ type: Sequelize.INTEGER },
      headHousehold: { type: Sequelize.STRING },
      contactNumberHead: { type: Sequelize.STRING },
      bhutaneseNationals: { type: Sequelize.STRING },
      nonBhutaneseNationals:{ type: Sequelize.STRING },
      buddhismMale:{ type: Sequelize.STRING },
      buddhismFemale: { type: Sequelize.STRING },
      hinduismMale: { type: Sequelize.STRING },
      hinduismFemale: { type: Sequelize.STRING },
      christianityMale: { type: Sequelize.STRING },
      christianityFemale: { type: Sequelize.STRING },
      otherMaleR: { type: Sequelize.STRING },
      otherFemaleR: { type: Sequelize.STRING },
      maleBelow6: { type: Sequelize.STRING },
      femaleBelow6: { type: Sequelize.STRING },
      male617: { type: Sequelize.STRING },
      female617: { type: Sequelize.STRING },
      male1824: { type: Sequelize.STRING },
      female1824: { type: Sequelize.STRING },
      male2559: { type: Sequelize.STRING },
      female2559: { type: Sequelize.STRING },
      male60: { type: Sequelize.STRING },
      female60: { type: Sequelize.STRING },
      armedMale: { type: Sequelize.STRING },
      armedFemale: { type: Sequelize.STRING },
      civilMale: { type: Sequelize.STRING },
      civilFemale: { type: Sequelize.STRING },
      farmerMale: { type: Sequelize.STRING },
      farmerFemale: { type: Sequelize.STRING },
      houseHusband: { type: Sequelize.STRING },
      houseWife: { type: Sequelize.STRING },
      jobSeekerMale: { type: Sequelize.STRING },
      jobSeekerFemale: { type: Sequelize.STRING },
      monk:{ type: Sequelize.STRING },
      nun:{ type: Sequelize.STRING },
      privateEmployeeMale: { type: Sequelize.STRING },
      privateEmployeeFemale: { type: Sequelize.STRING },
      retireeMale: { type: Sequelize.STRING },
      retireeFemale: { type: Sequelize.STRING },
      corporateMale: { type: Sequelize.STRING },
      corporateFemale: { type: Sequelize.STRING },
      studentMale: { type: Sequelize.STRING },
      studentFemale: { type: Sequelize.STRING },
      othersMale: { type: Sequelize.STRING },
      othersFemale: { type: Sequelize.STRING },
      familyIncome: { type: Sequelize.STRING },
      differentlyAbled: { type: Sequelize.STRING },
      electricCar: { type: Sequelize.STRING },
      hybridCar: { type: Sequelize.STRING },
      taxi: { type: Sequelize.STRING },
      resParking: { type: Sequelize.STRING },
      workPlaceSchool: { type: Sequelize.STRING },
      busTransport: { type: Sequelize.STRING },
      ownLand: { type: Sequelize.STRING },
      ownHouse: { type: Sequelize.STRING },
      residentRemarks: { type: Sequelize.STRING },

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
    return queryInterface.dropTable('Residents');
  }
};