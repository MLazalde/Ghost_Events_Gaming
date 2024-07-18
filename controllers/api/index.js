const router = require("express").Router();

const userRoutes = require("./user-routes");

//http://localhost:3001/api/product
router.use("/user", userRoutes);

module.exports = router;
