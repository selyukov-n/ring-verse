import { book, make } from "../../utils";
import { sources } from "../../sources";

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

  141: {
    input: "0.7.0",
    name: "дословный перевод ?",
    author: "Thomas Hahn",
    book: book("G-3", 56),
    content: `Drei Ringe den Elbenkönigen unter dem Himmel,
Sieben den Zwergenherrschern in ihren Hallen aus Stein,
Neun den Sterblichen, denen der Tod bestimmt ist,
Ein Ring dem Dunklen Herrscher auf seinem dunklen Thron
Im Lande Mordor, wo die Schatten sind.
Ein Ring um über sie zu Herrschen, Ein Ring um sie zu finden,
Ein Ring um sie zu holen und in der Dunkelheit zu binden
Im Lande Mordor, wo die Schatten sind.`
  },
  165: {
    input: "0.7.0",
    source: sources.hfilippo,
    author: "H.Flippo",
    book: book("G-2", 56),
    content: `Drei Ringe den Elbenkönigen unter dem Himmel,
Sieben den Zwergenherren in ihren Hallen aus Stein,
Neun den Sterblichen, ewig dem Tode verfallen,
Einer dem Dunkeln Herrn auf seinem dunkl'n Thron
Im Lande Mordor, wo die Schatten liegen.
Ein Ring, sie alle zu beherrschen, Ein Ring, sie zu finden,
Ein Ring, sie zu bringen und im Dunkeln zu binden
Im Lande Mordor, wo die Schatten liegen.`
  },
});

export const list = [
  de,
];
