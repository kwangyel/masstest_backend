'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dzongkhag = sequelize.define('Dzongkhag', {
    name: DataTypes.STRING,
    lat: DataTypes.DOUBLE,
    lng: DataTypes.DOUBLE
  }, {});
  Dzongkhag.associate = function(models) {
    // associations can be defined here
    Dzongkhag.belongsToMany(models.User,{as:'users',through: models.UserDzo, foreignKey:'dzoId'})
  };
  return Dzongkhag;
};