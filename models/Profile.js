const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

// create our Location model
class Profile extends Model { }

// create fields/columns for Location model
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'profile'
  }
);

module.exports = Profile;