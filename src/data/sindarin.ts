import { book, make } from "./utils";

const sind = make({ language: "sindarin", author: "Ryszard Derdziński" }, {
  31: {
    name: "диалект нолдор Имладриса и Эрегиона Второй эпохи",
    book: book("S-10", 31),
    input: "0.1.0",
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
    book: book("S-3", 26),
    input: "0.1.1",
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
