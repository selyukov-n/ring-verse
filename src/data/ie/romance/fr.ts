import { JAvidan } from "../../authors";
import { sources } from "../../sources";
import { book, make } from "../../utils";

const fre = make({ language: "fre" }, {
  66: {
    input: "0.2.0",
    name: "офиц. перевод",
    book: book("F-1", 80),
    author: "Francis Ledoux",
    content: `Trois Anneaux pour les Rois Elfes sous le ciel,
Sept pour les Seigneurs Nains dans leurs demeures de pierre,
Neuf pour les Hommes mortels destinés au trépas,
Un pour le Seigneur Ténèbreux sur son sombre Trône
Dans le Pays de Mordor où s'étendent les Ombres.
Un Anneau pour les gouverner tous. Un Anneau pour les trouver,
Un Anneau pour les amener tous et dans les ténèbres les lier
Dans le Pays de Mordor où s'étendent les Ombres.`
  },

  107: {
    input: "0.3.5",
    comments: [{ type: "warning", text: "почти не отличается от #66" }],
    author: [],
    source: "?",
    content: `Trois pour les Rois d'Elfes sous le ciel d'azure,
Sept pour les Seigneurs Nains dans leurs demeures de pierre,
Neuf pour les Hommes mortels destinés au trépas,
Un pour le Seigneur des Tenèbres sur son sombre trône
Dans le pays de Mordor où s'étendent les Ombres.
Un Anneau pour les gouverner tous. Un Anneau pour les trouver,
Un Anneau pour les amener tous et dans les ténèbres les lier
Au le pays de Mordor où s'étendent les Ombres.`
  },

  142: {
    input: "0.7.0",
    author: JAvidan,
    comments: [{ type: "warning", text: "сомнения по поводу некоторых слов" }],
    book: book("F-2", 80),
    content: `Trois anneaux pour les Elfiques-roix sous le ciel,
Sept pour les Nain-chefs en leur vestibules du pierre,
Neuf pour les Hommes-Mortal condamné à mourir,
Un pour le Dominateur-Sombre sur son sombre-trone
En le terre du Mordor où les ombres couchent.
Un anneau à gouverner leur tout, un anneau à percevoir leur,
Un anneau à produire leur tout et en la obscurité leir leur
En le terre du Mordor où les ombres couchent.`
  },

  242: {
    input: "0.9.0",
    author: `Ringfacwen [${sources.planetTolkien}]`,
    content: `Trois bagues pour les Elven-rois sous le ciel,
Sept pour les nain-seigneurs dans leurs halls de pierre,
Neuf pour les hommes mortels condamnés pour mourir,
Un pour le seigneur sombre sur son trône sombre
Dans la terre de Mordor où le mensonge d'ombres.
Un Anneau pour les gouverner tout, Un Anneau pour les trouver,
Un Anneau pour les amener tout et dans l'obscurité les lie
Dans la terre de Mordor où le mensonge d'ombres.`
  },
});

export const list = [
  fre,
];
