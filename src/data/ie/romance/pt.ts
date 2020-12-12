import { JAvidan } from "../../authors";
import { sources } from "../../sources";
import { book, fromLotR, make } from "../../utils";

const br = make({ language: "pt", variant: "бразильский вариант" }, {
  63: {
    input: "0.2.0",
    name: fromLotR(),
    book: book("Pb-1", 89),
    author: ["Lenita Maria Rimoli Esteves", "Almiro Pisetta"],
    content: `Três anéis para os Reis-Elfos sob este céu
Sete para os Senhores-Anões em seus rochosos corredores,
Nove para os homens mortais fadados ao eterno sono,
Um para o senhor do Escuro em seu escuro trono
Na terra de Mordo onde as sombras se deitam.
Um Anel para todos governar, Um Anel para encontrá-los,
Um Anel para a todos trazer e na escuridão aprisioná-los
Na Terra de Mordor onde as sombras se deitam.`
  },

  171: {
    input: "0.7.0",
    author: JAvidan,
    book: book("Pb-2", 90),
    content: `Três aneles p'ra os Elfos-reies sob o céu,
Sete p'ra os Anões-Senhores na delas pedras de pedra,
Nove p'ra os Homens-Morteiros que morerrerem,
Um p'ra o Senhor-escuro sobre dele trono-escuro
Na a terra do Mordor onde estão as sombras.
Um anel p'ra regrar a eles tudos, um anel p'ra descubrir a eles,
Um anel p'ra traer a eles tudos e na a escuridão ligar a eles
Na a terra do Mordor onde estão as sombras.`
  },

  188: {
    input: "0.8.0",
    comments: ["дословный перевод?"],
    author: [],
    content: `Três anéis para os Reis-Elfos sob o céu,
Sete para os Senhores-Anões nos seus salões de pedra,
Nove para os Homens Mortais fadados a morrer,
Um para o Senhor do Escuro em seu trono escuro
Na Terra de Mordor, onde as sombas se deitam.
Um anel para governar a todos, um anel para achá-los,
um anel para trazê-los todos e aprisioná-los na escuridão
Na Terra de Mordor onde as sombas se deitam.`
  },
});

const br1 = make({ language: "pt", variant: "бразильский вариант ?" }, {
  497: {
    input: "1.1",
    source: sources.kontuwiki,
    author: [],
    content: `Para os Reis Elfos sob océu, três Anéis;
Sete para os Lordes Anões, abrigados em seus salões;
Nove para o Homem: a morrer condenado;
Um para o Lorde Negro, em seu trono sentado,
Na Terra de Mordor onde as sombras vão repousar.
Um Anel para achá-los, para todos governar,
Um Anel para reuni-los e para, na treva, os atar
Na Terra de Mordor onde as sombras vão repousar.`
  },
});

const pt = make({ language: "pt" }, {
  352: {
    input: "0.14.0",
    name: fromLotR(),
    author: "Fernanda Pinto Rodrigues",
    source: sources.torre,
    book: ["P-1", 88],
    content: `Três anéis para os Reis Elfos debaixo do céu,
Sete para os Senhores dos Anões nos seus palácios de pedra,
Nove para os Homens Mortais condenados a morrer,
Um para o Senhor das Trevas no seu negro trono
Na Terra de Mordor onde moram as Sombras.
Um anel para a todos dominar, um anel para os encontrar,
Um anel para a todos prender e nas trevas os reter
Na Terra de Mordor onde moram as Sombras`
  },
  361: {
    book: book("P-2", 89),
    input: "0.14.5",
    author: `blank_stare [${sources.artlangs}]`,
    content: `Três Anéis para os Reis Elfos debaixo do céu,
Sete para os Senhores Anões nos seus salões de pedra,
Nove para Homens mortais destinados a morrer.
Um para o Senhor Negro no Seu negro trono,
Na terra de Mordor onde as sombras se deitam.
Um Anel para todos governar, Um Anel para Os achar,
Um Anel para todos trazer e nas trevas Os aprisionar.
Na terra de Mordor onde as sombras se deitam.`
  },
  540: {
    input: "2.3.0",
    author: sources.lyricstranslate.makeAuthor("Gustavo666"),
    content: `Três Anéis para os Reis Elfos sob o céu,
Sete para os Senhores Anões em seus salões de pedra,
Nove para os Homens Mortais condenados a morrer,
Um para o Senhor Sombrio em seu trono sombrio,
Na Terra de Mordor, por onde se estendem as sombras.
Um Anel para todos governar, Um Anel para encontrá-los,
Um Anel para todos trazer e na escuridão aprisioná-los,
Na Terra de Mordor, por onde se estendem as sombras.`
  },
});

export const list = [
  br, br1,
  pt,
];
