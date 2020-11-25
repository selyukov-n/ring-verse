import { sources } from "../../sources";
import { book, make } from "../../utils";

export const lux = make({ language: "ltz" }, {
  159: {
    input: "0.7.0",
    source: sources.kniga2001,
    author: "Henry Wickens",
    book: book("L-2", 66),
    content: `Dräi Réng fir d'Elwekinneken, déi éiweg liewen,
Siwwe fir d'Zwakenhären an hiren Hale vu Steen,
Néng fir Mënschen, d'Leit déi misse stierwen,
A fir den Här um däischtren Throun, just Een.
Am Land vu Mordor, do wou d' Schieder schwiewen.
Ee Rank regéiert se all, Ee Rank dee fënnt se,
Ee Rank dee bréngt se all an an der Däischtert bënnt se,
Am Land vu Mordor, do wou d' Schieder schwiewen.`
  },
});
