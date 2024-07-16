const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    productImage_Url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "product",
  }
);

module.exports = Product;
