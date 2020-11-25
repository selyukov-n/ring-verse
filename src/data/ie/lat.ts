import { book, make } from "../utils";
import { ME } from "../authors";

// āăēĕīĭōŏūŭ
export const lat = make({ language: "lat" }, {
  10: {
    author: ME,
    book: book("L-9", 194),
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
    book: book("L-1", 190),
    content: `Tres anellōrum sub diuo regĭbus altis,
Elfossas septem domĭnis habitantĭbus aulas,
Et nouem eis quorum fatumst occumbĕre mortem,
Unĭcus autem Atro Domĭno, qui in sede resurget
Mordŏre terra illa, qua sunt caligĭnis umbrae.
Unus qui moderētur eis, et qui appĕtat omnis,
Et qui ad sese addūcat eos tenĕbrisque capistret
Mordŏre terra illa, qua sunt caligĭnis umbrae.`
  },
});
