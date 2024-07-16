const User = require("./User");
const Product = require("./Product");
const Set = require("./Set");
const Card = require("./Card");

//Sequelization associations


Product.hasMany(Set);

Set.belongsTo(Product);

Set.hasMany(Card);

Card.belongsTo(Set);

//user and card should be many to many

module.exports = { User, Product, Set, Card };
