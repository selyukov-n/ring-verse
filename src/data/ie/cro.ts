import { book, make } from "../utils";

const cro = make({ language: "cro", input: "0.2.0" }, {
  67: {
    book: book("S", 114, "and C-1, p. 114"),
    author: "Berislav Lopac",
    content: `Prstena Tri za vilin-kralje za koje zvijezde siju,
I Sedam za patuljke-vladare kamenih dvora moċi;
I Devet za ljude, usuda kletog što zarana mriju,
Al Prsten Jedan za Cara Mraka na prijestolju noczi
U zemlji Mordor gdje sjene se kriju.
Prsten Jedan da zavlada svima, Prsten Jedan što trażi i seże
Prsten Jedan da spoji se s njima i u tami ih sveże
U zemlji Mordor gdje sjene se kriju.`
  },
  68: {
    name: 'from "Stilos" edition (офиц. перевод)',
    book: book("SC", 113),
    author: "Zlatko Crnković",
    content: `Tri Prstena za prste Kraljeva vilin-vrste pod nebesima što sjaju,
Sedam za vladare Patuljaka u dvoru njihovom kamnom,
Devet za Smrtne Ljude koje smrt čeka na kraju,
Jedan za Mračnog Gospodara na njegovom prestolu tamnom
U Zemlji Mordor gde Senke traju.
Jedan Prsten da svima gospodari, jedan za svima seže,
Jedan Prsten da sve okupi i u tami ih sveže
U Zemlji Mordor gde Senke traju.`
  },
});

export const list = [
  cro,
];
