'use strict';
module.exports = (sequelize, DataTypes) => {
  const Institution = sequelize.define('Institution', {
      structure_id:DataTypes.INTEGER,
      user_id:DataTypes.INTEGER,
      instituteName:DataTypes.STRING,
      instituteEstablishmentYear:DataTypes.STRING,
      instituteStaffMale:DataTypes.STRING,
      instituteStaffFemale:DataTypes.STRING,
      instituteVehicle:DataTypes.STRING,
  }, {});
  Institution.associate = function(models) {
    // associations can be defined here
  };
  return Institution;
};