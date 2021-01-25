'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    cid: DataTypes.BIGINT,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};