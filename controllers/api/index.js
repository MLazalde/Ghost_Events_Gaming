const router = require("express").Router();

const productRoutes = require("./product");
//http://localhost:3001/api/product
router.use("/product", productRoutes);

module.exports = router;
