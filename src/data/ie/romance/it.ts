import { book, make } from "../../utils";

const it = make({ language: "it" }, {
  82: {
    input: "0.2.0",
    name: "офиц. перевод",
    book: book("I-1", 90),
    author: "Vicky Alliata di Villafranca",
    content: `Tre Anelli ai re degli Elfi sotto il cielo che risplende,
Sette ai Principi dei Nani nelle loro rocche di pietra
Nove agli Uomini Mortali che la triste morte attende,
Uno per l'Oscuro Sire chiuso nella reggia tetra
Nella Terra di Mordor, dove l'Ombra nera scende.
Un Anello per domarli, Un anello per trovarli,
Un Anello per ghermirli e nel buio incatenarli,
Nella Terra di Mordor, dove l'Ombra cupa scende.`
  },
});

export const list = [
  it,
];
