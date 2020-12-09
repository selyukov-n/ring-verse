import { IDerzhansky } from "../authors";
import { make } from "../utils";

export const rom = make({ language: "rom" }, {
  93: {
    input: "0.2.5",
    book: ["R", 154],
    variant: "диалект Kalderash",
    author: IDerzhansky,
    content: `Trin angrustya ka le ray *ëlfanë tela 'l śon,
Yefta 'l *gnomanë thagarengë othe ando phay,
In'ya 'l manušëngë -- dikh mila, martyako-le von,
Ëkh angrusti zurali ka 'l tunyariko ray
Ando them Mordor, le vuśalina kay pašlyon.
Ëkh angrusti t' arakhël savorrë, ëkh t' inkërël len darate,
Ëkh angrusti te anel savorrë, len vi te phandel ratyate
Ando them Mordor, le vuśalina kay pašlyon.`
  },
});
