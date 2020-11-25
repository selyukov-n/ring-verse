import { book, make } from "../../utils";

const es = make({ language: "es", input: "0.2.0" }, {
  61: {
    name: "офиц. перевод",
    book: book("S-1", 82),
    author: ["Matilde Horne", "Luis Domènech"],
    content: `Tres anillos para los Reyes Elfos bajo el cielo.
Siete para los Señores Enanos en casas de piedra.
Nueve para los Hombres Mortales condenados a morir.
Uno para el Señor Oscuro, sobre el trono oscuro
en la Tierra de Mordor donde se extienden las Sombras.
Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos,
un Anillo para atraerlos a todos y atarlos en las tinieblas
en la Tierra de Mordor donde se extienden las Sombras.`
  },
  62: {
    name: "офиц. перевод ?",
    book: book("S-4", 83),
    author: ["Josê Tarragô", "Alejandro Murgia"],
    content: `Tres Anillos para los Reyes Elfos bajo la bôveda celeste.
Siete para los Señores Enanos en sus pêtreos recintos.
Nueve para los Hombres Mortales destinados a la muerte.
Uno para el Señor Oscuro sobre su trono sombrîo
en la Tierra de Mordor donde las Sombras se extienden.
Un Anillo para gobernarlos. Un Anillo para encontrarlos,
un Anillo para atraerlos y en las tinieblas atarlos
en la Tierra de Mordor donde las sombras se extienden.`
  }
});

export const list = [
  es,
];
