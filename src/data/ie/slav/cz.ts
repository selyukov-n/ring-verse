import { book, fromLotR, make } from "../../utils";

export const cz = make({ language: "cze", input: "0.2.0" }, {
  69: {
    name: fromLotR(),
    book: book("C-1", 110),
    author: "Stanislava Pošustová",
    content: `Tři prsteny pro krále elfů pod nebem,
Sedm vládcům trpaslíků v síních z kamene,
Devět mužům: každý je k smrti odsouzen,
Jeden pro Temného pána, jenž dlí na trůně
v zemi Mordor, kde se snoubí šero se šerem.
Jeden prsten vládne všem, Jeden jim všem káže,
Jeden všechny přivede, do temnoty sváže
v zemi Mordor, kde se snoubí šero se šerem.`
  },
  70: {
    book: book("C-2", 110),
    author: "Bára Mančíková",
    content: `Tři prsteny elfím králům pod oblohou modrou,
Sedm vládcům trpaslíků v sálech v horském lůně,
Devět mužům smrtelným, podle sudby padnou,
Jeden pro Temného pána na svém temném trůně
V černé zemi Mordor, nad níž stíny vládnou.
Jeden prsten kážee všem, Jeden má je najít,
Jeden může přivést je, v temnotě je spojit
V černé zemi Mordor, nad níž stíny vládnou.`
  },
  71: {
    author: "Veronika Benková",
    content: `Trojice zlatých kroužků králům moudrých
jejichž sídlem příroda je od počátku
Sedm dávám trpaslíkům, kamenných měst
Devět mužům zmírajícím-vstříc posledním
Jediný šperk Pánu, jenž temnotou žije
v zemi Mordor s žezlem v ruce Stín ze stínu
Jeden Prsten velí, tentýž Prsten hledá,
přivede své poddané, ošálit se nedá.
Stíny jako lany bez milosti sváže
černou říši Mordor a vše, čemu káže.`
  }
});
