'use strict';
module.exports = (sequelize, DataTypes) => {
  const Command = sequelize.define('Command', {
    userId: DataTypes.INTEGER,
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    type: DataTypes.ENUM('voiceCommand', 'bciCommand'), // voiceCommand and bciCommand
    valueFrom: DataTypes.STRING,
    valueTo: DataTypes.STRING,
  }, {});
  Command.associate = function(models) {
    Command.belongsTo(models.User);
  };
  return Command;
};
