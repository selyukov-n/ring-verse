import { JAvidan } from "../../authors";
import { sources } from "../../sources";
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

  192: {
    input: "0.8.0",
    name: "дословный перевод",
    author: "robocap",
    book: book("I-3", 91),
    content: `Tre Anelli per i Re degli Elfi sotto il cielo,
Sette per i Signori dei Nani nelle loro aule di pietra,
Nove per gli uomini mortali destinati a morire,
Uno per l'Oscuro Signore sul suo oscuro trono
Nella Terra di Mordor ove si stendono le Ombre.
Un Anello per dominarli tutti, Un Anello per trovarli,
Un Anello per ghermirli tutti e nel buio incatenarli
Nella Terra di Mordor ove si stendono le Ombre.`
  },
  194: {
    input: "0.8.0",
    name: "феррарский вариант эмильянского диалекта",
    author: "robocap",
    book: book("I-fe", 95),
    content: `Tri anèl par i re di Èlf sòt al zzèl,
Sèt par i Sgniòr di Nan in t'lór camra ad prèda,
Nóv par i òm mortàl destinà a murìr,
Ún par al Scùr Sgnòr sul ssò scùr tròn
In tla tèr ad Mòrdor dóv li Ómbar a'szténd.
Ún Anèl par cuntrullàral tòt, ún Anèl par truvàral,
Ún Anèl par ciapàral tòt e 'ntal scùr ligàral
In tla tèr ad Mòrdor dóv li Ómbar a'szténd.`
  },

  266: {
    input: "0.11.3",
    author: `Berúthiêl [${sources.elbenwald}]`,
    content: `Tre anelli per i Elven-re sotto il cielo,
sette per i Nano-signori nei loro corridoi della pietra,
nove per gli uomini mortali hanno condannato morire,
uno per il signore scuro sul suo throne scuro
nella terra di Mordor in cui le ombre si trovano.
Un anello per regolarlo tutti, un anello per trovarli,
un anello per portarli tutti e nella nerezza li legano
nella terra di Mordor in cui le ombre si trovano.`
  },
});

export const list = [
  it,
];
