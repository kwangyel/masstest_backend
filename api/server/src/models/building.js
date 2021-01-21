'use strict';
module.exports = (sequelize, DataTypes) => {
  const Building= sequelize.define('Building', {
    structure_id: DataTypes.INTEGER,
    nameOfTheBuilding: DataTypes.STRING,
    buildingOwnership: DataTypes.STRING,
    nameOfTheBuildingOwner: DataTypes.STRING,
    contactNumberBuilding: DataTypes.STRING,
    approvedDrawing: DataTypes.STRING,
    occupancyCertificate: DataTypes.STRING,
    associativePosition: DataTypes.STRING,
    existancyStatus: DataTypes.STRING,
    yearOfConstruction: DataTypes.STRING,
    yearOfRenovation: DataTypes.STRING,
    numberOfFloors: DataTypes.STRING,
    attic: DataTypes.STRING,
    stilt: DataTypes.STRING,
    jamthog: DataTypes.STRING,
    basement: DataTypes.STRING,
    buildingStyle: DataTypes.STRING,
    structureType: DataTypes.STRING,
    materialType: DataTypes.STRING,
    roofType: DataTypes.STRING,
    roofingMaterial: DataTypes.STRING,
    emergencyExit: DataTypes.STRING,
    lift: DataTypes.STRING,
    sewerTreatment: DataTypes.STRING,
    wasteCollection: DataTypes.STRING,
    dryWasteCollection: DataTypes.STRING,
    wetWasteCollection: DataTypes.STRING,
    waterSupply: DataTypes.STRING,
    buildingUse: DataTypes.STRING,
    parking: DataTypes.STRING,
    buildingRemarksstring: DataTypes.STRING,
    user_id: DataTypes.INTEGER
    }, {});
  Building.associate = function(models) {
    // associations can be defined here
  };
  return Building;
};