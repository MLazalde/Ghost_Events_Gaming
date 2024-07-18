const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

// Home route to render homepage
//http://localhost:3001/
router.use("/", homeRoutes);

//http://localhost:3001/api
router.use("/api", apiRoutes);

module.exports = router;
