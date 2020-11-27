import { Input } from "./history";
import { sources } from "./sources";

const indexed = <T extends string>(input: Record<T, Input>) => input;

export const inputs = indexed({
  "0.0.1": { date: [2002, "spring"], mainSource: null },
  "0.0.2": { date: [2002, "spring"], mainSource: null },
  "0.0.5": { date: [2002, 5], mainSource: sources.ank },
  "0.0.7": { date: [2002, "summer"], mainSource: null },
  "0.1.0": { date: [2002, 12, 25], mainSource: sources.gwaith },
  "0.1.1": { mainSource: sources.gwaith },
  "0.1.2": { date: [2003, "winter"], mainSource: "переписано с книги в магазине" },
  "0.1.5": { date: [2003, 3, 3], mainSource: sources.drops },
  "0.2.0": { date: [2003, 3, 3], mainSource: sources.kniga2001 },
  "0.2.5": { date: [2003, 5, 19], mainSource: sources.iad },
  "0.2.8": { date: [2003, 5], mainSource: null },
  "0.2.9": { date: [2003, 5], mainSource: null },
  "0.2.10": { date: [2003, 5], mainSource: null },
  "0.3.0": { date: [2003, 6, 6], mainSource: "TolkLang, ElfLing" },
  "0.3.5": { date: [2003, 6, 6], mainSource: sources.c },
  "0.3.7": { date: [2003, 6, 7], mainSource: null },
  "0.3.8": { date: [2003, 7], mainSource: "ХА, вообще - какой-то (e- ?)shop" },
  "0.4.0": { date: [2003, 7], mainSource: "ХА, из печатного издания" },
  "0.4.1": { date: [2003, 7], mainSource: "ХА" },
  "0.4.2": { date: [2003, 7, 22], mainSource: "ХА" },
  "0.4.3": { date: [2003, 7, 22], mainSource: "AnK" },
  "0.4.4": { date: [2003, 8, 31], mainSource: "LotR OST" },
  "0.5.0": { date: [2003, 9, 8], mainSource: "Gutiska site" },
  "0.5.1": { date: [2003, 11, 8], mainSource: "ХА" },
  "0.5.5": { date: [2004, 1], mainSource: null },
  "0.5.9": { date: [2004, 11, 7], mainSource: sources.olmer },
  "0.6.0": { date: [2004, 12, 27], mainSource: sources.kniga2001 },
  "0.7.0": { date: [2004, 12, 30], mainSource: sources.rosetta },
  "0.8.0": { date: [2005, 1, 3], mainSource: sources.zbihniew },
  "0.8.3": { date: [2005, 1, 5], mainSource: "utenti forum" },
  "0.8.4": { date: [2005, 1, 14], mainSource: "Volchonok [icq user]" },
  "0.9.0": { date: [2005, 1, 27], mainSource: sources.planetTolkien },
  "0.9.1": { date: [2005, 3, 31], mainSource: sources.planetTolkien },
  "0.9.2": { date: [2005, 3, 31], mainSource: sources.lodz_tpsa },
  "0.9.4": { date: [2005, 6, 25], mainSource: sources.jrrvf },
  "0.10.0": { date: [2005, 7, 7], mainSource: null, description: `[original collection]
1. изменен внешний вид ("языки ... семьи" => "... языки");
2. добавлено деление по макросемьям
3. финно-угорские языки - в состав уральских, тюркские и японский - к алтайским, тупи - к америндским, австронезийские - к австрическим, баскский - к изолированным
4. искусственные языки разбиты на классы` },
  "0.10.1": { date: [2005, 8, 28], mainSource: "band Saurom lamderth - album Sombras del este (2002)" },
  "0.10.5": { date: [2005, 8, 29], mainSource: "Congregación de Magos" },
  "0.10.10": { date: [2005, 8, 29], mainSource: sources.listserv },
  "0.11.0": { date: [2005, 8, 29], mainSource: `Dirk Thierbach's collection on ${sources.elbenwald}` },
  "0.11.3": { date: [2005, 8, 29], mainSource: sources.elbenwald },
  "0.11.5": { date: [2005, 8, 29], mainSource: null },
  "0.11.8": { date: [2005, 8, 29], mainSource: null },
  "0.12.0": { date: [2005, 8, 30], mainSource: sources.elbenwald },
  "0.13.0": { date: [2005, 8, 31], mainSource: sources.eldalie },
  "0.13.1": { date: [2005, 8, 31], mainSource: null },
  "0.13.5": { date: [2005, 9, 20], mainSource: null },
  "0.13.6": { date: [2005, 9, 21], mainSource: sources.iceland },
});

export type InputKey = keyof typeof inputs;
