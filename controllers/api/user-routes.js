const router = require("express").Router();
const { User, Card } = require("../../models");

// CREATE new user (done)
//http://localhost:3001/api/user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = userData.id;
      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login (done)
//http://localhost:3001/api/user/login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.id = userData.id;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout (done)
//http://localhost:3001/api/user/logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// add to cart ()
//({include: cart})
// Route to add products to the cart
//http://localhost:3001/api/user/cart/add/:id
router.put("/cart/add/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const card = await Card.findByPk(req.params.id);
    if (!card) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await user.addCard(card);
    res.status(200).json({ message: "Product added to cart" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete card from cart ()
//http://localhost:3001/api/user/cart/remove/:id
router.delete("/cart/remove/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.session.user_id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const card = await card.findByPk(req.params.id);
    if (!card) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    await user.destroy(card);
    res.status(200).json({ message: "Product removed from cart" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
