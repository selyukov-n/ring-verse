import React from "react";
import { JRRT, ME } from "./authors";
import { Item as I } from "./types";
import { book, map } from "./utils";

type Item =
  & Pick<I, "book" | "source" | "author" | "name" | "input">
  & { text: [string, string]; comments?: string; };

const jrrt = `
Ash nazg durbatulûk, ash nazg gimbatul,
ash nazg thrakatulûk agh burzum-ishi krimpatul
`;

const items: Record<number, Item> = {
  7: {
    book: book("BS-1", 33, "Duplicated in the Book BS-5, p. 35"),
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
    name: "Модификация #7",
    book: book("BS-4", 34),
    input: "TODO",
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
  comments: it.comments ? [it.comments] : undefined,
}));
