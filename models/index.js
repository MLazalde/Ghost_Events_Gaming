const User = require("./User");
const Product = require("./Product");
const Set = require("./Set");
const Card = require("./Card");

//Sequelization associations

Product.hasMany(Set, {
  foreignKey: "product_id",
});

Set.hasMany(Card, {
  foreignKey: "set_id",
});

Card.belongsTo(Set, {
  foreignKey: "set_id",
});

Card.belongsTo(Product, {
  foreignKey: "product_id",
});

module.exports = { User, Product, Set, Card };
