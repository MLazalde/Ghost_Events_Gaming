const { Product, Set, Card } = require("../models");
const MagicData = {
  name: "magicTG",
  productImage_Url: "TBD",
  description: "Description ex",
  product_set: [
    {
      card_set: {
        set_name: "The Infinte Forbidden",

        num_of_cards: 101,
        description:
          "Return to where it all began with a new strategy featuring the unstoppable Exodia!",

        card_product: [
          {
            card_name: "Dragon of Pride and Sould",
            description: "Level 8 dark, dragon monster for the main deck",
            cardImage_Url: "TBD",
          },
          {
            card_name: "Fiendsmith Engraver",
            description: "Level 6 light, fiend moster for the main deck",
            cardImage_Url: "TBD",
          },
        ],
      },
      card_set: {
        set_name: "Battles of Legend: Terminal's Revenge",

        num_of_cards: 118,
        description:
          "Get awesome foil upgrades as well as sought-after tournament cards in Battles of Legend: Terminal Revenge.",

        card_product: [
          {
            card_name: "Shining Star Dragon",
            description: "Level 4 light, dragon monster for the main deck",
            cardImage_Url: "TBD",
          },
          {
            card_name: "Infernoid Flood",
            description: "Link 3 fire, fiend monster for the extra deck",
            cardImage_Url: "TBD",
          },
        ],
      },
    },
  ],
};

module.exports = { MagicData };
