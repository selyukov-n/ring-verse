import { sources } from "../sources";
import { fromLotR, make } from "../utils";

export const hun = make({ language: "hun" }, {
  51: {
    author: "Dezső Tandori",
    input: "0.2.0",
    name: fromLotR(),
    book: ["H", 162],
    content: `Három Gyűrű ragyogjon a tünde-királyok kezén,
Hét a nemes törpök jussa, kiknek háza cifra kő,
Kilencet halandó ember ujján csillantson a fény,
Egyet hordjon a Sötét Úr, szolganyáját terelő,
Mordor éjfekete földjén, sűrű árnyak mezején.
Egy Gyűrű mind fölött, Egy Gyűrű kegyetlen,
Egy a sötétbe zár, bilincs az Egyetlen,
Mordor éjfekete földjén, sűrű árnyak mezején.`
  },
  408: {
    input: "0.16.0",
    source: sources.wmigurok,
    author: [],
    name: "дословный перевод",
    content: `Három Gyűrű a Tünde-királyoknak az ég alatt,
Hét a Törp-uraknak a kőcsarnokaikban,
Kilenc a Halandó Embereknek, halálra ítéltetetteknek,
Egy a Sötét Úrnak a sötét trónján
Mordor földjén ahol az Árnyékok fekszenek.
Egy Gyűrű uralkodjon mindegyiken, Egy Gyűrű találja meg őket,
Egy Gyűrű hozza őket el és a sötétségben kösse meg őket
Mordor földjén ahol az Árnyékok fekszenek.`
  },
});
