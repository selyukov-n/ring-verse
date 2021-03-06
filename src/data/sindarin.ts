import { make, makeName } from "./utils";
import { sources } from "./sources";

const sind1 = make({ language: "sindarin", author: "Ryszard Derdziński" }, {
  31: {
    variant: "диалект нолдор Имладриса и Эрегиона Второй эпохи",
    book: ["S-10", 31],
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
    book: ["S-3", 26],
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
  },
  548: {
    input: "2.3.1",
    variant: "диалект нолдор Имладриса и Эрегиона Второй эпохи",
    name: makeName("variant", 31),
    source: sources.simb8,
    content: [{
      title: "Tennath i Dúr-Gyrf",
      text: `Neledh Chorvath'nn Ellerain nu i menel,
Odo'ni Nauhírath bin rynd gonnui în,
Neder'ni Fîr Fírib beraid fírad,
Ere'm Morchír be morn-orchamm dín
Be nDor e-Mordor ias i-nDúweth caear.
Er-chorf hain torthad phain, Er-chorf hain hirad,
Er-chorf hain tegad phain a din fuin hai'nudad
Be nDor e-Mordor ias i-nDúweth caear.`
    }]
  },
});

const sind = make({ language: "sindarin" }, {
  55: {
    input: "0.2.0",
    author: "Bjørn Arnfred Bojesen",
    book: ["S-4", 27],
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
    book: ["S-9", 31],
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
  378: {
    input: "0.15.0",
    author: "Taur Edhel [forums.lotro.turbine.com]",
    source: sources.turbine,
    content: `Nêl cyrf a thoeredhellyn nuin menel
Odog a chîrnoegyl nedh themais gondren
Neder a firion barthannen gwanna
Min corf am morhîr bo morarcham tîn
Vin dhor o Mordor ias i ngwaith caedad
Min corf terthir pân, Min corf hirir
Min corf tegir pân, vin dhúath gwethir
Vin dhor o Mordor ias i ngwaith caedad`
  },
  437: {
    input: "1.0",
    author: "Taramiluiel",
    book: ["S-5", 28],
    content: `Cyrf Nêl 'nin Erain Edhellin din menel,
Odog 'ni Naug Brennin min thaim-es-sarn rîn,
Neder an Adanath Firibberaid gwannad,
Min 'ni Brannon Vorn bo archam dûr dîn
Min Ardh-en-Mordor ir i Núath gaedar.
Min Gorf a thorthad hain bain, Min Gorf as sain hired,
Min Gorf a thoged hain bain ar ar din môr hain noded,
Min Ardh-en-Mordor ir i Núath gaedar.`
  },
});

const sind2 = make({ language: "sindarin", input: "0.12.0" }, {
  276: {
    name: makeName("translation", 64),
    author: [],
    book: ["S-2", 25],
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
    book: ["S-7", 29],
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
    book: ["S-8", 30],
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

const sind3 = make({ language: "sindarin", input: "0.17.0", source: sources.vt13 }, {
  426: {
    name: "(1977)",
    author: ["Bill Welden", "Chris Gilson"],
    book: ["S-1", 25],
    content: `Nel cherin di menel nin Erain Edhellath
Os ben rynd sernin Nogothrim ni thûr
Gwent an in Edain, ion amarth na guruth
Min an in Dúhaur, na borod dîn dûr
Be-mBar Mordor, ias caedar Duath.
Min gor i-phain arad, min god tuwad hain
Min gor i-phain teithad a remmad hain ben Fuin
Be-mBar Mordor, ias caedar Duath.`
  },
  429: {
    name: "(1982)",
    author: "Richard Trubshaw",
    content: [{
      title: "E Chrolinnod: E Thaurcoriath",
      text: `Nel coriath n'in Edhilerain nu e menel,
Os n'i Nauhirrim thî hain rend gonion
Neldhel n'Edain fírin amarthen fîr,
Er n'e Thaurvor lim han talan mor
Thî e Mordhoriand îass i lumiath riga.
Er cor gon hain, er cor far hain,
Er cor îal a thî e fuin band hain
Thî e Mordhoriand îass i lumiath riga.`
    }]
  },
});

export default [
  sind1,
  sind,
  sind2,
  sind3,
];
