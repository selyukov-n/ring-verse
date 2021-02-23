import { ArdaLang } from "../arda";
import { Conlang } from "../conlangs";
import { EncodingLang } from "../encodings";
import { Lang } from "../languages";

export const groups = {
  _en: "по-английски",
  _fr: "по-французски",
  _he: "на иврите",
  _po: "по-польски",
  _ru: "по-русски",

  afroasiatic: "Афразийские языки",
  algonquian: "Алгонкинские",
  altaic: "Алтайские языки",
  american: "Америндские языки",
  arda: "Языки Арды",
  arda_related: "относящиеся к Арде",
  austric: "Аустрические языки",
  austroasian: "Австроазиатские",
  austronesian: "Австронезийские",
  austronesian_mp: "малайско-полинезийские",
  austronesian_malayic: "малайзийские",
  austronesian_oceanic: "океанийские",
  austronesian_philippine: "филиппинские",
  baltic: "балтийские",
  bantu: "Языки банту",
  celtic: "кельтские",
  conlangs: "Искусственные языки",
  conlangs_anguric: "Angûric and Arathûric (by Jonathan Avidan)",
  conlangs_other: "прочие",
  conlangs_zbihniew: "языки zbihniew'а",
  dravidian: "Дравидийские языки",
  east: "восточные",
  egypt: "Египетские языки",
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
  mongolic: "монгольские",
  niger_congo: "Нигеро-конголезские языки",
  nostratic: "Ностратические языки",
  other: "Другие языки",
  quechua: "Кечуанские",
  romance: "романские",
  romance_central: "центрально-романские",
  romance_east: "восточно-романские",
  romance_gallo: "галло-романские",
  romance_gallo_ital: "галло-итальянские",
  romance_iberian: "иберо-романские",
  romance_occitan: "окситано-романские",
  romance_rhaeto: "ретороманские",
  romance_south_ital: "южноитальянские",
  sami: "саамские",
  secret: "Тайные языки",
  semitic: "Семитские языки",
  semitic_ne: "северно-периферийная (северо-восточная) группа",
  semitic_nw: "северно-центральная (северо-западная) группа",
  semitic_nw_aramaic: "арамейская подгруппа",
  semitic_nw_canaanite: "ханаанейская подгруппа",
  semitic_sc: "южно-центральная группа",
  sino_tibetan: "Сино-тибетские языки",
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
  westron: "вестрон",
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
  "gla": "шотландский гэльский",
  "gle": "ирландский",
  "cym": "валлийский",
  "bre": "бретонский",

  // latin + romance
  "lat": "латинский",
  "pt": "португальский",
  "es": "испанский",
  "arg": "арагонский",
  "ast": "астурийский (астурлеонский)",
  "cat": "каталанский",
  "glg": "галисийский",
  "fre": "французский",
  "srd": "сардинский",
  "it": "итальянский",
  "it-center": "итальянский (центральные диалекты)",
  "it-south": "итальянский (южные диалекты)",
  "swi": "романшский",
  "fru": "фриульский",
  "rum": "румынский",
  "egl": "эмилианский",
  "rgn": "романьольский",
  "lmo": "ломбардский",
  "nap": "неаполитанский",
  "pms": "пьемонтский",
  "scn": "сицилийский",
  "vec": "венетский",

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
  "hin": "хинди",
  "mar": "маратхи",
  "rom": "цыганский",
  "sin": "сингальский",
  "per": "персидский",
  "arm": "армянский",

  // non-ie
  "fin": "финский",
  "est": "эстонский",
  "hun": "венгерский",
  "sma": "южносаамский",
  "tur": "турецкий",
  "kgz": "киргизский",
  "jap": "японский",
  "mon": "монгольский",
  "tam": "тамильский",
  "akk": "аккадский",
  "hbo": "древнееврейский",
  "heb": "иврит",
  "aramaic": "арамейский",
  "arabic": "арабский",
  "egy": "древнеегипетский",
  "geo": "грузинский",
  "zh": "китайский",
  "swa": "суахили",
  "oji": "оджибве",
  "tup": "старый тупи (тупинамба)",
  "que": "кечуа",
  "vie": "вьетнамский",
  "tgl": "тагальский",
  "ind": "индонезийский",
  "mal": "малайский",
  "mao": "маори",
  "tha": "тайский",
  "baq": "баскский",
  "kor": "корейский",
  "oph": "офенский",
};

export const conlangs: Record<Conlang, string> = {
  "c.bugn": "БА УРУК ГЫМ НЯ (высокий орочий язык)",
  "c.karkhuzdul": "каркхуздул",
  "c.man": "Man-Trab, a Sino-Tibetan inspired conlang built on Primitive Elvish roots",

  "c.eo": "эсперанто",
  "c.n-eo": "Nova esperanto",
  "c.ido": "идо",
  "c.int": "интерлингва",
  "c.rom": "Romanova",
  "c.atl": "Atlango",
  "c.en-basic": "Basic (Simple) English",
  "c.toki": "Toki Pona",
  "c.unirom": "UniRom",

  "c.eld": "Старшая Речь",
  "c.tlh": "клингонский",
  "c.dro": "язык дроу",

  "c.ari": "Arielúr (Proto-Angûric and Proto-Arathûric)",
  "c.ang": "Angúr",
  "c.ara": "Arathúr",
  "c.aul": "Aulingese",
  "c.des": "Deswu",
  "c.lei": "Leillo",
  "c.kel": "Kēlen",
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
  "c.shem": "Shemoran",
  "c.vli": "Vling",
  "c.wen": "Wenedyk",
  "c.ser": "Serikats",
  "c.hon": "Honagar",
  "c.tre": "Treusi",
  "c.ave": "Avesta",
  "c.kash": "Kash (?)",
  "c.vel": "Veldan",
  "c.auleri": "Language of the Auleri (?)",
  "c.sen": "Senyecan",
  "c.idr": "Idrani",
  "c.mej": "Mejanyo",
  "c.zva": "Zvagah (Zha'vu'Pagah)",
  "c.sso": "S'sonri",
  "c.kar": "Kardii",
  "c.sja": "Sjastian",
  "c.p-nal": "Proto-Naltuushin",
  "c.tza": "Tzani",
  "c.del": "Delendi",
  "c.sin": "Sindénir",
  "c.led": "Ledhagliem",
  "c.xli": "Xliponian",
  "c.delang": "Delang",
  "c.m_gaul": "Modern Gaulish",
  "c.kire": "Kirĕ", // "HolyBonobos [reddit]"
  "c.jod": "Jodiyama", // "Oj742 [reddit]"
  "c.tuo": "Tuokzii", // "SVEN_THE_DUCK [reddit]"
  "c.san": "Sanavran", // "Leshunen [reddit]"
  "c.nlb": "Novi Lume Basa (Enelbo)", // "SqrtTwo [reddit]"
  "c.goi": "Goitʼa", // "EliiLarez [reddit]"
  "c.tauraj": "Tauraj", // "Hjuldahr [reddit]"
  "c.drak": "Drakoan", // "mantisinmypantis [reddit]"
  "c.van": "vanawo", // "dragonsteel33 [reddit]"
  "c.rod": "Rodelnian", // "MihailiusRex [reddit]"
  "c.breg": "Брег блачък", // "PikabuOppresser228 [reddit]"
  "c.salp": "Salpingera Liuzē", // "Salpingia [reddit]"
  "c.sors": "šors zāz", // "Achsenmacht_ [reddit]"
  "c.nubve": "Nü Bve", // "caitikoi [reddit]"
  "c.shortswede": "[shortswede's conlang]", // "shortswede [reddit]"
  "c.sho": "Shorama", // "Schnitzelinski [reddit]"
  "c.alef": "Alèfteno", // "Crown6 [reddit]"
  "c.nyev": "Nyevandya", // "Dr_Chair [reddit]"
  "c.lal": "Lalera", // "ItsAPandaGirl [reddit]"
  "c.santah": "Santawa Tahtu", // "phairat [reddit]"
  "c.thak": "Thak'u", // "romain122 [reddit]"
  "c.dellek": "Dełani Lekadj", // "Imuybemovoko [reddit]"
  "c.horg": "Horgothic", // "HaloedBane [reddit]"
  "c.luth": "Lúthnaek", // "OfficialHelpK [reddit]"
  "c.vis": "Visochi", // "Splendidissimus [reddit]"
  "c.puskat": "Pűsar Katriser", // "linksfan [reddit]"
  "c.weeb": "Weeblang", // "ZetDudeG [reddit]"
  "c.atlaans": "Atlaans", // "tertrih [reddit]"
  "c.tohan": "Tohanian", // "tertrih [reddit]"
  "c.tunsk": "Tunsk", // "tertrih [reddit]"
  "c.honal": "Honalano", // "tertrih [reddit]"
  "c.atlan_as": "Asgard Atlan", // "tertrih [reddit]"
  "c.atlan_md": "Middle Atlan", // "tertrih [reddit]"
  "c.atlan_hi": "High Atlan", // "tertrih [reddit]"
};

export const encodings: Record<EncodingLang, string> = {
  "e.c": "ANSI C",
  "e.pig": "поросячья латынь",
  "e.eli": "Elignsh =)",
  "e.braille": "шрифт Брайля",
  "e.gest": "дактильный алфавит британского жестового языка",
  "e.morse": "код Морзе",
  "e.hex": "Hexspeak",
  "e.sndex": "Soundex",
  "e.dmsnd": "Daitch-Mokotoff Soundex",
  "e.nysiis": "NYSIIS (New York State Identification and Intelligence System, 1970)",
  "e.ver": "Verlan",
  "e.g": "The G Language",
  "e.nuts": "The Nuts Language",
};
