'use strict';
module.exports = (sequelize, DataTypes) => {
  const Soda = sequelize.define('Soda', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Soda.associate = function(models) {
    // associations can be defined here
    Soda.belongsTo(models.User, { foreignKey: 'user_id' });
  };
  return Soda;
};