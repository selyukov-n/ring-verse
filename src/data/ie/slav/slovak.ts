import { book, fromLotR, make } from "../../utils";

export const slovak = make({ language: "slovak" }, {
  148: {
    input: "0.7.0",
    book: book("S-2", 111),
    author: "Milan Ondisko",
    content: `Tri prstene elfským kráľom pod nebom,
Sedem pánom trpaslíkov v sieňach z kameňa,
Deväť pre smrteľných ľudí, ktorých osudom je skon,
Jeden pre Pána Temnôt na jeho temnom tröne
V zemi Mordor, kde tieň vládne zlom.
Jeden Prsteň všetkým vládne, Jeden všetkých nájde,
Jeden všetkých privedie, do temnoty zviaže
V zemi Mordor, kde tieň vládne zlom.`
  },
  174: {
    input: "0.8.0",
    name: fromLotR(),
    book: book("S-1", 111),
    author: "Otakar Kořínek",
    content: `Tri prstene elfským kráľom vonku pod nebom,
Sedem pánom trpaslíkov v sieňach z kameňa,
Deväť mužom z ľudí, ktorých osudom je skon,
Veľprsteň pre Pána tmy na tróne z plameňa
V zemi Mordor, kde Tieň vládne zlom.
Veľprsteň im všetkým velí, jeho ruka krutá
Privolá ich do jedného a v čiernej tme spúta
V zemi Mordor, kde Tieň vládne zlom.`
  },
});
