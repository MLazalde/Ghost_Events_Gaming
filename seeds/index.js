const sequelize = require("../config/connection");
const seedYugioh = require("./yugiohData");
const seedMagic = require("./magicData");
const seedOnePiece = require("./onePieceData");
const seedPokemon = require("./pokemonData");
const seedMiscellaneous = require("./miscellaneousData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedYugioh();

  await seedMagic();

  await seedOnePiece();

  await seedPokemon();

  await seedMiscellaneous();

  process.exit(0);
};
seedAll();

const seedProduct = async (productData) => {
  try {
    // const parsedProduct = {
    //   description: productData.description,
    //   product_name: productData.name,
    // };
    // if (productData.productImage_Url) {
    //   parsedProduct.productImage_Url = productData.productImage_Url;
    // }
    const testData = {
      id: 1,
      description: "Something Description",
      product_name: "Product name",
      productImage_Url: "Image test",
    };
    // console.log(parsedProduct);
    const newProduct = await Product.create(testData);

    console.log("Testing");
  } catch (error) {
    console.log("There is an error!!");
    console.log(error);
  }

  //after product is created, iterate over the array of sets and call seedSet() for each set.
};

const seedSet = async (setData, product_id) => {
  console.log("Seeding Sets");
  // seedCard();
  const testObject = {
    description: "Test descr",
    set_name: "Test name",
    setImage_Url: "tbd",
  };
  await Set.create(testObject);
  //create the set row

  //iterate the array of cards and call seedCard for each.
};

const seedCard = async (cardData, set_id) => {
  console.log("Seeding Cards");
  //create the row

  //iterate the array of data an
};
