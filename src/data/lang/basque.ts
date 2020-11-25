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
});

export const list = [
  basque,
];
