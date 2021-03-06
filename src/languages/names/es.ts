import * as n from "./names";

export const groups: typeof n.groups = {
  _en: "en inglés",
  _fr: "en francés",
  _he: "en hebreo",
  _po: "en polaco",
  _ru: "en ruso",

  afroasiatic: "Afroasiáticas",
  algonquian: "Algonquinas",
  altaic: "Altaicas",
  american: "Amerindias",
  arda: "Lenguas de Arda",
  arda_related: "relacionadas con Arda",
  austric: "Áustricas",
  austroasian: "Austroasiáticas",
  austronesian: "Austronesias",
  austronesian_mp: "malayo-polinesias",
  austronesian_oceanic: "oceánicas",
  austronesian_malayic: "maláyicas",
  austronesian_philippine: "filipinas",
  baltic: "bálticas",
  bantu: "Lenguas bantúes",
  celtic: "celtas",
  conlangs: "Lenguas construidas",
  conlangs_anguric: "Angûric y Arathûric (por Jonathan Avidan)",
  conlangs_other: "otras",
  conlangs_zbihniew: "lenguas de zbihniew",
  dravidian: "Dravídicas",
  east: "orientales",
  egypt: "Egipcias",
  encoding: "Códigos etc.",
  fictional: "artísticas",
  finno_ugric: "ugrofinesas",
  finno_baltic: "fino-pérmicas",
  germanic: "germánicas",
  germanic_east: "grupo oriental",
  germanic_nordic: "grupo nórdico",
  germanic_west: "grupo occidental",
  greek: "griegas",
  ie: "Indoeuropeas",
  indoaryan: "indoarias",
  indoiranian: "indoiranias",
  international: `auxiliares`,
  iranian: "iranias",
  isolated: "Lenguas aisladas",
  italic: "itálicas",
  jokes: "Bromas",
  kadai: "Tai-kadai",
  kartvelian: "Kartvelianas",
  mongolic: "mongólicas",
  niger_congo: "Nigerocongolesas",
  nostratic: "Nostráticas",
  other: "Otras lenguas",
  quechua: "Lenguas quechuas",
  romance: "romances",
  romance_central: "centromeridionales",
  romance_east: "orientales",
  romance_gallo: "galorromances",
  romance_gallo_ital: "galoitalianas",
  romance_iberian: "iberorromances",
  romance_occitan: "occitanorromances",
  romance_rhaeto: "retorromances",
  romance_south_ital: "italianas centromeridionales",
  sami: "lenguas sami",
  secret: "Lenguas secretas",
  semitic: "Semíticas",
  semitic_ne: "orientales",
  semitic_nw: "noroccidentales",
  semitic_nw_aramaic: "arameas",
  semitic_nw_canaanite: "cananeas",
  semitic_sc: "sudoccidentales",
  sino_tibetan: "Sino-tibetanas",
  slavic_1: "eslavas (excepto el ruso)",
  slavic_east: "orientales",
  slavic_south: "meridionales",
  slavic_west: "occidentales",
  tupi: "Lenguas tupíes",
  turkic: "túrquicas",
  ugric: "ugrias",
  uralic: "Urálicas",
  west: "occidentales",
};

export const arda: typeof n.arda = {
  "black-speech": "lengua negra",
  khuzdul: "khuzdul",
  quenya: "quenya",
  sindarin: "sindarin",
  westron: "oestron",
};

export const languages: typeof n.languages = {
  "ru": "ruso",
  // germanic
  "en": "dialectos ingleses",
  "oe": "anglosajón",
  "af": "afrikáans",
  "nl": "neerlandés",
  "fy": "frisón",
  "ltz": "luxemburgués",
  "de": "alemán",
  "yid": "yidis",
  "on": "nórdico antiguo",
  "dan": "danés",
  "swe": "sueco",
  "nor-b": "noruego (bokmål)",
  "nor-nn": "noruego (nynorsk)",
  "fao": "feroés",
  "ice": "islandés",
  "got": "gótico",

  "gre": "griego antiguo",
  "el": "griego",
  "alb": "albanés",
  "gla": "gaélico escocés",
  "gle": "irlandés",
  "cym": "galés",
  "bre": "bretón",

  // latin + romance
  "lat": "latín",
  "pt": "portugués",
  "es": "español",
  "arg": "aragonés",
  "ast": "asturiano (asturleonés)",
  "cat": "catalán",
  "glg": "gallego",
  "fre": "francés",
  "srd": "sardo",
  "it": "italiano",
  "it-center": "italiano (dialectos centrales)",
  "it-south": "italiano (dialectos meridionales)",
  "swi": "romanche",
  "fru": "friulano",
  "rum": "rumano",
  "egl": "emiliano",
  "rgn": "romañol",
  "lmo": "lombardo",
  "nap": "napolitano",
  "pms": "piamontés",
  "scn": "siciliano",
  "vec": "véneto",

  "lit": "lituano",
  "ltv": "letón",
  "prg": "prusiano antiguo",

  // slavic
  "pol": "polaco",
  "cze": "checo",
  "lso": "bajo sorabo",
  "uso": "alto sorabo",
  "csb": "casubio",
  "ukr": "ucraniano",
  "lem": "rusino (lemko)",
  "bel": "bielorruso",
  "ocs": "antiguo eslavo eclesiástico",
  "cro": "serbocroata",
  "slovak": "eslovaco",
  "slo": "esloveno",
  "bul": "búlgaro",
  "mac": "macedonio",

  "bng": "bengalí",
  "hin": "hindi",
  "mar": "maratí",
  "rom": "romaní",
  "sin": "cingalés",
  "per": "persa",
  "arm": "armenio",

  // non-ie
  "fin": "finés",
  "est": "estonio",
  "hun": "húngaro",
  "sma": "sami meridional",
  "tur": "turco",
  "kgz": "kirguís",
  "jap": "japonés",
  "mon": "mongol",
  "tam": "tamil",
  "akk": "acadio",
  "hbo": "hebreo clásico",
  "heb": "hebreo",
  "aramaic": "arameo",
  "arabic": "árabe",
  "egy": "egipcio",
  "geo": "georgiano",
  "zh": "chino",
  "swa": "suajili",
  "oji": "ojibwa",
  "tup": "tupinambá",
  "que": "quechua",
  "vie": "vietnamita",
  "tgl": "tagalo",
  "ind": "indonesio",
  "mal": "malayo",
  "mao": "maori",
  "tha": "tailandés",
  "baq": "vasco",
  "kor": "coreano",
  "oph": "ofenya",
};

export const conlangs: typeof n.conlangs = {
  ...n.conlangs,
  "c.bugn": "BA URUK GYM ÑA (alto orco)",
  "c.karkhuzdul": "karkhuzdul",
  "c.eo": "esperanto",
  "c.n-eo": "nova esperanto",
  "c.ido": "ido",
  "c.int": "interlingua",
  "c.rom": "romanova",
  "c.en-basic": "inglés básico",
  "c.wen": "venédico",

  "c.eld": "Lengua Anciana",
  "c.tlh": "klingon",
  "c.dro": "drow",
};

export const encodings: typeof n.encodings = {
  ...n.encodings,
  "e.braille": "braille",
  "e.gest": "alfabeto manual británico",
  "e.morse": "código morse",
  "e.pig": "Pig Latin",
};
