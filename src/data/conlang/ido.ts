import { ME } from "../authors";
import { make } from "../utils";

export const ido = make({ language: "c.ido", input: "0.5.5", author: ME }, {
  121: {
    variant: '"архаичный" вариант',
    comments: ["на основе #72"],
    content: `Tri ringoy por lay Elfay Rejoy, sub la cielo,
Sep por lay Dvarvay Moxtoy, halenx de xtono,
Naw por homoy mortemay, kondamnitay de mortpelo,
Unu por la Nigra Moxto, sur sua nigra trono
Landenla Mordor, tenebra pro malhelo.
Unu Ringo reguri ciuyn, unu Ring' veniguri,
Unu Ring' sklaviguri kay mallumen enceniguri
Landenla Mordor, tenebra pro malhelo.`
  },
  122: {
    variant: '"современный" вариант',
    comments: ["на основе #72, #121"],
    content: `Tri ringox por la Elfa Rejox, sub la cielo,
Sep por la Dvarva Moxtox, en halox de xton',
Naw por homox mortemax, kondamnitax de mortpelo,
Unu por la Nigra Moxto, sur sua nigra tron'
En la lando Mordor, tenebra pro malhelo.
Unu Ringo reguri ciunx, unu Ring' veniguri,
Unu Ring' sklaviguri kay mallume enceniguri
En la lando Mordor, tenebra pro malhelo.`
  },
});
