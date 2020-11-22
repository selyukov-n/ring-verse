import { groups as g } from "./names";
import { group } from "./utils";

export const encodings = group(g.encoding,
  group(g._en, "e.c", "e.pig", "e.eli", "e.braille", "e.gest", "e.morse", "e.hex", "e.sndex", "e.dmsnd", "e.nysiis"),
  group(g._fr, "e.ver"),
  group(g._he, "e.g", "e.nuts"),
);
export type EncodingLang = (typeof encodings)["id"];
