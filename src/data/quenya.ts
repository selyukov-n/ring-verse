import { make, makeSource } from "./utils";
import { ME } from "./authors";
import { sources } from "./sources";

const q = make({ language: "quenya" }, {
  6: {
    author: ME,
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
    source: {
      ...makeSource("Q-7", 21, sources.md),
      other: ["Duplicated in the Book (Q-12, p.24)"]
    },
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
    source: makeSource("Q-10", 23),
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
    source: makeSource("Q-6", 20, sources.gwaith),
    content: `Nelde Cormar Eldaron Aranen nu i vilya,
Otso Heruin Naucoron ondeva mardentassen,
Nerte Firime Nérin yar i Nuron martyar,
Mine i More Herun mormahalmaryasse
Mornóreo Nóresse yasse i Fuini caitar.
Mine Corma turie te ilye, Mine Corma hirie te,
Mine Corma hostie te ilye ar mordosse nutie te
Mornóreo Nóresse yasse i Fuini caitar.`
  },
});

export default [
  q,
];
