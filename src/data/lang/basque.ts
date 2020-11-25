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
});

export const list = [
  basque,
];
