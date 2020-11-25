import { JAvidan } from "../../authors";
import { book, make } from "../../utils";

const br = make({ language: "pt", name: "бразильский вариант" }, {
  63: {
    input: "0.2.0",
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

export const list = [
  br,
];
