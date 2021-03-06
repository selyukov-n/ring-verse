import { JAvidan, ME } from "../authors";
import { sources } from "../sources";
import { make, makeName } from "../utils";

// āăēĕīĭōŏūŭ
const lat = make({ language: "lat" }, {
  10: {
    author: ME,
    book: ["L-9", 194],
    input: "0.0.2",
    content: `Tres Orbes Alperegĭbus sub caelo,
Septem Pumilonĭbus in aulis saxialĭbus eōrum,
Nov' Hominĭbus Mortalĭbus, qui moritūri sunt fatalĭter,
Un' Imperatōri Umbrae in Obscūra Sede sua
In Mordōris Terra, qua Obscūra jacent.
Unus Orbis regat eos omnes et requīrat, Unus Orbis eos,
Unus Orbis eos omnes conglŏbet et conjungat in obscūro eos
In Mordōris Terra, qua Obscūra jacent.`
  },

  50: {
    author: "Przemyslaw Sakrajda",
    input: "0.2.0",
    comments: [{ type: "warning", text: "есть ошибки?" }],
    content: `Tres Anŭli causa Elfōrum Regum sub divo,
Septem causa Gnomōrum Dominōrum in lapidĭbus aulis regis,
Novem causa Mortālis in potestāte pro exitii,
Unus causa Obscūri Eri in suo throno,
In Terra Mordor ubi umbrae sternĕrunt.
Unus Anŭlus ut omnĭbus regĕre, Unus Anŭlus ut omnes invenīre.
Unus Anŭlus ut omnes conquirĕre et in obscurĭte coniungĕre
In Terra Mordor ubi umbrae sternĕrunt.`
  },
  76: {
    author: "Steinar Midtskogen",
    input: "0.2.0",
    book: ["L-1", 190],
    content: `Tres anellōrum sub diuo regĭbus altis,
Elfossas septem domĭnis habitantĭbus aulas,
Et nouem eis quorum fatumst occumbĕre mortem,
Unĭcus autem Atro Domĭno, qui in sede resurget
Mordŏre terra illa, qua sunt caligĭnis umbrae.
Unus qui moderētur eis, et qui appĕtat omnis,
Et qui ad sese addūcat eos tenĕbrisque capistret
Mordŏre terra illa, qua sunt caligĭnis umbrae.`
  },

  146: {
    input: "0.7.0",
    book: ["L-5", 192],
    author: JAvidan,
    comments: [{ type: "error", text: "много сомнительных мест" }],
    content: `Tres anŭli ad Elf-reges sub caelum,
Septa ad Pumĭlos-migister in suum domum petrae,
Nova ad Mortalium-home que sunt moritūrum,
Unus ad Obscūrum Migistrem super suum obscūrum tronum
In terram Mordris qua umbrae cubātis.
Unus anŭlus gubernāre eōrum totum, unus anŭlus encontrāre eōrum,
Unus anŭlus trahĕre eōrum totum et in calĭgum ligāre eōrum
In terram Mordris qua umbrae cubātis.`
  },
  166: {
    input: "0.7.0",
    book: ["L-7", 193],
    source: sources.hfilippo,
    author: "H.Filippo ?",
    content: `Tres anŭli pro regĭbus Quendōrum sub caelo,
Septem pro domĭnis Nanōrum in regia lapidea eōrum,
Novem pro Viris Mortālis mori condemnātis,
Unus pro domĭno nefario in solio obscūro eius
In terra Mordoris ubi umbrae iacent.
Unus Anŭlus ea omnia superāre,
Unus Anŭlus ea invenīre,
Unus Anŭlus ea omnia collocāre
Et ea in tenĕbris nectĕre,
In terra Mordoris ubi umbrae iacent.`
  },

  183: {
    input: "0.8.0",
    variant: "имитация средневековой латыни ???",
    author: "Klaus Scholl",
    book: ["L-3", 191],
    content: `Terni Annuli Regibus Nympharum subter Coelo,
Septeni Ducibus Pumilorum in Cameris suis lapideis,
Noveni Hominibus mortalibus moriendi praedamnatis
Singulus Tyranno atro in Solium atrum
in Regione Mordoris, qua Umbrae sunt.
Singulus Annulus ad mittendum sub Jugum omnes alteros, singulus Annulus ad vestigandum alteros,
Singulus Annulus ad congerendum omnes alteros et ad attinendum eos in Tenebris
in Regione Mordoris, qua Umbrae sunt.`
  },
  193: {
    input: "0.8.0",
    author: "robocap",
    book: ["L-2", 190],
    content: `Tres Elphorum pro regibus sub coelo anuli
Septem Nanorum pro dominis in aulis suis lapideis,
Novem pro hominibus ad mortem destinatis,
Unus Nigro pro Domine in nigro solio assidente
In Mordoria terris ubi sternunt Umbrae.
Quidam anulus ad dominandum in omnes eos, quidam ad eos reperendos,
Quidam ad arripiendum omnes et in tenebris eos conicendos
In Mordoria terris ubi sternunt Umbrae.`
  },

  247: {
    input: "0.9.2",
    author: "Robert Barulich",
    book: ["L-4", 191],
    content: `Annuli tres regibus patente sub divo elvanis,
Septem heris nanorum saxea incolentibus atria,
Novem mortalibus morti fato sponsis,
Unus atro atra in aede Domino
In terra Mordore qua manent umbrae:
Annulus Unus ceteros omnes qui regat,
Unus iis qui inveniat,
Unus illatos qui in tenebris cunctos vinciat
In terra Mordore qua manent umbrae.`
  },

  262: {
    input: "0.11.0",
    author: [],
    book: ["L-8", 193],
    content: `Tres anuli regibus elfibus sub caelo,
Septem dominis pumilis in suo palatiis ex lape,
Novem hominibus mortalibus, qui morior debent
Unus Domino Nigro super suo nigro sede;
In Terra Negra, ubi umbrae extendent.
Unus ut omnes regnare, unus ut omnes invenire
Unus ut omnes colliger et in tenebris vincire
In Terra Negra, ubi umbrae extendent.`
  },

  312: {
    input: "0.13.0",
    author: "Deldúwath, or Earindilyon [theonering.com]",
    book: ["L-6", 192],
    content: `Tres Anuli regibus Alfonum sub caelo,
Septem Dominis Nanorum in lapidis aulis,
Novem Hominibus Mortalibus ad morendum damnatis,
Unus Domino Obscuro in solio obscuro,
In Terra Mordoris ubi Umbrae,
Unus Anulus ad eos omnes regendos,
Unus Anulus ad eos inveniendos,
Unus Anulus ad eos omnes ferendos
et eos in tenebris astringendos,
In Terra Mordoris ubi Umbrae.`
  },

  486: {
    input: "1.0.2",
    author: "Robert Fischer",
    book: ["L-12", 195],
    content: `Tres anuli pro regibus nymphorum sub caelo
Septem pro dominis nanorum in regia lapidea eorum
Novem pro mortalibus viris cuius fatum est mori
Unus pro malo domino qui in malo solio sedet
In terra umbrosi mordoris
Unus anulus qui omnibus illis imperet Unus anulus qui illosa inveniat
Unus anulus qui omnes illos collocet et in tenebris illos nectat
In terra umbrosi mordoris`
  },

  492: {
    input: "1.1",
    source: sources.wiki_la,
    author: [],
    content: `Tres Anuli Alforum Regibus sub caelo fulgente,
Septem Nanorum Dominis in arcibus ex petra,
Novem mortalibus Hominibus quibus fatum est adveniens,
Unus Atro Domino in regia sua taetra,
In Mordoris Terra, umbra descendente.
Unus Anulus ad omnes dominandos, unus ad reperiendos,
Unus ad omnes tenebris inferendos ibique vinciendos,
In Mordoris Terra, umbra descendente.`
  },

  538: {
    input: "2.3.0",
    author: [],
    source: sources.wiki_la,
    content: `Tres Annuli regibus Alfis sub caelis
Septem dominis Nanis in lapidosis domibus
Novem Mortalibus Hominibus ad necem damnatis
Unus Obscuro Domino in obscuro solio eius
In Mordoris Terra quo umbrae iacent
Unus Anulus ut omnes regat, Unus Anulus ut omnes inveniat
Unus Anulus ut omnes inducat et in tenebris obligat
In Mordoris Terra quo umbrae iacent`
  },
});

const lat2 = make({ language: "lat", input: "0.3.0" }, {
  101: {
    author: "Lalaith",
    content: `Tres anŭli pro regĭbus Albōrum sub caelo,
Nanōrum pro principĭbus in atriis saxeis septem,
Novem pro Mortalĭbus qui obĭtus damnātis,
Unusque pro Domĭno Tenebrĭco in solio suo tenebricōso
Mordŏre in terra qua umbrae sternunt.
Unĭcus anŭlus ad regnātum omnes, unĭcus anŭlus ad reperĭtum eos,
Unĭcus anŭlus ad latātum omnes, atque in tenĕbris ad lacerrĭtum eos
Mordŏre in terra qua umbrae sternunt.`
  },
  103: {
    name: "рифмованная версия",
    author: "A.Hooi",
    book: ["L-10", 194],
    content: `Sub caelo anŭli tres regĭbus Albōrum,
Lapideis in atriis septem Nanōrum eris,
Mortūris novem Mortalĭbus Virōrum,
Domĭno Atro atris unus in soliis
Mordōre in terra quo adferuntur umbrae.
Unus omnipotens et omnipetens alter
Tertius omniducens caliginōsus carcer
Mordōre in terra quo adferuntur umbrae.`
  },
  104: {
    author: "R.Alderson",
    book: ["L-11", 195],
    content: `Anŭli tres pro regĭbus Albōrum sub caelo,
Nanōrum pro principĭbus septem in atriis lapideis,
Novem pro Mortalĭbus obĭtus damnātis,
Unus pro Domĭno Atro in solio atro
Mordōre in terra sternunt qua umbrae.
Anŭlus illos regĭtum, Anŭlusque reperĭtum,
Anŭlus illos ferĭtum et in tenĕbris victim
Mordōre in terra sternunt qua umbrae.`
  },
});

const lat3 = make({
  language: "lat", input: "2.3.1",
  source: sources.dominus_anulorum,
  author: sources.dominus_anulorum.makeAuthor("Nagoda"),
}, {
  545: {
    content: `Tres Anuli sub caelo Regibus Eldaribus,
Septem in cavernis saxeis Dominis Nanis,
Novem condemnatis ad mortem Mortalibus,
Unus Domino Atro in sede atra
In Terra Mordoris ubi Umbrae iacent.
Unus Anulus omnes regere, Unus Anulus omnes invenire,
Unus Anulus omnes conferre et in tenebris vincire
In Terra Mordoris ubi Umbrae iacent.`
  },
  546: {
    name: makeName("revised", 545),
    content: `Tres Anuli sub caelo Regibus Elbicis
Septem Dominis Nanis in hypogeis ex saxo,
Novem moriendum Mortalibus damnatis,
Unus Domino Atro qui sedet in solio atro
In Terra Mordore operta Umbris
Unus Anulus eos omnes regendos, Unus Anulus eos inveniendos,
Unus Anulus eos omnes conferendos et in tenebris vinciendos
In Terra Mordore operta Umbris`
  },
});

export const list = [
  lat,
  lat2,
  lat3,
];
