'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Model } = sequelize.Sequelize;
  class User extends Model {}

  User.init(
    {
      name: DataTypes.STRING,
      score: DataTypes.INTEGER
    },
    { sequelize }
  );

  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
