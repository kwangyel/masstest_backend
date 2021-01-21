'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atm = sequelize.define('Atm', {
    atmBankName: DataTypes.STRING,
     }, {});
  Atm.associate = function(models) {
    // associations can be defined here
  };
  return Atm;
};