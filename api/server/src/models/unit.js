'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    structure_id:DataTypes.INTEGER,
    unitNumber:DataTypes.STRING,
    unitName: DataTypes.STRING,
    shopContact:DataTypes.STRING,
    occupancyStatus:DataTypes.STRING,
    floorLevel:DataTypes.STRING,
    unitOwnership:DataTypes.STRING,
    rent:DataTypes.STRING,
    unitUse:DataTypes.STRING,
    user_id:DataTypes.INTEGER,
    remarks:DataTypes.STRING
  }, {});
  Unit.associate = function(models) {
    // associations can be defined here
  };
  return Unit;
};