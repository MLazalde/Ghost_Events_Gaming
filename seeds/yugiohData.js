const { Product, Set, Card } = require("../models");

const yugiohData = {
  name: "yugioh",
  productImage_Url: "TBD",
  description:
    "A collectible card game (CCG) developed and published by Konami based on the fictional game of Duel Monsters",
  sets: [
    {
      set_name: "The Infinte Forbidden",
      num_of_cards: 101,
      description:
        "Return to where it all began with a new strategy featuring the unstoppable Exodia!",
      setImage_Url: "../public/img/info.jpg",
      cards: [
        {
          card_name: "Dragon of Pride and Soul",
          description: "Level 8 dark, dragon monster for the main deck",
          cardImage_Url: "../public/img/yugiCard.jpg",
        },
        {
          card_name: "Fiendsmith Engraver",
          description: "Level 6 light, fiend moster for the main deck",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Dominus Purge",
          description:
            "A normal trap card that can be layed from your hand if your oppoent controls a card.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Fiendsmith's Tract",
          description: "A normal spell card for the Fiendsmith archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Millenium Ankh",
          description: "A normal spell card for the Exodia archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Silhouhatte Rabbit",
          description:
            "Link two monster that sets a continuous trap that can be summoned as a monster.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Fiendsmith's Requiem",
          description:
            "Link one monster that require one light, fiend monster to make for the Fiendsmith archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Diabell, Queen of the White Forest",
          description:
            "Level 8, light-illusion synchro monster for the White Forest archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Mulcharmy Purulia",
          description:
            "Level 4 aqua monster that can discard itself when you control no cards to draw everytime your opponenet normal sumons or special summons from the hand.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Elzette of the White Forest.",
          description:
            "Level 2, light spellcaster for the mian deck and White Forest archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Astellar of the White Forest",
          description:
            "Level 2, light spellcaster for the main deck and White Forest archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Tenpai Dragon Genroku",
          description:
            "Level 4, fire dragon for the main deck and the Tenpai archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Mimighoul Master",
          description:
            "Level 4, earth zombie monster for the main deck and the Mimighoul archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Moon of the Closed Heaven",
          description:
            "Link two, light fiend monster that is primarily used in relation to the Fiendsmith archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Necroquip Princess",
          description:
            "Level 6, dark fiend fusion monster that is primari;y used in relation to the Fiendsmith archetype.",
          cardImage_Url: "TBD",
        },
      ],
    },
    {
      set_name: "Battles of Legend: Terminal's Revenge",
      num_of_cards: 118,
      description:
        "Get awesome foil upgrades as well as sought-after tournament cards in Battles of Legend: Terminal Revenge.",
      setImage_Url: "../public/img/bltr.jpg",
      cards: [
        {
          card_name: "Shining Star Dragon",
          description: "Level 4 light, dragon monster for the main deck.",
          cardImage_Url: "../public/img/yugiCard2.jpg",
        },
        {
          card_name: "Infernoid Flood",
          description: "Link 3 fire, fiend monster for the extra deck.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Blazing Cartesia, the Virtuous",
          description:
            "Level 4, light spellcaster tuner monster for the main deck and the Branded archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Blaze, Supreme Ruler of all Dragons",
          description:
            "Rank 7, fir dragon XYZ monster that is a tribute for the old Dragon Ruler cards.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Branded Fusion",
          description:
            "A normal spell card that sends monsters from the main deck to the graveyard to fusion summon.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Diviner of the Herald",
          description:
            "Level 2, light fairy tuner monster that can modulate its level by sending a fairy to the graveyard.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Genex Ally Birdman",
          description:
            "Level 3, dark machine monster for the main deck and the Genex archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Gigantic Spright",
          description:
            "Rank 2, dark thunder XYM monster that summons a level 2 from the main deck and is part of the Spright archetype.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Ib the World Chalice Justiciar",
          description:
            "Level 5, water spellcaster synchro mosnter that searches a World Legacy card from the deck.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Kurikara Divincarnate",
          description:
            "Level 1, fire fairy monster that tributes all monsters your opponenet controls if they activated an effect that turn.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Oil",
          description:
            "A normal spell card that adds two pyro monsters form the graveyard back to the hand.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Phantom of Yubel",
          description:
            "Level 9, dark fiend fusion that can tribute itself to be a psuedo-omninegate.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Snatch Steal",
          description:
            "An equip spell card that takes one face-up monster your opponent controls.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Toy Box",
          description:
            "A continuous spell card that has two effects when an opponent's monster declares an attack.",
          cardImage_Url: "TBD",
        },
        {
          card_name: "Wonky Quartet",
          description: "Rank 4, earth beast XYZ monster.",
          cardImage_Url: "TBD",
        },
      ],
    },
  ],
};

module.exports = yugiohData;
