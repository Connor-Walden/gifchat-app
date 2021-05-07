const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// create our Location model
class Message extends Model { }

// create fields/columns for Location model
Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    conversation_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'message'
  }
);

module.exports = Message;