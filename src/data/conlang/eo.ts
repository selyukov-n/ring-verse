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

  106: {
    input: "0.3.0",
    author: "da Hiasl",
    comments: [{ type: "warning", text: "смесь нескольких языков ?" }],
    content: `Ringoj tri havas la reĝo de la Alboj sub la nubo
Kaj la reĝoj de la malgranduloj havas sep en ejoj ŝtonaj iliaj,
Naŭ havas la mortuloj kiu decidita morti
Kaj la sinjoro de la malhelo havas unu en sia trono malgranda
En Mordorujo kie la ombroj kuŝas.
Ringo estas por reoi ilin kaj por retrovi ilin,
Ringo estas por konduki ilin en la malhelon
En la Mordoron, kiu estas lando kie la ombroj kuŝas.`
  },

  144: {
    input: "0.7.0",
    author: "Dotan Brom",
    book: book("E-3", 200),
    content: `Tri Ringoj por la regoj de Elfoj sub la ĉielo,
Sep por la lordoj de Nanoj en haloj de ŝtono,
Naŭ por Mortema Homoj, ke kondamnita morti,
Unu por la Malluma Lordo en lia malluma trono
En la Lando de Mordor, kie la Ombroj kuŝas.
Un Ringo regi ĉiujn, Un Ringo trovi ilin,
Un Ringo alporti ĉiujn kaj en la mallomo bindi ilin
En la Lando de Mordor, kie la Ombroj kuŝas.`
  },
});
