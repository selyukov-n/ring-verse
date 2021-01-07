import React from "react";
import { BAxen, JAvidan, JRRT, ME } from "./authors";
import { sources } from "./sources";
import { Item as I } from "./types";
import { book, make, makeName, map } from "./utils";

type Item =
  & Pick<I, "book" | "author" | "name" | "input">
  & { text: [string, string] };

const jrrt = `
Ash nazg durbatulûk, ash nazg gimbatul,
Ash nazg thrakatulûk agh burzum-ishi krimpatul
`;

const makeContent = (before: string, after: string) => [{
  text: <>
    {before}
    <b>{jrrt}</b>
    {after}
  </>
}];

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
  content: makeContent(it.text[0], it.text[1]),
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

const bs2base = { language: "black-speech" as const, input: "2.3.5" as const, source: sources.zhaaburi, author: [JRRT, BAxen] };
const bs2 = make(bs2base, {
  550: {
    variant: "Zhâburi A by " + BAxen,
    content: makeContent(
      `Nam Nazg push Kâlishi Gothûr Golugûb
Udu gûrhâdbulishi Gazatgothûr
Krith fundâkal mautasht Gothûr Tarkûb
Ash Burz Sûlbulishi Burz Gothûr
Ghid Hîthi lizhut Dûgishi Burzumûb`,
      "Ghid Hîthi lizhut Dûgishi Burzumûb"
    )
  },
  551: {
    variant: "Zhâburi B by " + BAxen,
    content: makeContent(
      `Gakh nazg ghal-shidizala golugut-za
Udu gazatshakh-za gûdrûd-bulshidiza
Krith bartadash-diza gûrum tarkgut-za
Ash shakhbûrz-za sûl-bulshidiza
Al burghi gâtugulûk Dûrbûrz-ishi`,
      "Al burghi gâtugulûk Dûrbûrz-ishi"
    )
  },
  554: {
    variant: "Shadowlandian aka Uzg Burgûlu-ob by Scatha",
    content: makeContent(
      `Gakh nazgu Golug-durub-ûr nut-lata
Udu Gazat-goth-ûr rûlub-ishiz gund-ob
Krith Tark-ûr matûrzu dûmpugaz matat
Ash Gothbûrz-ûr ulîmabûrz-tab-ir
Uzgbûrz-ishi amal burgûlu kâtut`,
      "Uzgbûrz-ishi amal burgûlu kâtut"
    )
  },
  555: {
    variant: "Rukh Nulûrz by Shapog’gûr",
    content: makeContent(
      `Gakh nazgu golugothu’ûr nut’lata
Udu gazatgothu’ûr ruz’ulbo’ishi gundum’ob
Krith tarku’ûr matûrz dûmpûrz matat 
Ash gothbûrz’ûr ulîma’tab’sûr
Uzgbûrz’ishi amal burgûlu kâtut`,
      "Uzgbûrz’ishi amal burgûlu kâtut"
    )
  },
});
const bs2a = make({ ...bs2base, author: BAxen }, {
  552: {
    variant: "Svartiska, analytical",
    content: `Nam nazgi ûr za golugdurubi lata za gah
Udu ûr za gazathgothi ishi takob hajati raz gund
Krith ûr maturz tak ugagîk at gamat
Ash ûr za burz shakh tala tab burz solî
Ishi za burzuzg al ti za burzi
Ash nazg durbat tak ûk, Ash nazg gimbat tak
Ash nazg thrakat tak ûk agh ishi za burzum krimptat tak
Ishi za burzuzg al ti za burzi`
  },
  553: {
    variant: "Svartiska, synthetic",
    content: `Nam nazgi zagolugdurubûri zagahûsh
Udu zagazathgothûri takob hajatishiz gundob
Krith maturz takûr ugagîk gamat
Ash burz zashakhûr burz solîshi tab
Zaburzuzgishi al ti zaburzi
Ash nazg durbat takûk, Ash nazg gimbat tak
Ash nazg thrakat takûk agh zaburzumishi krimpat tak
Zaburzuzgishi al ti zaburzi`
  },
})

export default [
  bs, bs2, bs2a,
  dbs,
];
