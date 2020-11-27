import { groups as g } from "./names";
import { group, lang } from "./utils";

const langs = <T extends string>(name: string, author: string, ...ids: T[]) => group(name, ...ids.map(id => lang(id, author)));

export const conlangs = group(g.conlangs,
  group(g.arda_related, "c.bugn", "c.karkhuzdul"),
  group(g.international,
    lang("c.eo", "Ludvig Lazar Zamenhof"),
    lang("c.n-eo", "robocap"),
    lang("c.ido", "Louis de Beaufront"),
    "c.int",
    lang("c.atl", "Richard A.Antonius"),
    lang("c.en-basic", "Charles Kay Ogden"),
    lang("c.toki", "Sonja Elen Kisa, ca. 2001"),
    lang("c.rom", "David Crandall"),
  ),
  group(g.fictional,
    lang("c.eld", "Russian fans of 'Wiedzmin' by Andrzej Sapkowski; based on several phrases in Wiedzmin"),
    lang("c.tlh", "Marc Okrand"),
    lang("c.dro")
  ),
  group(g.conlangs_other,
    langs(g.conlangs_anguric, "Jonathan Avidan", "c.ari", "c.ang", "c.ara"),
    lang("c.aul", "Andre Steffens"),
    lang("c.des", "Justin Rotramel"),
    lang("c.lei", "Exu Yangi"),
    lang("c.kel", "Sylvia Sotomayor"),
    langs(g.conlangs_zbihniew, "zbihniew", "c.var", "c.she", "c.dem", "c.bli", "c.bzd"),
    lang("c.fuc", "Piorokrat aka Uncle Davey"),
    lang("c.gac", "Theodore Kloba"),
    lang("c.alm", "Don Traxler"),
    lang("c.hal", "Paul V.S.Townsend"),
    lang("c.ena", "Gunnar Creutz"),
    lang("c.lis", "Ygor Coelho"),
    lang("c.gwa"),
    lang("c.deb"),
    lang("c.shem"),
    lang("c.vli", "Viktoro 9"),
    lang("c.wen", "Jan van Steenbergen"),
    lang("c.ser", "Logan Kearsley"),
    lang("c.hon", "Dotan Brom"),
    lang("c.tre", "Mogy aka Beorn - Tomer Bärmann"),
    lang("c.ave", "Harold Ensle"),
    lang("c.kash", "Roger Mills ?"),
    lang("c.vel", "Cian Ross ?"),
    lang("c.auleri", "Michael Poxon ?"),
    lang("c.sen", "Charlie Brickner"),
    lang("c.idr", "Trent Mitchell Pehrson"),
    lang("c.mej", "JC ?"),
  )
);
export type Conlang = (typeof conlangs)["id"];
