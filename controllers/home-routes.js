const router = require("express").Router();
const { Product, Set, Card } = require("../models");

//Get all product for the homepage
router.get("/", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Set,
          attribute: [], //list attributes
        },
      ],
    });

    const products = productData.map((product) => product.get({ plain: true }));
    res.render("homepage", {
      products,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Get one type of product (Pokemon, Yugioh, MtG, OnePiece, Miscellaneous)
router.get("/product/:id", async (req, res) => {
  //if the user isn't logged in, redirect them to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //if the user is logged in, allow them to view the product
    try {
      const productData = await Product.findbyPk(req.params.id, {
        include: [
          {
            model: Set,
            attributes: [], //list attributes
          },
          {
            model: Card,
            attributes: [], //list attributes
          },
        ],
      });
      const product = productData.get({ plain: true });
      res.render("product", { product, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//Get one type of set (last two sets with Yugioh, Pokemon. last two items with MtG, OnePiece, Misc.)
router.get("/set/:id", async (req, res) => {
  //if the user is not logged in, redirect them to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //if user is logged in, allow them to view/buy the set
    try {
      const setData = await Set.findbyPk(req.params.id);

      const set = setData.get({ plain: true });

      res.render("set", { set, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//get one specific card from the set/items
router.get("/card/:id", async (req, res) => {
  //if the user is not logged in, redirect them to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //if user is logged in, allow them to view/buy the set
    try {
      const cardData = await Card.findbyPk(req.params.id);

      const card = cardData.get({ plain: true });

      res.render("card", { card, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
