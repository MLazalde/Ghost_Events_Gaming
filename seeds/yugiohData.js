const { Product, Set, Card } = require("../models");

const yugiohData = [
  {
    name: "yugioh",
    product_set: [
      {
        card_set: {
          set_name: "The Infinte Forbidden",
          set_code: "INFO",
          num_of_cards: 101,
          description:
            "Return to where it all began with a new strategy featuring the unstoppable Exodia!",
          product_id: 1, //productId number
          card_product: [
            {
              card_name: "Dragon of Pride and Sould",
              description: "Level 8 dark, dragon monster for the main deck",
              set_id: 1,
              product_id: 1,
            },
            {
              card_name: "Fiendsmith Engraver",
              description: "Level 6 light, fiend moster for the main deck",
              set_id: 1,
              product_id: 1,
            },
          ],
        },
        card_set: {
          set_name: "Battles of Legend: Terminal's Revenge",
          set_code: "BLTR",
          num_of_cards: 118,
          description:
            "Get awesome foil upgrades as well as sought-after tournament cards in Battles of Legend: Terminal Revenge.",
          product_id: 1,
          card_product: [
            {
              card_name: "Shining Star Dragon",
              description: "Level 4 light, dragon monster for the main deck",
              set_id: 2,
              product_id: 1,
            },
            {
              card_name: "Infernoid Flood",
              description: "Link 3 fire, fiend monster for the extra deck",
              set_id: 2,
              product_id: 1,
            },
          ],
        },
      },
    ],
  },
];
