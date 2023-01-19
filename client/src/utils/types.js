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
import esper from '../assets/colors/esper.png';
import grixis from '../assets/colors/grixis.png';
import jund from '../assets/colors/jund.png';
import naya from '../assets/colors/naya.png';
import bant from '../assets/colors/bant.png';
import abzan from '../assets/colors/abzan.png';
import sultai from '../assets/colors/sultai.png';
import jeskai from '../assets/colors/jeskai.png';
import mardu from '../assets/colors/mardu.png';
import temur from '../assets/colors/temur.png';
import wubr from '../assets/colors/wubr.png';
import wubg from '../assets/colors/wubg.png';
import wurg from '../assets/colors/wurg.png';
import wbrg from '../assets/colors/wbrg.png';
import ubrg from '../assets/colors/ubrg.png';
import wubrg from '../assets/colors/wubrg.png';

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
    ARTIFACT : "Artifact",
    ENCHANTMENT : "Enchantment",
    LEGENDARYARTIFACTCREATURE : "Legendary Artifact Creature",
    LEGENDARYENCHANTMENTCREATURE : "Legendary Enchantment Creature",
    SNOWCREATURE : "Snow Creature",
    LEGENDARYSNOWCREATURE : "Legendary Snow Creature",
    ARTIFACTCREATURE : "Artifact Creature",
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
      url: mardu,
      name: "Mardu",
    },
    TEMUR : {
      Colors: ["U", "R", "G"],
      url: temur,
      name: "Temur",
    },
    JUND : {
      Colors: ["B", "R", "G"],
      url: jund,
      name: "Jund",
    },
    NAYA : {
      Colors: ["R", "G", "W"],
      url: naya,
      name: "Naya",
    },
    BANT : {
      Colors: ["G", "W", "U"],
      url: bant,
      name: "Bant",
    },
    ABZAN : {
      Colors: ["W", "B", "G"],
      url: abzan,
      name: "Abzan",
    },
    SULTAI : {
      Colors: ["U", "B", "G"],
      url: sultai,
      name: "Sultai",
    },
    GRIXIS : {
      Colors: ["B", "R", "U"],
      url: grixis,
      name: "Grixis",
    },
    JESKAI : {
      Colors: ["R", "W", "U"],  
      url: jeskai,
      name: "Jeskai",
    },
    ESPER : {
      Colors: ["W", "U", "B"],
      url: esper,
      name: "Esper",
    },
    WUBR: {
      Colors: ["W", "U", "B", "R"],
      url: wubr,
      name: "WUBR",
    },
    WUBG: {
      Colors: ["W", "U", "B", "G"],
      url: wubg,
      name: "WUBG",
    },
    WURG: {
      Colors: ["W", "U", "R", "G"],
      url: wurg,
      name: "WURG",
    },
    WBRG: {
      Colors: ["W", "B", "R", "G"],
      url: wbrg,
      name: "WBRG",
    },
    UBRG: {
      Colors: ["U", "B", "R", "G"],
      url: ubrg,
      name: "UBRG",
    },
    WUBRG : {
      Colors: ["W", "U", "B", "R", "G"],
      url: wubrg,
      name: "FIVE COLORS",
    },
  }