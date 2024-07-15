const sequelize = require("../config/connection");
const { Card, Product, Set } = require("../models/");
const { MagicData } = require("../seeds/magicTG");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  seedProduct(MagicData);
  await process.exit(0);
};

seedAll();

const seedProduct = async (productData) => {
  const parsedProduct = {
    description: productData.description,
    product_name: productData.name,
  };
  if (productData.productImage_Url) {
    parsedProduct.productImage_Url = productData.productImage_Url;
  }
  console.log(parsedProduct);
  const newProduct = await Product.create(parsedProduct);
  console.log("Testing");

  //after product is created, iterate over the array of sets and call seedSet() for each set.
};

const seedSet = async (setData, product_id) => {
  console.log("Seeding Sets");
  seedCard();
  //create the set row

  //iterate the array of cards and call seedCard for each.
};

const seedCard = async (cardData, set_id) => {
  console.log("Seeding Cards");
  //create the row

  //iterate the array of data an
};
