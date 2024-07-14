const User = require("./User");
const Product = require("./Product");
const Set = require("./Set");
const Card = require("./Card");

//Sequelization associations

Product.hasMany(Set, {
  //foreign key
});

Set.hasMany(Card, {
  //foreign key
});

Card.belongsTo(Set, {
  //foreign key
});

module.exports = { User, Product, Set, Card };
