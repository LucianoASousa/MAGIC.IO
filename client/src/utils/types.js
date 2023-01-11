import white from '../assets/colors/white.png';
import blue from '../assets/colors/blue.png';
import black from '../assets/colors/black.png';
import red from '../assets/colors/red.png';
import green from '../assets/colors/green.png';
import colorless from '../assets/colors/colorless.png';
import azorios from '../assets/colors/azorios.png';
import dimir from '../assets/colors/dimir.png';
import rakdos from '../assets/colors/rakdos.png';
import gruul from '../assets/colors/gruul.png';
import selesnya from '../assets/colors/selesnya.png';
import orzhov from '../assets/colors/orzhov.png';
import izzet from '../assets/colors/izzet.png';
import golgari from '../assets/colors/golgari.png';
import boros from '../assets/colors/boros.png';
import simic from '../assets/colors/simic.png';

export const LegalityTypes = {
    CREATURE : "Creature",
    SORCERY : "Sorcery",
    INSTANT : "Instant",
    LEGENDARYSORCERY : "Legendary Sorcery",
    SNOWSORCERY : "Snow Sorcery",
    LEGENDARYCREATURE : "Legendary Creature",
    LEGENDARYPLANESWALKER : "Legendary Planeswalker",
    LEGENDARYARTIFACT : "Legendary Artifact",
    LEGENDARYENCHANTMENT : "Legendary Enchantment",
  }

export const LandTypes = {
  LAND : "Land",
  SNOWLAND : "Snow Land",
  LEGENDARYLAND : "Legendary Land",
  BASICSNOWLAND : "Basic Snow Land",
  ARTIFACTLAND : "Artifact Land",
}


  export const ColorsAndGuilds = {
    WHITE : {
      Colors: ["W"],
      url: white,
      name: "White",
    },
    BLUE : {
      Colors: ["U"],
      url: blue,
      name: "Blue",
    },
    BLACK : {
      Colors: ["B"],
      url: black,
      name: "Black",
    },
    RED : {
      Colors: ["R"],
      url: red,
      name: "Red",
    },
    GREEN : {
      Colors: ["G"],
      url: green,
      name: "Green",
    },
    COLORLESS : {
      Colors: [],
      url: colorless,
      name: "Colorless",
    },
    AZORIUS : {
      Colors: ["W", "U"],
      url: azorios,
      name: "Azorius",
    },
    DIMIR : {
      Colors: ["U", "B"],
      url: dimir,
      name: "Dimir",
    },
    RAKDOS : {
      Colors: ["B", "R"],
      url: rakdos,
      name: "Rakdos",
    },
    GRUUL : {
      Colors: ["R", "G"],
      url: gruul,
      name: "Gruul",
    },
    SELESNYA : {
      Colors: ["G", "W"],
      url: selesnya,
      name: "Selesnya",
    },
    ORZHOV : {
      Colors: ["W", "B"],
      url: orzhov,
      name: "Orzhov",
    },
    IZZET : {
      Colors: ["U", "R"],
      url: izzet,
      name: "Izzet",
    },
    GOLGARI : {
      Colors: ["B", "G"],
      url: golgari,
      name: "Golgari",
    },
    BOROS : {
      Colors: ["R", "W"],
      url: boros,
      name: "Boros",
    },
    SIMIC : {
      Colors: ["G", "U"],
      url: simic,
      name: "Simic",
    },
    MARDU : {
      Colors: ["W", "R", "B"],
      url: "",
      name: "Mardu",
    },
    TEMUR : {
      Colors: ["U", "R", "G"],
      url: "",
      name: "Temur",
    },
    JUND : {
      Colors: ["B", "R", "G"],
      url: "",
      name: "Jund",
    },
    NAYA : {
      Colors: ["R", "G", "W"],
      url: "",
      name: "Naya",
    },
    BANT : {
      Colors: ["G", "W", "U"],
      url: "",
      name: "Bant",
    },
    ABZAN : {
      Colors: ["W", "B", "G"],
      url: "",
      name: "Abzan",
    },
    SULTAI : {
      Colors: ["U", "B", "G"],
      url: "",
      name: "Sultai",
    },
    GRIXIS : {
      Colors: ["B", "R", "U"],
      url: "",
      name: "Grixis",
    },
    JESKAI : {
      Colors: ["R", "W", "U"],  
      url: "",
      name: "Jeskai",
    },
    WUBR: {
      Colors: ["W", "U", "B", "R"],
      url: "",
      name: "WUBR",
    },
    WUBG: {
      Colors: ["W", "U", "B", "G"],
      url: "",
      name: "WUBG",
    },
    WURG: {
      Colors: ["W", "U", "R", "G"],
      url: "",
      name: "WURG",
    },
    WBRG: {
      Colors: ["W", "B", "R", "G"],
      url: "",
      name: "WBRG",
    },
    UBRG: {
      Colors: ["U", "B", "R", "G"],
      url: "",
      name: "UBRG",
    },
    WUBRG : {
      Colors: ["W", "U", "B", "R", "G"],
      url: "",
      name: "FIVE COLORS",
    },
  }