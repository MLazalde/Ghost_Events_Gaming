const { Product, Set, Card } = require("../models");

const MagicData = {
  name: "magic-the-gathering",
  productImage_Url: "TBD",
  description:
    "a strategic, collectible card game where players take turns battling each other by casting spells, summoning creatures, and using artifacts from their decks",
  sets: [
    {
      set_name: "Assassin's Creed",
      num_of_cards: 138,
      description:
        " The only way to uncover the secrets of the past is to follow in the footsteps of the assassins who came before, and if you’ve learned anything, it’s that you must be swift, precise, and never show your hand.",
      setImage_Url: "TBD",
      cards: [
        {
          card_name: "Battlefield Improvisation",
          description: "One mana, instant white card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Assassin Den",
          description: "Three mana, creature blue card.",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = MagicData;
