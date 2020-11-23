import { make, makeSource } from "./utils";
import { sources } from "./sources";

const sind = make({ language: "sindarin", author: "Ryszard Derdziński" }, {
  31: {
    name: "диалект нолдор Имладриса и Эрегиона Второй эпохи",
    source: makeSource("S-10", 31, sources.gwaith),
    content: [{
      title: "Tennath i Dúr-Gyrf",
      text: `Neledh Gorvath 'nin Ellerain no i menel,
Odo 'ni Naurhírath ne rynd gonui în,
Neder 'ni Fîr Fírib beraid fíred,
Êr am Morchír ned morn-orchamm dín
Ne Dor e-Mordor ias i-Ndúath caedar.
Er-chorf hain torthad bain, Er-chorf hain hired,
Er-chorf hain toged bain a din fuin hain nuded
Ne Dor e-Mordor ias i-Ndúath caedar.`
    }]
  },
  33: {
    source: makeSource("S-3", 26, sources.gwaith),
    content: [{
      title: "Glîr i Chyrf e-Ndur",
      text: `Corf neledh 'nin Ellerain nui venel,
Odo 'ni Naurhîrath vi rynd gonui în,
Neder 'ni Fîr Fírib beraid fíred,
Êr am Morchír bo morn-orchamm dîn
Vi Dor e-Mordor ias i-Ndúath caedar.
Er-chorf a thorthad hain bain, Er-chorf a chired hain,
Er-chorf a thoged hain bain a din fuin an nuded hain
Vi Dor e-Mordor ias i-Ndúath caedar.`
    }]
  }
});

export default [
  sind,
];
