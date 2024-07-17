const router = require("express").Router();
const { Model } = require("sequelize");
const { User, Product, Set, Card } = require("../../models");

//http://localhost:3001/api/product
router.get("/", async (req, res) => {
  try {
    //product has many sets
    const dbProductData = await Product.findAll({
      include: [
        {
          model: Set,
          attributes: [set_name, description],
        },
      ],
    });

    const product = dbProductData.map((product) =>
      product.get({ plain: true })
    );

    return res.render("homepage", {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET one product
//http://localhost:3001/api/product/:id
router.get("/:id", async (req, res) => {
  try {
    const dbProductData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: Set,
          attributes: ["id", "description", "set_name", "setImage_Url"],
        },
      ],
    });

    const product = dbProductData.get({ plain: true });
    res.render("product", { product, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/product
router.get("/", async (req, res) => {
    try {
      //product has many sets
      const dbProductData = await Product.findAll({
        include: [
          {
            model: Set,
            attributes: [set_name, description],
          },
        ],
      });
  
      const product = dbProductData.map((product) =>
        product.get({ plain: true })
      );
  
      res.render("homepage", {
        products,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//GET once set
//http://localhost:3001/api/product/set/:id
router.get("/set/:id", async (req, res) => {
  try {
    const dbSetData = await Set.findByPk(req.params.id);

    const set = dbSetData.get({ plain: true });

    res.render("set", { set, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
