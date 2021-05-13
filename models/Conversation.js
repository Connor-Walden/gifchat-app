const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// create our Location model
class Conversation extends Model { }

// create fields/columns for Location model
Conversation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    friendship_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'conversation'
  }
);

module.exports = Conversation;