import { groups as g } from "./names";
import { group } from "./utils";

export const arda = group(g.arda,
  "black-speech", "quenya", "sindarin", "westron", "khuzdul");
export type ArdaLang = (typeof arda)["id"];
