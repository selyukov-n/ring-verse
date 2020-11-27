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

  211: {
    input: "0.8.0",
    name: "диалект восточной Австрии, юж. Burgenland, окр. Oberwart",
    book: book("G-oa", 65),
    author: "Matthias List",
    content: `drai ringal fia di elfnn-kejni wos untan himmll saij
sijm fia di kejni fo di zweagal in ianare schtaananan halln,
nain fia di laijt wos schteam miassnn,
aan fia dejn finstaran heascha auf sain finstaran droon,
in launt moadoaa wo di schotdnn liang,
a ring dassas bindnn duat, a ring dassas findnn duat,
a ring dassa olle zaumbringt unt in da finstda bindnn duat,
in launt moadoaa wo di schotdn liang duan`
  },

  264: {
    input: "0.11.0",
    name: "нижнебаварский диалект",
    author: "Dirk Thierbach",
    book: book("G-lb", 60),
    content: `Drei Ring hab'n de Elbenköni ob'n im Liacht
Simi de Zwerg'nkini in eanerne stoanenen Haiser
De Menschenen, immer den Toad verfoin, neine
Oana fürn schwoarzen Herrscher auf seim düstern Tron
In mordor, wos finsta is
Oa Ringal se zu knechten, se alle zua find'n
Ins Dunk'l zua treib'n und für imma zua bind'n
In mordor, wos finsta is.`
  },
});

export const list = [
  de,
];
