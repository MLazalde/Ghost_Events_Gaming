const { Product, Set, Card } = require("../models");

const miscellaneousData = {
  name: "miscellaneous",
  productImage_Url: "TBD",
  description:
    "Additional trading card games (TCG) designed by Disney and japanese mangaka, Kohei Horikoshi",
  sets: [
    {
      set_name: "Lorcana: Into the Inklands",
      num_of_cards: 204,
      description:
        "The flood has washed precious lore far into the Inklands! Eager to recover what was lost, adventurous Illumineers head into the unknown reaches of the realm.",
      setImage_Url: "TBD",
      cards: [
        {
          card_name: "Baloo - von BruinWald XIII",
          description: "A rare amber, 3 power card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Alice - Tea Alchemist",
          description: "A super rare amethyst, 6 power card.",
          cardImage_Url: "TBD",
        },
      ],
    },
    {
      set_name: "My Hero Academia: Girl Power",
      num_of_cards: 180,
      description:
        "The My Hero Academia: Girl Power booster set will feature all your favorite female students, heroes, and villains.",
      setImage_Url: "TBD",
      cards: [
        {
          card_name: "America's #1 Hero",
          description: "A rare, 3 difficulty foundation card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Ryukyu",
          description: "A character rare, 6 difficulty air earth order card",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = miscellaneousData;
