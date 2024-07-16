
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Set extends Model {}

Set.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    set_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    setImage_Url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "set",
  }
);

module.exports = Set;
