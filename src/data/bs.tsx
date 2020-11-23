import React from "react";
import { JRRT, ME } from "./authors";
import { makeSource, map } from "./utils";

type Item = {
  source: ReturnType<typeof makeSource>;
  author: string | string[];
  text: [string, string];
  comments?: string;
};

const jrrt = `
Ash nazg durbatulûk, ash nazg gimbatul,
ash nazg thrakatulûk agh burzum-ishi krimpatul
`;

const items: Record<number, Item> = {
  7: {
    source: makeSource("", "BS-1", 33), // TODO
    author: "Julian Bradfield",
    text: [
      `Gakh nazgi Golug/Alboi/Ilid - durub-ûri lata-nût,
Udu takob-ishiz gund-ob Gazat-shakh-ûri,
Krith Shara-ûri matûrz matat dûmpuga,
Ash tug Shakhbûrz-ûr Ulîma-tab-ishi za
Uzg-Mordor-ishi amal fauthut burgûli.`,
      'Uzg-Mordor-ishi amal fauthut burgûli.',
    ],
    comments: "Duplicated in the Book (BS-5, p.35)",
  },
  109: {
    source: makeSource("modification of #7", "BS-4", 34),
    author: ME,
    text: [
      `Gakh Nazg Golug-durub-ûr nût-lata,
Udu Gazat-durub-ûr gundru-ulub-ishi,
Krith Shara matûrz-ûr dûmpuga matat,
Ash Bûrz-durub-ûr ulîma-tab-ishi
Uzbûrz-ishi amal burgûl fauthut.`,
      'Uzbûrz-ishi amal burgûl fauthut.',
    ]
  }
};

export default map(items, it => ({
  author: [JRRT, ...Array.isArray(it.author) ? it.author : [it.author]],
  content: [{
    text: <>
      {it.text[0]}
      <b>{jrrt}</b>
      {it.text[1]}
    </>
  }],
  language: "black-speech",
  source: it.source,
  comments: it.comments ? [it.comments] : undefined,
}));
