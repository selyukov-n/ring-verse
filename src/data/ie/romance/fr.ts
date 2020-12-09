import { JAvidan } from "../../authors";
import { sources } from "../../sources";
import { book, fromLotR, make, map } from "../../utils";

const fre = make({ language: "fre" }, {
  66: {
    input: "0.2.0",
    name: fromLotR(),
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

  406: {
    input: "0.16.0",
    source: sources.wmigurok,
    author: [],
    content: `Trois Anneaux pour les Elfes Rois sous le ciel,
Sept pour les seigneurs Nains dans leurs Palais de Pierre,
Neuf pour les Hommes mortels condamnés à mourir,
Un pour le Seigneur Ténébreux sur son trône noir,
Au pays de Mordor où règnent les Ombres.
Un Anneau pour les diriger tous, un pour les trouver,
Un anneau pour les rassembler tous, et dans les ténèbres les lier,
Au pays de Mordor où règnent les Ombres.`
  },
});

const fre2 = map({
  248: {
    author: "Lumiere de soir",
    book: book("F-3", 81),
    content: `Trois, aux Rois Elfes, sous les cieux scintillant,
Sept, pour les Seigneurs Nains, sous les nerfs de pierres,
Neuf, aux Hommes Mortels, voués au couchant,
Un, au Seigneur Sombre, sous les flammes rougeoyant.
Au pays de Mordor, royaume des Ombres,
Un, pour les trouver,
Un, pour les amener,
Un, pour les lier,
Au pays de Mordor, royaume du Seigneur Sombre.`
  },
  249: {
    author: "Max DW",
    book: book("F-4", 81),
    content: `Trois Anneaux pour les Rois des Elfes sous les cieux,
Sept pour les Seigneurs Nains dans leurs salles de pierre,
Neuf pour les Hommes Mortels au destin mystérieux,
Un pour le Ténébreux sur son trône funèbre
Au pays de Mordor où s'étendent les ombres.
Un Anneau pour les régir tous, Un Anneau pour les trouver,
Un Anneau pour les mener tous dans les ténèbres et les lier
Au pays de Mordor où s'étendent les ombres.`
  },
  250: {
    author: "Moraldandil",
    content: `Trois anneaux pour les Rois des Elfes sous le ciel,
Sept pour les Seigneurs Nains dans leurs halles de pierre,
Neuf aux Hommes Mortels destinés au trépas,
Un au Seigneur Ténébreux sur son trône sombre
Au pays de Mordor où s'étendent les Ombres.
Un Anneau pour les gouverner tous, Un Anneau pour les trouver,
Un Anneau pour les prendre tous et dans les ténèbres les lier
Au Pays de Mordor où s'étendent les Ombres.`
  },
}, ({ author, ...t }) => ({ language: "fre", input: "0.9.4", ...t, author: `${author} [${sources.jrrvf}]` }));

export const list = [
  fre,
  fre2,
];
