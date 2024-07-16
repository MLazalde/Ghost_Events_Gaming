const sequelize = require("../config/connection");

const { Card, Product, Set } = require("../models/");
const { MagicData } = require("./magicData");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedProduct(MagicData);

  await process.exit(0);
};
const seedYugioh = require("./yugiohData");
const seedMagic = require("./magicData");
const seedOnePiece = require("./onePieceData");
const seedPokemon = require("./pokemonData");
const seedMiscellaneous = require("./miscellaneousData");

seedAll();

const seedProduct = async (productData) => {
  try {
    const parsedProduct = {
      description: productData.description,
      product_name: productData.name,
    };
    if (productData.productImage_Url) {
      parsedProduct.productImage_Url = productData.productImage_Url;
    }
    // console.log(parsedProduct);
    const newProduct = await Product.create(parsedProduct);
    const productId = newProduct.id;
    for (let index = 0; index < productData.sets.length; index++) {
      const element = productData.sets[index];
      await seedSet(element, productId);
    }
  } catch (error) {
    console.log("There is an error!!");
    console.log(error);
  }

  //after product is created, iterate over the array of sets and call seedSet() for each set.
};

const seedSet = async (setData, product_id) => {
  console.log("Seeding Sets");
  console.log(setData);
  const newSet = {
    description: setData.description,
    set_name: setData.set_name,
    productId: product_id,
  };
  if (setData.setImage_Url) {
    newSet.setImage_Url = setData.setImage_Url;
  }
  const createdSet = await Set.create(newSet);
  const setId = createdSet.id;
  for (let index = 0; index < setData.cards.length; index++) {
    const element = setData.cards[index];
    await seedCard(element, setId);
  }
  //create the set row

  //iterate the array of cards and call seedCard for each.
};

const seedCard = async (cardData, set_id) => {
  console.log("Seeding Cards");
  const newCard = {
    card_name: cardData.card_name,
    description: cardData.description,
    setId: set_id,
  };
  if (cardData.cardImage_Url) {
    newCard.cardImage_Url = cardData.cardImage_Url;
  }
  await Card.create(newCard);
  //create the row

  //iterate the array of data an
};
