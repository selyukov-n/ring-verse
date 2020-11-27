import { book, make } from "./utils";
import { sources } from "./sources";

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

  172: {
    input: "0.7.0",
    author: "Taramiluiel",
    content: `Neled cyrf an Erain Edhellin nuin menel,
Odog a Chîr Nogothrim min thaim hernen huin,
Neder an Edain Firib beraid af fired,
Er enin Brannon-dûr bo archam vorn hún
Min Ardh Mordor ias i Núath caedar.
Min Corf a thorthad hain phain, Min Corf a chired hain,
Min Corf a thoged hain phain a ne môr an noded hain,
Min Ardh Mordor ias i Núath caedar.`
  },

  345: {
    input: "0.14.0",
    author: `Idhren [${sources.theonering}]`,
    content: `Cyrf nêl nan Erain-Edhellen nuin venel,
Odog nan Chîr-Nagoth vi thain huin sarn,
Neder nan Fireb barthar gwannor,
Min nan Chîr-Dhûr bo archam-dhûr hûn
Uin dôr Mordor ias i dhûath dorthar.
Corf Vin gwathror bân, Corf Vin hirir,
Corf Vin tolthor bân a vi i fuin remar.
Uin dôr Mordor ias i dhûath dorthar.`
  },
});

const sind2 = make({ language: "sindarin", input: "0.12.0" }, {
  276: {
    name: "перевод с немецкого #64",
    author: [],
    book: book("S-2", 25),
    content: `Neled Chýr in Edhelerain hall ned i Galad,
Odog in Nergetherain ne dain Themb ed Sern,
In Fîr, uireb i 'urth gorgor, neder,
Iancôr i hîr dûr or sad dûr,
Ned i Vor Mordor, i sad erin Avathar darthar.
Côr sain na bartha, sain pain na hira,
Ned i Dhuath na tegi a uireb na gwedha.
Ned i Vor Mordor, i sad erin Avathar darthar.`
  },
  277: {
    author: `Lothenon [${sources.elbenwald}]`,
    book: book("S-7", 29),
    content: `Neledh Cyrf an erain edhellin nui Menel
Odog an Nogoth-brennyn mi themais hernui ín
Neder an Edain firib, barad a ngwannad
Min am Mrannon-Dûr bo archamm vorn dín
Mi ndôr Mordor ias i Ndúath caedar.
Er-Chorf an orthored hain phain, er-Chorf a chired hain,
Er-Chorf a thoged hain phain a mi Fuin gwedhed hain
Mi ndôr Mordor ias i Ndúath caedar.`
  },
  278: {
    author: [],
    content: `neled cyr an in edhirain nui menel,
odog an heidhodrennyn no themb e-gond is,
neder an in fir barad firi,
ian an garon-dur ned barad-dur in
ne mordor manad darthar in gwaith,
ian cor bauglo hain, ian cor hiro hain,
ian cor tegi sain pain a ne mor gwedho,
ne mordor manad dorthar in gwaith.`
  },
  281: {
    author: `Eri Tajayanar [${sources.elbenwald}]`,
    book: book("S-8", 30),
    content: [{
      title: "Hîr i Chorvath",
      text: `Nêl Cyrf 'nin Eldherain nui menel
Odog 'nin hîr Nogothrim vi ethrynn dîn,
Neder 'nin Edain fírib beraid 'nan gûr,
Mîn 'nin Hîr Vorn bo Mahal Vorn
Vi Mordor innas i Nguruthos.
Mîn Corf an othored hain phain, Mîn Corf hain an nired,
Mîn Corf an nolthad hain phain ar vin môr hain an noded
Vi Mordor innas i Nguruthos.`
    }]
  },
});

export default [
  sind1,
  sind,
  sind2,
];
