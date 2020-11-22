import { groups as g } from "./names";
import { group } from "./utils";

export const ie = group(g.ie,
  "en", "ru",
  group(g.germanic,
    group(g.germanic_west, "oe", "af", "nl", "fy", "ltz", "de", "yid"),
    group(g.germanic_nordic, "on", "dan", "swe", "nor", "fao", "ice"),
    group(g.germanic_east, "got"),
  ),
  group(g.greek, "gre", "el"),
  "alb",
  group(g.celtic, "gle", "cym"),
  group(g.italic,
    "lat",
    group(g.romance, "pt", "es", "cat", "glg", "fre", "srd", "it", "swi", "fru", "rum")),
  group(g.baltic,
    group(g.east, "lit", "ltv"),
    group(g.west, "prg")),
  group(g.slavic_1,
    group(g.slavic_west, "pol", "cze", "lso", "uso", "csb"),
    group(g.slavic_east, "ukr", "lem", "bel"),
    group(g.slavic_south, "ocs", "cro", "slovak", "slo", "bul", "mac"),
  ),
  group(g.indoiranian,
    group(g.indoaryan, "bng", "rom"),
    group(g.iranian, "per"),
  ),
  "arm",
);
//export type IELang = (typeof ie)["id"];
