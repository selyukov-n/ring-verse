import { ArdaLang } from "./arda";
import { Conlang } from "./conlangs";
import { EncodingLang } from "./encodings";
import { JokesLang } from "./jokes";
import { Lang } from "./languages";

export const groups = {
  _en: "по-английски",
  _fr: "по-французски",
  _he: "на иврите",
  _po: "по-польски",
  _ru: "по-русски",
  afroasiatic: "Афразийские языки",
  altaic: "Алтайские языки",
  american: "Америндские языки",
  arda: "Языки Арды",
  arda_related: "относящиеся к Арде",
  austric: "Австрические языки",
  austroasian: "Австроазиатские",
  austronesian: "Австронезийские",
  austronesian_philippine: "мезо-филиппинские",
  austronesian_sulawesi: "сулавесийские",
  baltic: "балтийские",
  celtic: "кельтские",
  conlangs: "Искусственные языки",
  conlangs_anguric: "Angûric and Arathûric (by Jonathan Avidan)",
  conlangs_other: "прочие",
  conlangs_zbihniew: "языки zbihniew'а",
  dravidian: "Дравидийские языки",
  east: "восточные",
  egypt: "египетские",
  encoding: "Кодировки, языки программирования и т.п.",
  fictional: "фантастические",
  finno_ugric: "финно-угорские",
  finno_baltic: "прибалтийско-финские",
  germanic: "германские",
  germanic_east: "восточногерманские",
  germanic_nordic: "северогерманские (скандинавские)",
  germanic_west: "западногерманские",
  greek: "греческие",
  ie: "Индоевропейские языки",
  indoaryan: "индоарийские",
  indoiranian: "индоиранские",
  international: `"международные" и т.п.`,
  iranian: "иранские",
  isolated: "Изолированные языки",
  italic: "италийские",
  jokes: "Юмор",
  kadai: "Тай-кадайские",
  kartvelian: "Картвельские языки",
  nostratic: "Ностратические языки",
  other: "Другие языки",
  romance: "романские",
  secret: "Тайные языки",
  semitic: "семитские",
  semitic_ne: "северно-периферийная (северо-восточная) группа",
  semitic_nw: "северно-центральная (северо-западная) группа",
  semitic_nw_aramaic: "арамейская подгруппа",
  semitic_nw_canaanite: "ханаанейская подгруппа",
  semitic_sc: "южно-центральная группа",
  sino_caucasian: "Сино-кавказские языки",
  sino_tibetan: "Сино-тибетские",
  slavic_1: "славянские (кроме русского)",
  slavic_east: "восточнославянские",
  slavic_south: "южнославянские",
  slavic_west: "западнославянские",
  tupi: "Языки тупи",
  turkic: "тюркские",
  ugric: "угорские",
  uralic: "Уральские языки",
  west: "западные",
};

export const arda: Record<ArdaLang, string> = {
  "black-speech": "черное наречие",
  khuzdul: "кхуздул",
  quenya: "квенья",
  sindarin: "синдарин",
  westron: "вестрон"
};

export const languages: Record<Lang, string> = {
  "ru": "русский",
  // germanic
  "en": "английский (диалекты ;) )",
  "oe": "древнеанглийский",
  "af": "африкаанс",
  "nl": "нидерландский",
  "fy": "фризский",
  "ltz": "люксембургский",
  "de": "немецкий",
  "yid": "идиш",
  "on": "древнеисландский (древнесеверный)",
  "dan": "датский",
  "swe": "шведский",
  "nor-b": "норвежский (букмол)",
  "nor-nn": "норвежский (нюношк)",
  "fao": "фарерский",
  "ice": "исландский",
  "got": "готский",

  "gre": "древнегреческий",
  "el": "греческий",
  "alb": "албанский",
  "gle": "ирландский",
  "cym": "валлийский",

  // latin + romance
  "lat": "латинский",
  "pt": "португальский",
  "es": "испанский",
  "cat": "каталанский",
  "glg": "галисийский",
  "fre": "французский",
  "srd": "сардский",
  "it": "итальянский",
  "swi": "швейцарский ретороманский",
  "fru": "фриульский",
  "rum": "румынский",

  "lit": "литовский",
  "ltv": "латышский",
  "prg": "прусский",

  // slavic
  "pol": "польский",
  "cze": "чешский",
  "lso": "нижнелужицкий",
  "uso": "верхнелужицкий",
  "csb": "кашубский",
  "ukr": "украинский",
  "lem": "лемковский",
  "bel": "белорусский",
  "ocs": "старославянский",
  "cro": "сербскохорватский",
  "slovak": "словацкий",
  "slo": "словенский",
  "bul": "болгарский",
  "mac": "македонский",

  "bng": "бенгальский",
  "rom": "цыганский",
  "per": "персидский",
  "arm": "армянский",

  // non-ie
  "fin": "финский",
  "est": "эстонский",
  "hun": "венгерский",
  "tur": "турецкий",
  "jap": "японский",
  "tam": "тамильский",
  "akk": "аккадский",
  "hbo": "древнееврейский",
  "heb": "иврит",
  "aramaic": "арамейский",
  "arabic": "арабский",
  "egy": "древнеегипетский",
  "geo": "грузинский",
  "zh": "китайский",
  "tup": "старый тупи (тупинамба)",
  "vie": "вьетнамский",
  "tgl": "тагальский",
  "ind": "индонезийский",
  "mal": "малайзийский",
  "tha": "тайский",
  "baq": "баскский",
  "kor": "корейский",
  "oph": "офенский",
};

export const conlangs: Record<Conlang, string> = {
  "c.bugn": "БА УРУК ГЫМ НЯ (высокий орочий язык)",
  "c.karkhuzdul": "каркхуздул",
  "c.eo": "эсперанто",
  "c.n-eo": "Nova esperanto",
  "c.ido": "идо",
  "c.int": "интерлингва",
  "c.rom": "Romanova",
  "c.atl": "Atlango",
  "c.en-basic": "Basic (Simple) English",
  "c.toki": "Toki Pona",
  "c.eld": "Старшая речь",
  "c.tlh": "клингонский",
  "c.dro": "язык дроу",

  "c.ari": "Arielur (Proto-Anguric and Proto-Arathuric)",
  "c.ang": "Angur",
  "c.ara": "Arathur",
  "c.aul": "Aulingese",
  "c.des": "Deswu",
  "c.lei": "Leillo",
  "c.kel": "Kelen",
  "c.var": "Varek",
  "c.she": "Shelavic",
  "c.dem": "Demane",
  "c.bli": "Blikhene",
  "c.bzd": "Bzdziungwa",
  "c.fuc": "Fucatokk",
  "c.gac": "Gaciça",
  "c.alm": "Almensk",
  "c.hal": "Hallon",
  "c.ena": "Enalda",
  "c.lis": "Lissenian",
  "c.gwa": "Gwadoreg",
  "c.deb": "Dêbiua",
  "c.shem": "шиморийский",
  "c.vli": "Vling",
  "c.wen": "Wenedyk",
  "c.ser": "Serikats",
  "c.hon": "Honagar",
  "c.tre": "Treusi",
  "c.ave": "Avesta",
};

export const encodings: Record<EncodingLang, string> = {
  "e.c": "ANSI C",
  "e.pig": "поросячья латынь",
  "e.eli": "Elignsh =)",
  "e.braille": "шрифт Брайля",
  "e.gest": "язык жестов",
  "e.morse": "код Морзе",
  "e.hex": "Hexspeak",
  "e.sndex": "Soundex",
  "e.dmsnd": "Daitch-Mokotoff Soundex",
  "e.nysiis": "NYSIIS (New York State Identification and Intelligence System)",
  "e.ver": "Verlan",
  "e.g": "The G Language",
  "e.nuts": "The Nuts Language",
};

export const jokes: Record<JokesLang, string> = {
  "j.en": groups._en,
  "j.po": groups._po,
  "j.ru": groups._ru,
};
