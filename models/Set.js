const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Set extends Model {}

Set.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    set_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    set_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    num_of_cards: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "set",
  }
);

module.exports = Set;
