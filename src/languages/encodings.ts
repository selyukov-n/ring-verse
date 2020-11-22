import { groups as g } from "./names";
import { group } from "./utils";

export const encodings = group(g.encoding,
  group(g._en, "e.c", "e.pig", "e.eli", "e.bra", "e.ges", "e.mor", "e.hex", "e.sou", "e.dmsnd", "e.nysiis"),
  group(g._fr, "e.ver"),
  group(g._he, "e.g", "e.nut"),
);
export type EncodingLang = (typeof encodings)["id"];
