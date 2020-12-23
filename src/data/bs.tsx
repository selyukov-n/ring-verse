import React from "react";
import { JAvidan, JRRT, ME } from "./authors";
import { Item as I } from "./types";
import { book, make, makeName, map } from "./utils";

type Item =
  & Pick<I, "book" | "author" | "name" | "input">
  & { text: [string, string] };

const jrrt = `
Ash nazg durbatulûk, ash nazg gimbatul,
Ash nazg thrakatulûk agh burzum-ishi krimpatul
`;

const items: Record<number, Item> = {
  7: {
    book: book("BS-1", 33, "and BS-5, p. 35"),
    author: "Julian Bradfield",
    input: "0.0.1",
    text: [
      `Gakh nazgi Golug/Alboi/Ilid - durub-ûri lata-nût,
Udu takob-ishiz gund-ob Gazat-shakh-ûri,
Krith Shara-ûri matûrz matat dûmpuga,
Ash tug Shakhbûrz-ûr Ulîma-tab-ishi za
Uzg-Mordor-ishi amal fauthut burgûli.`,
      'Uzg-Mordor-ishi amal fauthut burgûli.',
    ],
  },
  109: {
    name: makeName("revised", 7),
    book: ["BS-4", 34],
    input: "0.3.7",
    author: ME,
    text: [
      `Gakh Nazg Golug-durub-ûr nût-lata,
Udu Gazat-durub-ûr gundru-ulub-ishi,
Krith Shara matûrz-ûr dûmpuga matat,
Ash Bûrz-durub-ûr ulîma-tab-ishi
Uzbûrz-ishi amal burgûl fauthut.`,
      'Uzbûrz-ishi amal burgûl fauthut.',
    ]
  },
  118: {
    book: ["BS-3", 34],
    input: "0.4.4",
    author: "David Salo",
    text: [
      `Shre nazg golugranu kilmi-nudu
Ombi kuzddurbagu gundum-ishi
Nugu gurunkilu bard gurutu
Ash Burz-Durbagu burzum-ishi
Daghburz-ishi makha gulshu darulu.`,
      'Daghburz-ishi makha gulshu darulu.'
    ]
  },

  155: {
    input: "0.7.0",
    book: ["BS-2", 33],
    author: JAvidan,
    text: [
      `Psugh nazgê Purkuz-zâ-Khempê krait-ust,
Likh Khazd-zâ-Khôrê Kuska-ishi terpê rakh-în,
Uzd âtanê-zâ-Kukhuz primbatek khukhat,
Ash Turp-zâ-Búrzuz Rump-okh-Búrz,
Hukh-ishi Gurkhshu pu kagnedê drompa.`,
      'Hukh-ishi Gurkhshu pu kagnedê drompa.'
    ]
  },
};

const bs = map(items, it => ({
  ...it,
  author: [JRRT, ...Array.isArray(it.author) ? it.author : [it.author]],
  content: [{
    text: <>
      {it.text[0]}
      <b>{jrrt}</b>
      {it.text[1]}
    </>
  }],
  language: "black-speech",
  //comments: it.comments ? [it.comments] : undefined,
}));

const dbs = make({ language: "black-speech" }, {
  110: {
    input: "0.3.7",
    variant: 'испорченное ("debased") Черное наречие',
    comments: ["лексика - как в №7, №109"],
    book: ["BS-6", 35],
    author: ME,
    content: `Gakh Nazg ûr durob-golug lata nût,
Udu ûr durob-gazat ishi gundrûlub,
Krith ûr tark matûrz dûmpuga matat,
Ash ûr Durubûrz ishi ulîma-tab
Ishi Lugbûrz amal bergûl fauthut.
Ash Nazg durbat ulûk, Ash Nazg gimbat ul,
Ash Nazg thrakat ulûk agh ishi burzum krimpat ul
Ishi Lugbûrz amal bergûl fauthut.`
  }
});

export default [
  bs,
  dbs,
];
