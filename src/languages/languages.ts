import { ie } from "./ie";
import { groups as g } from "./names";
import { group } from "./utils";

const langs = [
  group(g.nostratic,
    ie,
    group(g.uralic,
      group(g.finno_ugric,
        group(g.finno_baltic, "fin", "est"),
        group(g.sami, "sma"),
        group(g.ugric, "hun"))),
    group(g.altaic,
      group(g.turkic, "tur", "kgz"),
      group(g.mongolic, "mon"),
    ),
    group(g.dravidian, "tam"),
    group(g.kartvelian, "geo"),
  ),
  group(g.afroasiatic,
    group(g.semitic,
      group(g.semitic_ne, "akk"),
      group(g.semitic_nw,
        group(g.semitic_nw_canaanite, "hbo", "heb"),
        group(g.semitic_nw_aramaic, "aramaic")),
      group(g.semitic_sc, "arabic")),
    group(g.egypt, "egy"),
  ),
  group(g.sino_tibetan, "zh"),
  group(g.niger_congo,
    group(g.bantu, "swa")),
  group(g.american,
    group(g.tupi, "tup"),
    group(g.quechua, "que"),
    group(g.algonquian, "oji"),
  ),
  group(g.austric,
    group(g.austroasian, "vie"),
    group(g.austronesian,
      group(g.austronesian_mp,
        group(g.austronesian_philippine, "tgl"),
        group(g.austronesian_malayic, "ind", "mal"),
        group(g.austronesian_oceanic, "mao"))),
    group(g.kadai, "tha"),
  ),
  group(g.isolated, "baq", "jap", "kor"),
  group(g.secret, "oph"),
];
export const languages = group(g.other, ...langs);
export type Lang = (typeof languages)["id"];
