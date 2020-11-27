import { book, make } from "../../utils";
import { sources } from "../../sources";

export const glg = make({ language: "glg" }, {
  84: {
    input: "0.2.0",
    book: book("G-2", 87),
    author: "Luis Tarrio & his brother",
    content: `Tres aneis para os Reis Elfos baixo o ceo,
sete para os señores Ananos nos seus pazos na pedra
nove para os Homes Mortais que han morrer,
un para o Señor Escuro, sobre o seu trono escuro
na terra de Mordor, onde se achan as tebras.
Un anel para mandar en todos, un para atopalos,
un para achegalos a todos e na escuridade atalos,
na terra de Mordor, onde se achan as tebras.`
  },
  353: {
    input: "0.14.0",
    source: sources.torre,
    author: [],
    book: ["G-3", 88],
    content: `Tres Anéis pra os reis trasnos embaixo o ceo,
Sete pros señores ananos en casas de pedra,
Nove pros homes mortais condeados a moriren,
Un pro señor da Escuridade, sobor do trono escuro,
Na terra de Mordor onde se espallan as sombras,
Un anel pra os gobernaren a todos. Un anel pra os atoparen,
Un anel pra os atraeren a todos e agulletalos ás tebras,
Na terra de Mordor onde se espallan as sombras.`
  },
});
