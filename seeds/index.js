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
