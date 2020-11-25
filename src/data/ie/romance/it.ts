import { JAvidan } from "../../authors";
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

  147: {
    input: "0.7.0",
    book: book("I-2", 91),
    author: JAvidan,
    content: `Tres anellos per los Elfos-res sotto le cielo,
Sette per los Signores-Nanos in loros salones di pietra,
Noves per los Uomos-Mortales condannatos a morire,
Uno per le Scuro-Signore su suo scuro-trono
In la terra de Mordor dove las ombras coricanne.
Uno anello a gubernare li tutti, uno anello a riscontrare li,
Uno anello a recare li tutti e in la tenebra rilegare li
In la terra de Mordor dove las ombras coricanne.`
  },
});

export const list = [
  it,
];
