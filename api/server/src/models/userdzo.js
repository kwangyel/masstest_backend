'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserDzo = sequelize.define('UserDzo', {
    userId: DataTypes.INTEGER,
    dzoId: DataTypes.INTEGER
  }, {});
  UserDzo.associate = function(models) {
    // associations can be defined here
    UserDzo.belongsTo(models.User,{foreignKey:'userId',targetKey:'id',as:'users'});
    UserDzo.belongsTo(models.Dzongkhag,{foreignKey:'dzoId',targetKey:'id',as:'dzongkhags'});
  };
  return UserDzo;
};