import { book, make } from "./utils";

const sind1 = make({ language: "sindarin", author: "Ryszard Derdziński" }, {
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

const sind = make({ language: "sindarin" }, {
  55: {
    input: "0.2.0",
    author: "Bjørn Arnfred Bojesen",
    book: book("S-4", 27),
    content: `Neledh Cŷr 'nin Edhelaranath nui venel,
Odog a Ngonhirrim ned gonthamath în,
Neder an Firiath, beraid gwanno,
Min a Chirdhur or dhurvachalf în,
Ned Mordor nedhi gaenar i ngwaith.
Min Côr a thorthad hain phain, Min Côr a chiriad hain,
Min Côr a theged hain a nedhi vorn gweded hain
Ned Mordor nedhi gaenar i ngwaith.`
  },

  99: {
    input: "0.3.0",
    author: "H.Reiter",
    book: book("S-9", 31),
    content: `Neledh cŷr an erain Edhellen nuin giliath,
Neder cŷr an Edain amarthen an gûr,
Odog cŷr an Nogothrim ned rondiath,
Min côr an Hîr Vorn ned Barad-dûr
Ned Mordor ias dúath cuinai.
Min côr bauglo hain phain, ned côr hiro hain,
Min côr togo hain phain, ned duir gwedho hain
Ned Mordor ias dúath cuinai.`
  },
});

export default [
  sind1,
  sind,
];
