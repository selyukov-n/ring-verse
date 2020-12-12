import { sources } from "../../sources";
import { fromLotR, make } from "../../utils";

export const rumanian = make({ language: "rum" }, {
  214: {
    input: "0.7.0",
    book: ["R-3", 106],
    author: "Mirette Brandes-Weintraub",
    content: `Trei inele pentru regii-spiriduşi sub cupola cerului.
Şapte, pentru piticii-domini, în cămările de piatră.
Nouă pentru muritorii, sortiţi pieirii.
Unul pentru prinţul negurii, pe tronul său întunecat.
Pe tărîmul Mordor, unde umbrele sălăşuiesc.
Un inel pe toţi să-i stăpînească, un inel să-i găsească.
Un inel pe toţi să-i adune şi în negură să-i ferece.
Pe tărîmul Mordor, unde umbrele sălăşuiesc.`
  },
  235: {
    input: "0.9.0",
    name: "сильное сходство с #463",
    author: `Bugyfeanor [${sources.planetTolkien}] ?`,
    content: `Trei inele pentru Regii Elfilor cei de sub soare,
Şapte pentru ei, stăpânii Gnomilor din săli de stâncă
Nouă, Oamenilor care ştiu că-n lumea lor se moare,
Unul pentru Seniorul Întunecimii-n noaptea lui adâncă
Unde-s Umbrele în Ţara Mordor, ca să le găsească
Şi pe toate să le-adune un Inel, şi altul nime,
Să le ferece pe toate, astfel să le stăpânească,
Unde-s Umbrele, în Ţinutul Mordor, în întunecime.`
  },
  370: {
    input: "0.14.5",
    name: "вариант #463",
    author: [],
    book: ["R-2", 106],
    source: sources.jrrt_memorial,
    content: `Trei inele pentru stapânii Elfi cei de sub soare,
Sapte pentru ei, Piticii de vita din sali de stânca,
Noua, Oamenilor care stiu ca-n lumea lor se moare,
Unul pentru el, Seniorul Intunecimii, in noaptea lui adânca,
Unde-s umbrele in Tinutul Mordor, ca sa le gaseasca,
Si pe toate sa le adune un inel si altul nime,
Sa le ferece pe toate, astfel sa le stapâneasca,
Unde-s umbrele, in Tinutul Mordor, in intunecime.`
  },
  463: {
    input: "1.0",
    name: fromLotR(),
    author: "Gabriele Nedelea",
    book: ["R-1", 105],
    content: `Trei inele pentru Regii Elfilor cei de sub soare,
Şapte pentru ei, stăpînii Gnomilor din săli de stîncă
Nouă, Oamenilor care ştiu că-n lumea lor se moare,
Unul pentru Senioru-Ntunecimii fie încă
Unde-s Umbrele-n Ţinutul Mordor, ca să le găsească
Şi pe toate să le-adune un inel, şi altul nime,
Să le ferece pe toate, astfel să le stăpînească,
Unde-s Umbrele-n Ţinutul Mordor, în întunecime.`
  },
  541: {
    input: "2.3.0",
    author: "Florile Dalbe",
    content: `Trei Inele pentru Regii Elfilor de sub cer,
Șapte pentru Domni Piticilor în sălile lor de piatră,
Nouă pentru Oameni Mortali destinați să piară,
Unul pentru Lordul Întunecat de pe tronul său obscur,
În meleagul lui Mordor unde Stafiile zac.
Un Inel să-i stăpânească, Un inel ca să-i găsească,
Un Inel ca să-i adune și în întuneric să-i arunce
În meleagul lui Mordor unde Stafiile zac.`
  },
});
