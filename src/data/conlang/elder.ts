import { ME } from "../authors";
import { book, make } from "../utils";

export const elder = make({ language: "c.eld" }, {
  95: {
    input: "0.2.8",
    book: book("OS", 214),
    author: ME,
    content: `Teir beide'n aef Seidhe'n faoi uide,
Seah aef Zweerg'en inne iad lah'hann tean'ch'en,
Naoi aef Dhoine, aexi'hiasar aemor,
Henn aef Blaec Sacerd yn ei blaec ureen
Inne Mordor ear, duen aep blaec essean.
Henn Beide ahte a'siad, Henn Beide fandiss,
Henn Beide aemorc, inne en blaec aestoll a'siad
Inne Mordor ear, duen aep blaec essean.`
  },
});
