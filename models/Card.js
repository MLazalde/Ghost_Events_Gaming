
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

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Card extends Model {}

Card.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    card_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    set_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "set",
        key: "id",
      },
    },
    product_id: {
      type: DataTypes.STRING,
      references: {
        model: "product",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "card",
  }
);

module.exports = Card;
