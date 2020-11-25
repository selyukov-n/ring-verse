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
});

export default [
  q,
];
