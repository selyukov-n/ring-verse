import { book, make } from "../utils";

export const esperanto = make({ language: "c.eo" }, {
  72: {
    input: "0.2.0",
    book: book("E-2", 208),
    author: "Don Harlow",
    content: `Tri ringoj por la elfo-reĝoj, sub la ĉielo;
Sep por la dvarvo-moŝtoj, en haloj de ŝton'.
Naŭ por hom' mortema, kondamnita de mortpelo;
Unu por Malluma Moŝto, sur Malluma Tron',
En la lando Mordor, tenebra pro malhelo.
Unu Ring' por regi ĉiujn, unu por venigi,
Unu por sklavigi kaj mallume enĉenigi,
En la lando Mordor, tenebra pro malhelo.`
  },
  73: {
    input: "0.2.0",
    name: "из перевода ВК",
    book: book("E-1", 208),
    author: "Bertilo Wennergren",
    content: `Tri ringoj por la elfoj sub la hela ĉiel',
Sep por la gnomoj en salonoj el ŝton'.
Naŭ por la homoj sub la morto-sigel',
Unu por la Nigra Reĝo sur la nigra tron'
Kie kuŝas Ombroj en Mordora Land'.
Unu Ringo ilin regas, Unu ilin prenas,
Unu Ringo en mallumon ilin gvidas kaj katenas
Kie kuŝas Ombroj en Mordora Land'.`
  },
});
