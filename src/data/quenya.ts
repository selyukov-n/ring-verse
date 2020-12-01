import { book, make } from "./utils";
import { ME } from "./authors";
import { sources } from "./sources";

const q = make({ language: "quenya" }, {
  6: {
    author: ME,
    input: "0.0.1",
    content: `Nelde Cormar Eldaranin nu ilwenna,
Otso Nauco-herin sarne hrótantassen,
Nerte Firin ambartanen firienna,
Mine Herumoren mormahalmaryasse
Morinóresse yasse Huini caitar.
Mine Corma turien te ilya, Mine Corma tuvien te,
Mine Corma tultien te ilya ar huinesse nutien te
Morinóresse yasse Huini caitar.`
  },
  12: {
    author: "Björn Fromén aka Findegil",
    book: book("Q-7", 21, "Duplicated in the Book Q-12, p. 24"),
    input: "0.0.5",
    source: sources.md,
    content: `Nelde Cormar Eldatárin nu Tarmenel,
Otso Herunaicoin mardessen ondova,
Nerte Firye martain nurunen,
Er i More Herun mormahalmas hárala
Morinóreva mí arda, már i fuinion.
Er Corma ilyar turien ar tuvien te,
Er Corma tucien ar móresse nutien te
Morinóreva mí arda, már i fuinion`
  },
  30: {
    author: ME,
    book: book("Q-10", 23),
    input: "0.0.7",
    content: `Nelde Cormar i Eldaranin nu Menel,
Otso i Naucoheruin ondova hrótantassen,
Nerte Fírimain, ambartanen i firir,
Mine i Herumoren more mahalmaryasse
Morinóresse yasse Huini caitar.
Mine Corma turien te ilye, Mine Corma hirien te,
Mine Corma tultien te ilye ar huinesse nutien te
Morinóresse yasse Huini caitar.`
  },

  32: {
    author: "Maciej Garbowski",
    comments: ["old variant"],
    book: book("Q-6", 20, sources.gwaith),
    input: "0.1.1",
    content: `Nelde Cormar Eldaron Aranen nu i vilya,
Otso Heruin Naucoron ondeva mardentassen,
Nerte Firime Nérin yar i Nuron martyar,
Mine i More Herun mormahalmaryasse
Mornóreo Nóresse yasse i Fuini caitar.
Mine Corma turie te ilye, Mine Corma hirie te,
Mine Corma hostie te ilye ar mordosse nutie te
Mornóreo Nóresse yasse i Fuini caitar.`
  },

  54: {
    input: "0.2.0",
    author: ["Fredrik Ström", "David Salo"],
    book: book("Q-4", 18),
    content: `Cormar neld' Eldaranin undu telume,
Otso Casrceruin ondomardeltassen,
Nerte Firyain, firien martine,
Mine Lónaherun, lónamahalmaryasse,
Mordórev' ardasse yasse lumbor caitar.
Mine corma turien ilye te, mine corma tuvien te,
Mine corma tultien ilye te ar morniesse mandien te,
Mordórev' ardasse yasse lumbor caitar.`
  },

  129: {
    input: "0.5.9",
    author: "Илладан [tolkien.olmer.ru]",
    comments: [{ type: "warning", text: "похоже на смесь квенья с чем-то еще" }],
    content: `Nelde Corma an i Elene-arane mi nuelenya i taica,
Otso an i Nauco mi sarna sambe,
Nerte Firyar nauta or faire,
Mine an i Morna Heru or rya morna mahalma
Mi i Arda Mordor masse i Umbar caite.
Mine Corna tur ilquenea, Mine Corna entuve ilquen,
Mine Corna tulta ilquen ar mi i lume maca ilquen
Mi i Arda Mordor masse i Umbar caite.`
  },

  251: {
    input: "0.10.1",
    author: "Saurom lamderth - Sombras del este (2002)",
    content: [{
      title: "Cormalaire",
      text: `Nelde cormar eldaron nu menel aranin
Otso cormar casarin ondie rondossen
Nerte cormar fírinain cemesse aranin
Mine herumoren morne ostoryassen
Yasse lumnar i lumbor Morinóresse
Mine turien te, mine tuvien
Mine tultien te, huinesse nutien
Yasse lumnar i lumbor Morinóresse`
    }]
  },

  280: {
    input: "0.12.0",
    author: "Helmut W. Pesch",
    book: book("Q-8", 22),
    content: [{
      title: "Heru i Cormaron",
      text: `Nelde Cormar Eld'aranin nu i menel,
Otso Naucoheruin mí ondomardentar,
Nerte Firim'atanin fairenen marte,
Mine Herumoren mahalma mornasse,
Mi Mornanóre yasse caitar Huini.
Mine Corma turien te ilye, Mine Corma tuvien te,
Mine Corma tucien te ilye ar morniesse nutien te
Mi Mornanóre yasse caitar Huini.`
    }]
  },

  376: {
    input: "0.15.0",
    author: "Silmahtar [minastirith.com]",
    source: "minastirith.com",
    content: [{
      title: "Heru i Cormaron",
      text: `Nelde cormar Eldaranin nu i vilya,
Otso Naucoherin hrótarentassen sarna,
Nerte Firimarin namine firita,
Er i Mornaherun mahalmaryasse morna
I Morinorasse yassen caitar i Huini.

Er Corma heritatilye, Er Corma hiritat,
Er Corma hostatilye ar i móresse avaleryat
I Morinorasse yassen caitar i Huini.`
    }]
  },
  377: {
    input: "0.15.0",
    author: [],
    source: "wilwarinart",
    content: [{
      title: "cormon laire",
      text: `nelde cormar eldatárin nu i menel
otso naucoheruin ondova mardentassen
nerte fírime nerin martyaina fairenna
er moreheron or mormahalmarya
nóre mornóresse yasse i huini caitar
er corma ilquen turient
er corma hirient
er corma ilquen hostient
ar i morniesse avaleryat
nóre mornóresse yasse u huini caitar`
    }]
  },
});

const q2 = make({ language: "quenya", input: "0.3.0" }, {
  102: {
    book: book("Q-11", 24),
    author: "Fredrik Ström",
    content: `Milli nelde aranin Eldaron nu telume,
Otso heruin Casárion ondomardielta,
Nerte Firyain firien ambartina,
Mine Morituren, morimahalmaryasse
Mí Moranóre, Mordor, yasse lumbor caitar.
Mine mille turien ilye te, mine mille tuvien te,
Mine mille tultien ilye te ar morniesse nitien te
Mí Moranóre, Mordor, yasse lumbor caitar.`
  },
  105: {
    author: [],
    content: `Nelde cormar Eldaranin telume nu,
Otso Casarceruvin ondomardintassen,
Nerte Fírimain umbarte firien,
Mine Heruen Morna mormahalmaryassen
Mi arda Morinor yasse lumbor caitar.
Mine corma sen-turien ilye, mine corma sen-tuvien,
Mine corma sen-tultien ilye ar morniesse sen-mandien
Mi arda Morinor yasse lumbor caitar.`
  }
});

const q3 = make({ language: "quenya", input: "0.17.0", source: sources.vt13 }, {
  427: {
    author: ["Ronal Kyrmse", "Julian Bradfield"],
    name: "(1981)",
    book: ["Q-1", 16],
    content: `Nelde Cormar Eldaturin nu menel,
otso Naucaturin mi ondomardi,
nelnelde Atanin fírin umbarnen,
ere Morituren morimahalmasse
Morindoresse yass' i lumbuli caitar.
Ere Corma ilye canien, ere Corma túvien,
Ere Corma ilye yalien ar moresse mandien
Morindoresse yass' i lumbuli caitar.`
  },
  428: {
    name: "(1982)",
    author: "Michael Poxon",
    book: ["Q-2", 16],
    content: `Nelde cormar hereldarin
Otso cormar herenaukin
Enelde i firatanin
Er corma Herumori morimahalmásse
Noresse yar lumbuli, í morindoresse
Ere corma canatilye ere tuvatilye
Ere yanliatilye ar morinen mandátilye
Noresse yar lumbuli, í Morindoresse.`
  },
  430: {
    name: "(1982)",
    author: "Patrick Wynne",
    content: [{
      title: "Quettalinde i Cormaron",
      text: `Nelde Cormar i Eldaranin nu i menel,
Otso i Naukatárin ondorondontassen.
Vinde Fírimain yaron ambar ná fírie,
Ere i Herumornan i mornamahalmasse
Mí nórie Mornanórei, yasse caitar i lumbuli.
Ere Corma ilye te túrien, Ere Corma te tuvien,
Ere Corma ilye te yalien ar morniesse te mandien
Mí nórie Mornanórei, yasse caitar i lumbuli.`
    }]
  },
  431: {
    name: "(1988)",
    author: ["Chris Gilson", "Jorge Quiñónez"],
    content: [{
      title: "Corma Laire Quenyasse",
      text: `Nelde Cormar Elda-harnin nu elenarda,
Otso Nauco-héruin toia ondorondassen,
Nerte Atanin fairenen umbartar,
Mine Morna Héren morna mahalmasse
Mí Nóre Mornandor yasse Mordor caitar.
Mine Corma turie te ilye, Mine Corma hirie te,
Mine Corma tucie te ilye ar mí mornie nute te
Mí Nóre Mornandor yasse Mordor caitar.`
    }]
  },
  432: {
    author: "Nancy Martsch",
    book: ["Q-3", 17],
    content: `Nelde cormar i Eldaheri nu i menel
Otso cormar an i Naukantúru ondomardentassen
Nerte cormar an i Fírimar marte nurun
Er corma an i Mornaher mornamahalmasse
Mornoro maresse, yasse lómi caitar.
Er corma ilye te turu, er corma te túva,
Er corma ilye te hasta ar morniesse te nuta
Mornoro maresse, yasse lómi caitar.`
  },
});

export default [
  q,
  q2,
  q3,
];
