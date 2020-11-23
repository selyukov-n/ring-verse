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
});

export default [
  q,
];
