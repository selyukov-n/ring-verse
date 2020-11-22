import { groups as g } from "./names";
import { group, lang } from "./utils";

const langs = <T extends string>(name: string, author: string, ...ids: T[]) => group(name, ...ids.map(id => lang(id, author)));

export const conlangs = group(g.conlangs,
  group(g.arda_related, "c.bugn", "c.kk"),
  group(g.international,
    lang("c.esp", "Ludvig Lazar Zamenhof"),
    lang("c.nes", "robocap"),
    lang("c.ido", "Louis de Beaufront"),
    "c.int",
    lang("c.atl", "Richard A.Antonius"),
    lang("c.ben", "Charles Kay Ogden"),
    lang("c.top", "Sonja Elen Kisa, ca. 2001"),
  ),
  group(g.fictional,
    lang("c.eld", "Russian fans of 'Wiedzmin' by Andrzej Sapkowski; based on several phrases in Wiedzmin"),
    lang("c.thl", "Marc Okrand"),
    lang("c.dro")
  ),
  group(g.conlangs_other,
    langs(g.conlangs_anguric, "Jonathan Avidan", "c.ari", "c.ang", "c.ara"),
    lang("c.aul", "Andre Steffens"),
    lang("c.des", "Justin Rotramel"),
    lang("c.lei", "Exu Yangi"),
    lang("c.kel", "Sylvia Sotomayor"),
    langs(g.conlangs_zbihniew, "zbihniew", "c.var", "c.she", "c.dem", "c.bli", "c.bzd"),
    // TODO etc.
  )
);
export type Conlang = (typeof conlangs)["id"];
