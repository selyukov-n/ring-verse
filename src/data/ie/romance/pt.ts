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
});

export const list = [
  br,
];
