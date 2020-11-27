import { book, make } from "../utils";

const basque = make({ language: "baq" }, {
  80: {
    input: "0.2.0",
    author: "Josu Gómez",
    book: book("B-2", 158),
    content: `Hiru Eraztun zerupeko Errege Elfoetzako,
Zazpi harrizko jauregietako Nano Jaunetzako,
Bederatzi hiltzera kondenatutako Gizaki Hilkorretzako,
Bat Jaun Ilunerako, trono ilunaren gainean
Itzalak zabaltzen diren Mordor-eko Lurrean.
Eraztun bat denak menperatzeko, Eraztun bat aurkitzeko,
Eraztun bat denak erakartzeko eta ilunpeetan lotzeko
Itzalak zabaltzen diren Mordor-eko Lurrean.`
  },

  170: {
    input: "0.7.0",
    author: "Luis Alberto Maneero López",
    book: book("B-4", 159),
    content: `Hiru eraztun zerupeko Errege Elfikoentzat,
Zazpi Ipotxen Printzeentzat beren harrizko aretoetan,
Bederatzi hilko diren hikorrentzat.
Bat Jaun Itzalarentzat bere aulki itzal gainean,
aizaroak dauden Mordor Erreinuan.
Eraztun bat guztiak menperatzeko, eraztun bat aurkitzeko,
eraztun bat ekartzeko eta ilunpetan lotzeko
aizaroak dauden Mordor Erreinuan.`
  },

  176: {
    input: "0.8.0",
    author: "Josu Gómez",
    book: book("B-3", 159),
    content: `Hiru eraztun zerupeko Elfoen erregeentzat
Zazpi, harrizko jauregietako Nano jaunentzat
Bederatzi hiltzera kondenatutako Gizaki hilkorrentzat
Bat Jaun Ilunarentzat bere trono ilunean,
itzalak zabaltzen diren Mordorreko lurrean.
Eraztun Bat denak menperatzeko, Eraztun Bat denak aurkitzekom
Eraztun Bat denak erakartzeko eta ilunpeetan lotzeko
itzalak zabaltzen diren Mordorreko lurrean.`
  },
  177: {
    input: "0.8.0",
    name: "офиц. перевод",
    book: book("B-1", 158),
    author: "Agostin Otsoa Eribeko",
    content: `Errege Elfoentzako hiru eraztun zeru azpian.
Zazpi Jaun Nanoentzat harrizko jauregietan.
Bederatzi hiltzera kondenaturiko Gizaki hilkorrentzat.
Bat Jaun ilunarentzat, tronu ilunaren gainean
Itzalak hedatzen diren Mordor Lurraldean.
Eraztun bat guztiak gobernatzeko, Eraztun bat guztiak aurkitzeko,
Eraztun bat guztiak erakarri eta ilunpetan estekatzeko
Itzalak hedatzen diren Mordor Lurraldean.`
  },

  258: {
    input: "0.10.10",
    author: "Chris Bates",
    content: `Hiru eraztun zeruaren azpiko iratxoen erregeentzat,
Zazpi harrizko gelen barruko epotxen jaunentzat,
Bederatzi hilgo diren gizonentzat,
Bat erregeaulki ilunean esertzen den jaun gaizkinarentzat,
itzalak dauden herri ilunean.
Eraztun bat guztiak jauntzeko,
Eraztun bat guztiak aurkitzeko.
Eraztun bat guztiak eramateko eta ilunean lotzeko.
Itzalak dauden herri ilunean.`
  },
});

export const list = [
  basque,
];
