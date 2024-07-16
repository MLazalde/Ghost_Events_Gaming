const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
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
    card_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardImage_Url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "card",
  }
);

module.exports = Card;
