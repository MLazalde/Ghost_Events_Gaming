const router = require("express").Router();
const { Product, Set, Card, User } = require("../models");

// Get user profile (Dashboard) (done)
//http://localhost:3001/profile
router.get("/profile", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.id);
    if (!userData) {
      res.redirect("/login");
      return;
    }
    const user = userData.get({ plain: true });
    res.render("profile", { user, loggedIn: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all product for the homepage (Done)
//http://localhost:3001/
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

//Get one type of product (Pokemon, Yugioh, MtG, OnePiece, Miscellaneous) (done)
//http://localhost:3001/product/:id
router.get("/product/:id", async (req, res) => {
  //if the user isn't logged in, redirect them to the login page
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    //if the user is logged in, allow them to view the product
    try {
      const productData = await Product.findByPk(req.params.id, {
        include: [Set],
      });
      const product = productData.get({ plain: true });
      console.log(product);
      res.render("product", { product, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

//Get one type of set (last two sets with Yugioh, Pokemon. last two items with MtG, OnePiece, Misc.) (done)
//http://localhost:3001/set/:id
router.get("/set/:id", async (req, res) => {
  console.log(
    "---------------------------------------------------------------------------"
  );
  console.log(req.params.id);
  //if the user is not logged in, redirect them to the login page
  try {
    const setData = await Set.findByPk(req.params.id, {
      include: [Card],
    });
    const set = setData.get({ plain: true });
    console.log(set);
    res.render("set", { set, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/login (done)
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//http://localhost:3001/signup (done)
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("create");
});

//http://localhost:3001/cart (get)
router.get("/cart", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [Card],
    });
    const user = userData.get({ plain: true });
    const cart = user.cards.map((card) => card.card_name);
    console.log(cart);
    console.log(user);
    res.render("cart", {
      email: user.email,
      cart: cart,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
