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

export default [
  q,
  q2,
];
