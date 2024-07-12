const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await process.exit(0);
};

seedAll();
