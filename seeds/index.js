const sequelize = require("../config/connection");
const { Card, Product, Set } = require("../models/")

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await process.exit(0);
};

seedAll();
