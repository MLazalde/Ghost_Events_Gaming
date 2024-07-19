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
      setImage_Url: "../public/img/onePiece.jpg",
      cards: [
        {
          card_name: "Usopp",
          description:
            "A green, 3 energy card with 5000 power. It has counter +1000.",
          cardImage_Url: "../public/img/usopp.jpg",
        },
        {
          card_name: "Jinbe",
          description:
            "A green, 2 energy card with 4000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Tony Tony-Chopper",
          description:
            "a green, 2 energy card with 200 power. It has counter +2000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Trafalgar Law",
          description:
            "A free, 2 energy card with 300 power. IT has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Nico Robin",
          description:
            "A green, 3 energy card with 4000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Franky",
          description:
            "A green, 5 energy card with 7000 power. It hs counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Brook",
          description:
            "A green, 4 energy card with 5000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Monkey D. Luffy",
          description:
            "A green, 7 energy card with 7000 power. It is a blocker.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Roronoa Zoro",
          description:
            "A green, 4 energy card with 6000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Three Sword Style Oni Giri",
          description: "A green, 3 energy card. It has a trigger.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Uta",
          description: "Leader Card",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Uta",
          description:
            "A green, 3 energy card with 4000 power. It has counter +1000.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Blacklight",
          description:
            "A green, 2 energy card. It is an event and trigger card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "New Genesis",
          description: "A green, 1 energy card. It is an event card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "I'm invincible",
          description:
            "A green, 3 energy card. It is an event and trigger card.",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = onePieceData;
