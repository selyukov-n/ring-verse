import { make } from "../../utils";

const luzh = make({ input: "1.0.1", author: "Rafał Leszczyński" }, {
  464: {
    language: "lso",
    book: ["LS", 108],
    content: `Tśi pjeršćenje za kralow Elfow bydlecych pod njebjom,
Sedym za kněžarjow krotušow w jich kamjeńtnych zalach,
Źewejś za smjertnych luźi, zasuźenych k smjerśi,
Jaden za Pana śamnosći na jogo śamnym tronje
W kraju Mordor, źož laže sni.
Jaden, aby nad wšymi se kněžyś, jaden aby je namakaś,
Jaden, aby wše pśinjasć a zwězaś w śmojtosći
W kraju Mordor, źož laže sni.`
  },
  465: {
    language: "uso",
    book: ["US", 108],
    content: `Tři pjeršćenje za kralow Elfow bydlecych pod njebjom,
Sydom za wjerchow krotušow w jich kamjentnych žurlach,
Dżewjeś za smjertnych ludźi, zasudźenych k smjerći,
Jedyn za Wjercha Ćemnosće na jeho ćmowym tronje
W kraju Mordor, hdźež leža sćiny.
Jedyn, zo by nad wšitkim knježić, jedyn zo by je namakać,
Jedyn, aby wšě přinjesć, a zwjazać we ćmicy
W kraju Mordor, hdźež leža sćiny.`
  },
});

const csh = make({ language: "csb" }, {
  466: {
    input: "1.0.1",
    book: ["K", 109],
    author: "Eugeniusz Gołąbk",
    content: `Trzë Piestrzenie dlô elfòwëch królów, pòd czëstim niebã,
Sétmë, dlô krôsniczëch panów, w jich kamiannëch dwòrach,
Dziewiãc dlô smiertelnëch lëdzy - smierc jim namienionô.
Jeden dlô Pana Cemnicë na jegò czôrnym tronie
W Krôjnie Mòrdor, co leżi w mrokù wiecznym.
Jeden Piestrzéń, bë wszëtczima rzãdzëc, Jeden, bë nalezc wszëtczé,
Jeden wszëtczé pòzebierze, ò cemnicą zrzeszi
W Krôjnie Mòrdor, co we wiecznym mrokù leżi.`
  },
});

export const list = [
  luzh,
  csh
];
