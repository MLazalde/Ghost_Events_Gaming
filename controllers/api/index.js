const router = require("express").Router();

const userRoutes = require("./user-routes");

//http://localhost:3001/api/user
router.use("/user", userRoutes);

module.exports = router;
