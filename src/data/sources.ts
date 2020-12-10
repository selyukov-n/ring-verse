export type Source = {
  id: string;
  name: string;
  link?: string;
};

const appendIds = <K extends string, T>(data: Record<K, T>, func: (t: T) => T) => {
  const result: Record<K, T & { id: string }> = {} as any;
  for(const k in data) {
    if (!data.hasOwnProperty(k)) continue;

    const obj = func ? func(data[k]) : data[k];
    result[k] = { ...obj, id: k };
  }
  return result;
};

const makeIds = <K extends string>(data: Record<K, Omit<Source, "id">>) => appendIds(data, t => ({ ...t, toString: () => t.name }));

const elbenwald = "Elbenwaldforum";

export const sources = makeIds({
  alqualonde: {
    name: "Alqualondë.com",
  },
  alt_forum: {
    name: 'Форум "Альтернатива"',
  },
  ank: {
    name: "AnK",
  },
  ank1: {
    name: "AnK Tolkien Poetry Translations",
  },
  artlangs: {
    name: "The Artlangs Community",
  },
  barrodowns: {
    name: "The Barrow-Downs Discussion Forum",
  },
  book: {
    name: "Book",
  },
  c: {
    name: "Ring verses in C programming language",
  },
  captionmachine: {
    name: "www.captionmachine.com",
  },
  cdmagos: {
    name: "Congregación de Magos",
  },
  dhimmiwatch: {
    name: "Dhimmi Watch",
  },
  dosk: {
    name: "WWW-Dosk",
  },
  drops: {
    name: "JRRT by Drops",
  },
  elbenwald: {
    name: elbenwald,
  },
  elbenwald_thierbach: {
    name: `Dirk Thierbach's collection on ${elbenwald}`,
  },
  eldalie: {
    name: "Eldalië.it - La poesia dell'Anello... in dialetto",
  },
  elendili: {
    name: "elendili.pl",
  },
  gutiska: {
    name: "Gutiska site",
  },
  gwaith: {
    name: "Gwaith-i-Phethdain",
  },
  ha: {
    name: "ХА",
  },
  hfilippo: {
    name: "H.Flippo's site of German and Latin",
  },
  hpforum: {
    name: "HPForum.ru",
  },
  iceland: {
    name: "Iceland.com Bulletin Board",
  },
  iad: {
    name: "Translations of the Ring Rhyme by Ivan Derzhanski",
  },
  icq: {
    name: "Volchonok [icq user]",
  },
  jrrt_memorial: {
    name: "J.R.R.Tolkien Memorial",
  },
  jrrvf: {
    name: "jrrvf.com/forum/",
  }, // Retraductions du Poème des Anneaux
  kniga2001: {
    name: "kniga2001",
  },
  kontuwiki: {
    name: "kontu.wiki/Sormusruno",
  },
  listserv: {
    name: "listserv.brown.edu",
  },
  litforum: {
    name: "LitForum",
  },
  lodz_tpsa: {
    name: "lodz.tpsa.pl/bez/Tolkien/vers-eng.html",
  },
  md: {
    name: "Mellonath Daeron",
  },
  me_central: {
    name: "Middle Earth's Central",
  },
  minastirith: {
    name: "minastirith.com",
  },
  mith: {
    name: "mith.ru",
  },
  oe_rv: {
    name: "OE ring verse",
  },
  olmer: {
    name: "tolkien.olmer.ru",
  },
  ost: {
    name: "LotR OST",
  },
  persianblog: {
    name: "dunadan.persianblog.com",
  },
  planetTolkien: {
    name: "planet-tolkien.com/board/",
  },
  printed_edition: {
    name: "из печатного издания",
  },
  ringarnas: {
    name: "Ringarnas härskare",
  },
  rosetta: {
    name: "Tolkien Rosetta Stone",
  },
  ru_competition: {
    name: "Конкурс переводов поэзии Толкиена, 1998 г. Заклинание кольца",
  },
  saurom_lamderth: {
    name: "band Saurom lamderth - album Sombras del este (2002)",
  },
  slideshare: {
    name: "Ring Verse Multilanguage on Slideshare",
  },
  sotomayor: {
    name: "Sylvia Sotomayor's site of Kélen",
  },
  tech_me: {
    name: "Technology in Middle-Earth",
  },
  theonering: {
    name: "theonering.com",
  },
  toki_pona: {
    name: "tokipona",
  },
  tolkien_cz: {
    name: "Jeden Prsten vládne vśem - 100x jinak",
  },
  tolklang: {
    name: "TolkLang, ElfLing",
  },
  torre: {
    name: "Torre Shay",
  },
  translations: {
    name: "переводы ВК",
  },
  turbine: {
    name: "lotro.turbine.com",
  },
  utenti: {
    name: "utenti forum",
  },
  vt13: {
    name: "Vinyar Tengwar #13, pp. 13 - 15",
  },
  wikia: {
    name: "LotR Wikia",
  },
  wiki_ast: {
    name: "Wikipedia on Asturian",
  },
  wiki_ia: {
    name: "Wikipedia on Interlingua",
  },
  wiki_la: {
    name: "Wikipedia on Latin",
  },
  wilwarinart: {
    name: "wilwarinart",
  },
  wmigurok: {
    name: "WMIGUROK Portal Fantasy",
  },
  zbihniew: {
    name: "Zbihniew ring verses (PDF)",
  },
});
