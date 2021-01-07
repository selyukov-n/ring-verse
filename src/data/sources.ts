import { messages } from "../intl";

export type Source = {
  id: string;
  name: string;
  link?: string;
  makeAuthor: (name: string) => string;
};

const makeIds = <K extends string>(data: Record<K, Omit<Source, "id" | "makeAuthor">>) => {
  const result: Record<K, Source> = {} as any;
  for(const id in data) {
    if (!data.hasOwnProperty(id)) continue;
    const t = data[id];
    result[id] = {
      ...t,
      id,
      toString() { return t.name },
      makeAuthor: name => `${name} [${t.name}]`,
    };
  }
  return result;
};

const elbenwald = "Elbenwaldforum";

export const sources = makeIds({
  alqualonde: {
    name: "Alqualondë.com",
    link: "http://www.alqualonde.com/main.php?id=books/tolkien/the_lord_of_the_rings/ringverses",
  },
  alt_forum: {
    name: 'Форум "Альтернатива"',
    link: "http://ringwraiths.gondor.ru/forum/index.php?showtopic=14&st=0",
  },
  ambar_eldaron: {
    name: "Ambar Eldaron",
    link: "https://ambar-eldaron.com/texte1.html",
  },
  ank: {
    name: "Арда-на-Куличках",
    link: "http://www.kulichki.com/tolkien/forum",
  },
  ank1: {
    name: "Арда-на-Куличках: Tolkien Poetry Translations",
    link: "http://www.kulichki.com/tolkien/cabinet/svod/3rings/main.html",
  },
  artlangs: {
    name: "The Artlangs Community",
    link: "http://artlangs.com/index.php?name=PNphpBB2&file=viewtopic&t=173&POSTNUKESID=4de489d03b7ffcd631286dae64360d50",
  },
  barrodowns: {
    name: "The Barrow-Downs Discussion Forum",
    link: "http://wwww.barrowdowns.com/showthread.php?s=cb03df8e0bff3bf4abc882419d72f3db&t=3347&page=1&pp=40",
  },
  book: {
    name: '"Trzysta przekładów dla fanów pod nieba skłonem..." by Tadeusz A. Olszański',
  },
  c: {
    name: "Ring verses in C programming language",
    link: "http://www.lodz.tpsa.pl/iso/Tolkien/verses-C.html",
  },
  captionmachine: {
    name: "Caption Machine",
    link: "http://www.captionmachine.com/index.php?c=1&p=140",
  },
  cdmagos: {
    name: "Congregación de Magos",
    link: "http://es.msnusers.com/vjuobefpddcagjt9g08rmd5el1/losversosdelosanillos.msnw",
  },
  decormilaikina: {
    name: "decormilaikina",
    link: "https://decormilaikina.ru/sq/idei-podarkov/kolco-vsevlastiya-chto-oznachaet-chto-bylo-napisano-na-kolce-iz/",
  },
  dhimmiwatch: {
    name: "Dhimmi Watch",
    link: "http://www.jihadwatch.org/dhimmiwatch/archives/000682.php",
  },
  dominus_anulorum: {
    name: "Dominus Anulorum: The LOTR into Latin Project!",
    link: "http://dominus-anulorum.blogspot.com/",
  },
  dosk: {
    name: "WWW-Dosk",
    link: "http://www.elhe.ru/cgi-bin/forum/YaBB.pl?board=lang;action=display;num=1120049861",
  },
  drops: {
    name: "JRRT by Drops",
    link: "http://www.silmarillion.endore.org/ksiazki/wier_lotr.htm",
  },
  elbenwald: {
    name: elbenwald,
    link: "http://www.elbenwaldforum.de/showflat.php?Cat=&Number=33183&page=&view=&sb=5&o=",
  },
  elbenwald_thierbach: {
    name: `Dirk Thierbach's collection on ${elbenwald}`,
    link: "http://www.elbenwaldforum.de/showflat.php?Cat=&Number=33183&page=&view=&sb=5&o=",
  },
  eldalie: {
    name: "Eldalië.it - La poesia dell'Anello... in dialetto",
    link: "http://eldalie.it/forum/list_thread.php?iddiscussione=4513",
  },
  elendili: {
    name: "Elendili - Przyjaciele Elfów",
    link: "http://elendili.pl/viewtopic.php?p=127358",
  },
  elronds_library: {
    name: "Elrond's Library - The Ring Verse Translations",
    link: "http://www.elrondslibrary.fr/RingVerse.html",
  },
  fanatics_me: {
    name: "Fanàtics de la Terra Mitjana",
    link: "https://xanoz94.wixsite.com/senyordelsanells/untitled-c18bc",
  },
  gutanebokahus: {
    name: "Bokahus",
    link: "https://gutanebokahus.wordpress.com/liuth-hriggis",
  },
  gutiska: {
    name: "Gutiska site",
    link: "http://www.stormloader.com/carver/gutrazda/ringpoem.html",
  },
  gwaith: {
    name: "Gwaith-i-Phethdain",
    link: "http://www.elvish.org/gwaith/language.htm",
  },
  ha: {
    name: "ХА",
    link: "https://henneth-annun.ru/forum",
  },
  hfilippo: {
    name: "H.Flippo's site of German and Latin",
  },
  hpforum: {
    name: "HPForum.ru",
    link: "http://hpforum.ru/viewtopic.php?t=842",
  },
  iceland: {
    name: "Iceland.com Bulletin Board",
    link: "http://www.chatforum.com/iceland/ubb/cgi-bin/postings.cgi?action=reply&forum=General&number=1&topic=000724.cgi&TopicSubject=LOTR++In+your+language",
  },
  iad: {
    name: "Translations of the Ring Rhyme by Ivan Derzhanski",
    link: "http://www.math.bas.bg/~iad/ashnazg.html",
  },
  icq: {
    name: "Volchonok [icq user]",
  },
  inspiration: {
    name: "The Ring Verse ... in 59 languages!",
    link: "http://tolkien-inspiration.blogspot.com/2012/07/ring-verse-in-50-languages.html",
  },
  jrrt_memorial: {
    name: "J.R.R.Tolkien Memorial",
    link: "http://web.telia.com/~u66004992/LoTR.html",
  },
  jrrvf: {
    name: "Retraductions du Poème des Anneaux",
    link: "http://www.jrrvf.com/forum/noncgi/Forum11/HTML/001075.html",
  },
  kniga2001: {
    name: "КНИГА - Толкиен и его мир",
    link: "http://www.kniga2001.narod.ru/tolkien/01pere",
  },
  kontuwiki: {
    name: "Kontuwiki",
    link: "http://kontu.wiki/Sormusruno",
  },
  listserv: {
    name: "listserv.brown.edu",
    link: "http://listserv.brown.edu/archives/cgi-bin/wa?A1=ind0501c&L=conlang&D=0#17",
  },
  litforum: {
    name: "LitForum",
    link: "http://www.litforum.ru/index.php?showtopic=9806&st=10",
  },
  lodz_tpsa: {
    name: "Rymy Pierścienia (Ring Verses) w różnych językach",
    link: "http://www.lodz.tpsa.pl/iso/Tolkien/vers-eng.html",
  },
  lyricstranslate: {
    name: "LyricsTranslate.com",
    link: "https://lyricstranslate.com/en/jrr-tolkien-one-ring-lyrics.html"
  },
  md: {
    name: "Mellonath Daeron",
    link: "http://www.forodrim.org/daeron/md_home.html",
  },
  me_central: {
    name: "Middle Earth's Central",
    link: "http://www.cinemascope.gr/lotr/special/beginner/intro.shtml",
  },
  minastirith: {
    name: "Minas Tirith Forums",
    link: "http://www.minastirith.com/cgi-bin/ultimatebb.cgi?ubb=get_topic;f=20;t=000173;p=",
  },
  mith: {
    name: "mith.ru",
    link: "http://www.mith.ru/cgi-bin/yabb2/YaBB.pl?board=Arda;action=display;num=1117728438",
  },
  oe_rv: {
    name: "OE ring verse",
    link: "http://www.carlaz.com/tolkien/oe_ringverse.html",
  },
  olmer: {
    name: "tolkien.olmer.ru",
    link: "http://tolkien.olmer.ru/forums/index.php?topic=13",
  },
  ost: {
    name: "LotR OST",
  },
  persianblog: {
    name: "dunadan.persianblog.com",
    link: "http://dunadan.persianblog.com/",
  },
  planetTolkien: {
    name: "Planet-Tolkien.com",
    link: "http://www.planet-tolkien.com/board/cat/23/thread/1776/0",
  },
  ringarnas: {
    name: "Ringarnas härskare",
    link: "http://hem.passagen.se/wizard_of_illusion/tolkien/stranslations/ringv.html",
  },
  rosetta: {
    name: "Tolkien Rosetta Stone",
    link: "http://my.ort.org.il/tolkien/gandalf/html/ring/ring.html",
  },
  ru_competition: {
    name: "Конкурс переводов поэзии Толкиена, 1998 г. Заклинание кольца",
    link: "http://www.kulichki.com/tolkien/ristal/98transl/3rings.html",
  },
  saurom_lamderth: {
    name: "band Saurom lamderth - album Sombras del este (2002)",
    link: "http://www.darklyrics.com/lyrics/sauromlamderth/sombrasdeleste.html",
  },
  simb8: {
    name: "Simbelmyne #8, pp. 40 - 44",
  },
  slideshare: {
    name: "Ring Verse Multilanguage on Slideshare",
    link: "http://www.slideshare.net/Jonatan7BR/the-ring-verse-multilanguage",
  },
  sotomayor: {
    name: "Sylvia Sotomayor's site of Kélen",
    link: "http://www.terjemar.net/rings.php",
  },
  tech_me: {
    name: "Technology in Middle-Earth",
    link: "http://flyingmoose.org/tolksarc/theories/metech.htm",
  },
  theonering: {
    name: "theonering.com",
    link: "http://theonering.com/viewtopic2.php?t=58075",
  },
  toki_pona: {
    name: "Toki Pona site",
    link: "http://tokipona.esperanto-jeunes.org/text/ring.html",
  },
  tolkien_cz: {
    name: "Jeden Prsten vládne vśem - 100x jinak",
    link: "http://www.tolkien.cz/clanky/clanky.php?cl=299&rubrika=jazyk",
  },
  tolklang: {
    name: "TolkLang, ElfLing",
    link: "http://tolklang.quettar.org/",
  },
  torre: {
    name: "Torre Shay",
    link: "http://www.torreshay.blogger.com.br/2004_11_01_archive.html",
  },
  translations: {
    name: messages.lotr_printed,
  },
  turbine: {
    name: "The LotR Online Community",
    link: "http://forums.lotro.turbine.com/showthread.php?t=2108",
  },
  utenti: {
    name: "utenti forum ?",
  },
  vt13: {
    name: "Vinyar Tengwar #13, pp. 13 - 15",
  },
  wikia: {
    name: "LotR Wikia",
    link: "http://lotr.wikia.com",
  },
  wiki_ast: {
    name: "Asturian Wikipedia",
    link: "https://ast.wikipedia.org/wiki/The_Lord_of_the_Rings",
  },
  wiki_ia: {
    name: "Interlingua Wikipedia",
    link: "https://ia.wikipedia.org/wiki",
  },
  wiki_la: {
    name: "Latin Wikipedia",
    link: "https://la.wikipedia.org/wiki/The_Lord_of_the_Rings",
  },
  wiki_sv: {
    name: "Swedish Wikipedia",
    link: "https://sv.wikipedia.org/wiki/Den_enda_ringen",
  },
  wilwarinart: {
    name: "wilwarinart.com.ar",
    link: "http://www.wilwarinart.com.ar/Quenya3.htm",
  },
  wmigurok: {
    name: "WMIGUROK Portal Fantasy",
    link: "http://www.wmigurok.friko.pl/ring.php",
  },
  zbihniew: {
    name: "Zbihniew ring verses (PDF)",
    link: "http://zbihniew.krasl.cz/lingua/rings/rings.pdf",
    // other address (also dead): www.ring-verses.w.pl
  },
  zhaaburi: {
    name: "In the Shadow of Elvish – The Black Speech and Orcish",
    link: "https://zhaaburi.wordpress.com/ring-verses/",
  },
});
