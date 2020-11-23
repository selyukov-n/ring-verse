import { make } from "./utils";
import { ME } from "./authors";

const q = make({ language: "quenya" }, {
  6: {
    source: "My translation",
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
});

export default [
  q,
];
