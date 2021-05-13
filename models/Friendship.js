const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// create our Location model
class Friendship extends Model { }

// create fields/columns for Location model
Friendship.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    friend_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'friendship'
  }
);

module.exports = Friendship;