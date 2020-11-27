import { book, fromLotR, make } from "../utils";

export const lit = make({ language: "lit" }, {
  311: {
    input: "0.13.0",
    name: fromLotR(),
    author: ["Andrius Tapinas", "Jonas Strelkunas"],
    book: book("L-1", 147),
    content: [{
      title: "Taip Žiedai padalinti pasauly:",
      text: `Trys - Elfų Karaliams po saule,
Septyni - Nykštukams akmens salių erdvėse,
Devyni - Žmonėms, myriop pasmerktiesiems,
Vienas - Mordoro Lordui Juodajam,
Kuris soste tamsos viešpatauja.
Šitas Žiedas yra Visagalis,
Jis Žiedus išsisklaidžiusius gali
Surasti, sukviest ir juodąja valia
Sukaustęs, sujungti tamsiam Mordore.`
    }]
  },
});
