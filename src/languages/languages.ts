import { ie } from "./ie";
import { groups as g } from "./names";
import { group } from "./utils";

const langs = [
  group(g.nostratic,
    ie,
    group(g.uralic,
      group(g.finno_ugric,
        group(g.finno_baltic, "fin", "est"),
        group(g.ugric, "hun"))),
    group(g.altaic,
      group(g.turkic, "tur"),
      "jap"),
    group(g.dravidian, "tam"),
    group(g.afroasiatic,
      group(g.semitic,
        group(g.semitic_ne, "akk"),
        group(g.semitic_nw,
          group(g.semitic_nw_canaanite, "hbo", "heb"),
          group(g.semitic_nw_aramaic, "aramaic")),
        group(g.semitic_sc, "arabic")),
      group(g.egypt, "egy"),
    ),
    group(g.kartvelian, "geo"),
  ),
  group(g.sino_caucasian,
    group(g.sino_tibetan, "zh")),
  group(g.american,
    group(g.tupi, "tup")),
  group(g.austric,
    group(g.austroasian, "vie"),
    group(g.austronesian,
      group(g.austronesian_philippine, "tgl"),
      group(g.austronesian_sulawesi, "ind", "mal")),
    group(g.kadai, "tha"),
  ),
  group(g.isolated, "baq", "kor"),
  group(g.secret, "oph"),
];
export const languages = group(g.other, ...langs);
export type Lang = (typeof languages)["id"];
