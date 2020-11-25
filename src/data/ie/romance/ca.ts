import { book, make } from "../../utils";

export const cat = make({ language: "cat" }, {
  83: {
    input: "0.2.0",
    name: "офиц. перевод",
    author: "Francesc Parcerisas",
    book: book("C-1", 85),
    content: `Tres Anells per als Reis Elfs dessota el Cel,
Set per als Senyors dels Nans en llurs cavernes,
Nou per als Homes Mortals que perirán.
Un és per al Senyor Fosc en son fosc tron,
Allà a la Terra de Mórdor on s'estén l'Ombra.
Un Anell per manar a tots, un per trobar-los,
Un Anell per reunir-los, i en les Tenebres tenir-los
Tots lligats a Mórdor on s'estén l'Ombra.`
  },

  149: {
    input: "0.7.0",
    author: "Roger Rocamora",
    book: book("C-2", 86),
    content: `Tres anells pels reis dels elfs, sota el cel,
Set per els senyors dels nans, als seus salons de pedra,
Nou per als homes mortals, condemnats a morir,
Un per el Senyor Fosc, en son fosc tron
A la terra de Mórdor, on s'estenen les ombres.
un anell per manar-los a tots, un anell per trobar-los,
un anell per reunir-los a tots i a les tenebres lligar-los
a la terra de Mórdor, on s'estenen les ombres.`
  },
});
