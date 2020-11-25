import { book, make } from "../../utils";

const de = make({ language: "de" }, {
  64: {
    input: "0.2.0",
    book: book("G-1", 55),
    author: "Ebba Maria von Freymann",
    content: `Drei Ringe den Elbenkönigen hoch im Licht,
Sieben den Zwergenherrschern in ihren Hallen aus Stein,
Den Sterblichen, ewig dem Tode verfallen, neun,
Einer dem Dunklen Herrn auf dunklem Thron
Im Lande Mordor, wo die Schatten drohn.
Ein Ring, sie zu knechten, sie alle zu finden,
Ins Dunkel zu treiben und ewig zu binden
Im Lande Mordor, wo die Schatten drohn.`
  },
});

export const list = [
  de,
];
