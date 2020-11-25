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
});

export const list = [
  fre,
];
