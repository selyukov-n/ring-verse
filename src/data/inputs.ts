import { DateParts } from "../intl";
import { Source, sources } from "./sources";

export type Input = {
  date?: DateParts;
  mainSource: Source | null;
  description?: string;
};

const indexed = <T extends string>(input: Record<T, Input>) => input;

export const inputs = indexed({
  "0.0.1": { date: [2002, "spring"], mainSource: null },
  "0.0.2": { date: [2002, "spring"], mainSource: null },
  "0.0.5": { date: [2002, 5], mainSource: sources.ank1 },
  "0.0.7": { date: [2002, "summer"], mainSource: null },
  "0.1.0": { date: [2002, 12, 25], mainSource: sources.gwaith },
  "0.1.1": { mainSource: sources.gwaith },
  "0.1.2": { date: [2003, "winter"], mainSource: sources.translations },
  "0.1.5": { date: [2003, 3, 3], mainSource: sources.drops },
  "0.2.0": { date: [2003, 3, 3], mainSource: sources.kniga2001 },
  "0.2.5": { date: [2003, 5, 19], mainSource: sources.iad },
  "0.2.8": { date: [2003, 5], mainSource: null },
  "0.2.9": { date: [2003, 5], mainSource: null },
  "0.2.10": { date: [2003, 5], mainSource: null },
  "0.3.0": { date: [2003, 6, 6], mainSource: sources.tolklang },
  "0.3.5": { date: [2003, 6, 6], mainSource: sources.c },
  "0.3.7": { date: [2003, 6, 7], mainSource: null },
  "0.3.8": { date: [2003, 7], mainSource: sources.ha },
  "0.4.0": { date: [2003, 7], mainSource: sources.ha },
  "0.4.1": { date: [2003, 7], mainSource: sources.ha },
  "0.4.2": { date: [2003, 7, 22], mainSource: sources.ha },
  "0.4.3": { date: [2003, 7, 22], mainSource: sources.ank },
  "0.4.4": { date: [2003, 8, 31], mainSource: sources.ost },
  "0.5.0": { date: [2003, 9, 8], mainSource: sources.gutiska },
  "0.5.1": { date: [2003, 11, 8], mainSource: sources.ha },
  "0.5.5": { date: [2004, 1], mainSource: null },
  "0.5.9": { date: [2004, 11, 7], mainSource: sources.olmer },
  "0.6.0": { date: [2004, 12, 27], mainSource: sources.kniga2001 },
  "0.7.0": { date: [2004, 12, 30], mainSource: sources.rosetta },
  "0.8.0": { date: [2005, 1, 3], mainSource: sources.zbihniew },
  "0.8.3": { date: [2005, 1, 5], mainSource: sources.utenti },
  "0.8.4": { date: [2005, 1, 14], mainSource: sources.icq },
  "0.9.0": { date: [2005, 1, 27], mainSource: sources.planetTolkien },
  "0.9.1": { date: [2005, 3, 31], mainSource: sources.planetTolkien },
  "0.9.2": { date: [2005, 3, 31], mainSource: sources.lodz_tpsa },
  "0.9.4": { date: [2005, 6, 25], mainSource: sources.jrrvf },
  "0.10.0": { date: [2005, 7, 7], mainSource: null, description: `[original collection]
1. изменен внешний вид ("языки ... семьи" => "... языки");
2. добавлено деление по макросемьям
3. финно-угорские языки - в состав уральских, тюркские и японский - к алтайским, тупи - к америндским, австронезийские - к австрическим, баскский - к изолированным
4. искусственные языки разбиты на классы` },
  "0.10.1": { date: [2005, 8, 28], mainSource: sources.saurom_lamderth },
  "0.10.5": { date: [2005, 8, 29], mainSource: sources.cdmagos },
  "0.10.10": { date: [2005, 8, 29], mainSource: sources.listserv },
  "0.11.0": { date: [2005, 8, 29], mainSource: sources.elbenwald_thierbach },
  "0.11.3": { date: [2005, 8, 29], mainSource: sources.elbenwald },
  "0.11.5": { date: [2005, 8, 29], mainSource: null },
  "0.11.8": { date: [2005, 8, 29], mainSource: null },
  "0.12.0": { date: [2005, 8, 30], mainSource: sources.elbenwald },
  "0.13.0": { date: [2005, 8, 31], mainSource: sources.eldalie },
  "0.13.1": { date: [2005, 8, 31], mainSource: null },
  "0.13.5": { date: [2005, 9, 20], mainSource: null },
  "0.13.6": { date: [2005, 9, 21], mainSource: sources.iceland },
  "0.14.0": { date: [2005, 9, 22], mainSource: sources.theonering },
  "0.14.5": { date: [2005, 9, 26], mainSource: sources.artlangs },
  "0.15.0": { date: [2005, 9, 27], mainSource: null },
  "0.16.0": { date: [2005, 9, 28], mainSource: null },
  "0.16.1": { date: [2005, 9, 29], mainSource: sources.me_central },
  "0.16.3": { date: [2005, 10, 1], mainSource: sources.persianblog },
  "0.16.5": { date: [2006, 4, 17], mainSource: null },
  "0.17.0": { date: [2009, 5, 30], mainSource: null },
  "1.0": { date: [2009, 5, 30], mainSource: sources.book },
  "1.0.1": { date: [2009, 5, 30], mainSource: sources.book },
  "1.0.2": { date: [2009, 6, 13], mainSource: sources.book },
  "1.0.3": { date: [2016, 4, 30], mainSource: null },
  "1.1": { date: [2016, 4, 30], mainSource: sources.slideshare, description: "+ added Egyptian hieroglyphs etc." },
  "1.1.1": { date: [2020, 11, 12], mainSource: null, description: "Akkadian cuneiform added" },
  "2.0.0": { date: [2020, 12, 10], mainSource: null, description: "Uploaded to GitHub" },
  "2.1.0": { date: [2020, 12, 11], mainSource: sources.inspiration },
  "2.2.0": { date: [2020, 12, 12], mainSource: sources.elronds_library },
  "2.3.0": { date: [2020, 12, 12], mainSource: sources.lyricstranslate },
  "2.3.1": { date: [2020, 12, 12], mainSource: null },
  "2.3.5": { date: [2021, 1, 7], mainSource: null },
  "2.4.0": { date: [2021, 1, 7], mainSource: sources.langsandlit },
  "2.4.5": { date: [2022, 5, 22], mainSource: sources.lyricstranslate },
});

export type InputKey = keyof typeof inputs;
