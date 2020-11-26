import { sources } from "../../sources";
import { book, make } from "../../utils";

export const rumanian = make({ language: "rum" }, {
  214: {
    input: "0.7.0",
    book: book("R-3", 106),
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
});
