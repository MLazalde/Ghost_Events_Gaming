const { Product, Set, Card } = require("../models");

const magicData = {
  name: "magic-the-gathering",
  productImage_Url: "TBD",
  description:
    "A strategic, collectible card game where players take turns battling each other by casting spells, summoning creatures, and using artifacts from their decks",
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
          card_name: "Tax Collector",
          description: "One mana, creature white card",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Assassin Den",
          description: "Three mana, creature blue card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Propaganda",
          description: "Two mana, enchantmment blue card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Fatal Push",
          description: "Zero mana, instant black card",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Conspiracy",
          description: "Three mana, enchantment black card",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Cathartic Reunion",
          description: "One mana, sorcery red card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Overpowering Attack",
          description: "Three mana, sorcery red card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Hunter's Bow",
          description: "One mana, artifact-equipment green card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Viewpoint Synchronization",
          description: "Four mana, sorcery green card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Bleeding Effect",
          description: "Two mana, enchantment multicolor card(white/black).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Shao Jun",
          description:
            "One mana, legendary creature-human assassin multicolor card(red/blue).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Shapeshifter",
          description: "Token creature colorless card",
          cardImage_Url: "TBD",
        },
        {
          card_name: "The Capitoline Triad",
          description:
            "Ten mana, leagendary creature-god artificer colorless card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Apple of Eden, Isu Relic",
          description: "Four mana, legendary artifact colorless card.",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = magicData;
