'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
      structure_id:DataTypes.INTEGER,
      user_id:DataTypes.INTEGER,
      schoolName:DataTypes.STRING,
      schoolEstablishmentYear:DataTypes.STRING,
      schoolStaffMale:DataTypes.STRING,
      schoolStaffFemale:DataTypes.STRING,
      studentsMale:DataTypes.STRING,
      studentsFemale:DataTypes.STRING,
      vehicles:DataTypes.STRING
  }, {});
  School.associate = function(models) {
    // associations can be defined here
  };
  return School;
};