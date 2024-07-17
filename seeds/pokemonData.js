const { Product, Set, Card } = require("../models");
const { productImage_Url } = require("./yugiohData");

const pokemonData = {
  name: "pokemon",
  productImage_Url: "TBD",
  description:
    "A two-player, strategic battle game that uses collectible cards based on the Pokémon franchise.",
  sets: [
    {
      set_name: "Twilight Masquerade Elite Trainer Box",
      num_of_cards: 160,
      description:
        "Welcome to the land of Kitakami, where people and Pokémon live harmoniously with nature.",
      setImage_Url: "TBD",
      cards: [
        {
          card_name: "Luminous Energy",
          description: "A special energy, gold card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Carmine",
          description: "A special illustration rare supporter, trainer card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Greninja EX",
          description:
            "A special illustration rare, stage 2 pokemon card(Fighting-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Ogerpon EX",
          description:
            "A specal illustration rare, basic pokemon card(Fire-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Perrin",
          description: "A full art supporter, trainer card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Iron Thorns EX",
          description: "A full art, basic pokemon card(Electric-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Tatsugiri",
          description: "A full art, basic pokemon card(Dragon-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Snorlax",
          description:
            "A basic, normal-type pokemon with a four-energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Drakloak",
          description:
            "A stage 1, dragon-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Skarmory",
          description:
            "A basic, steel-type pokemon with a two energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Scolipede",
          description:
            "A stage 2, dark-type pokemon with  a three energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Hawlucha",
          description:
            "A basic, fighting-type pokeon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Alakazam",
          description:
            "A stage 2, psychic-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Zapdos",
          description:
            "A basic, electric-type pokemon with a two energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Trevenant",
          description:
            "A stage 1, grass-type pokemon with a three energy retreat cost.",
          cardImage_Url: "TBD",
        },
      ],
    },
    {
      set_name: "Charizard ex Premium Collection",
      num_of_cards: 60,
      description:
        "Charizard ex burns up the opposition’s lead with the cunning firepower of a Darkness-type Pokémon!",
      setImg_Url: "TBD",
      cards: [
        {
          card_name: "Charizard EX",
          description:
            "A full art, stage 2 pokemon with a two energy retreat cost(Dark-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Tyranitar EX",
          description:
            "A full art, stage 2 pokemon with a four energy retreat cost(Electric-type).",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Scyther",
          description:
            "A basic, grass-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Decidueye EX",
          description:
            "A stage 2, grass-type pokemon with a two energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Entei",
          description:
            "A basic, fire-type pokemon with a two energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Victini EX",
          description:
            "A basic, fire-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Lapras",
          description:
            "A bsic, water-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Wiglett",
          description:
            "A basic, water-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Magneton",
          description:
            "A stage 1, electric-type pokemon with a two energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Pawmot EX",
          description:
            "A stage 2, electric-type pokemon with a zero energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Spoink",
          description:
            "A basic, psychic-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Vespiquen EX",
          description:
            "A stage 1, psychic-type pokemon with a two energy cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Dragonite EX",
          description:
            "A stage 2, dragon-type pokemon with a rwo energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Melmetal EX",
          description:
            "A stage 1, steel-type pokemon with a four energy retreat cost.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Absol EX",
          description:
            "A basic, dark-type pokemon with a one energy retreat cost.",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = pokemonData;
