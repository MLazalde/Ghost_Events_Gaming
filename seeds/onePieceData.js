const { Product, Set, Card } = require("../models");

const onePieceData = {
  name: "one-piece",
  productImage_Url: "TBD",
  description:
    "A collectible trading card game (TCG) based on the popular manga and anime series One Piece by Eiichiro Oda",
  sets: [
    {
      set_name: "Starter Deck - Uta",
      num_of_cards: 51,
      description:
        "A 51-card deck based on Uta's song from the movie ONE PIECE FILM RED",
      setImage_Url: "TBD",
      cards: [
        {
          card_name: "Usopp",
          description:
            "A green, 3 energy card with 5000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Jinbe",
          description:
            "A green, 2 energy card with 4000 power. It has counter +1000",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = onePieceData;
