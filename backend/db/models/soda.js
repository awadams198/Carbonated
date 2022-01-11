'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soda = sequelize.define('Soda', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imageUrl: DataTypes.STRING
  }, {});
  Soda.associate = function(models) {
    // associations can be defined here
    Soda.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Soda;
};