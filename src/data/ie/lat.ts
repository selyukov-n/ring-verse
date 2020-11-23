import { make, makeSource } from "../utils";
import { ME } from "../authors";

export const lat = make({ language: "lat" }, {
  10: {
    author: ME,
    source: makeSource("L-9", 194),
    content: `Tres Orbes Alperegĭbus sub caelo,
Septem Pumilonĭbus in aulis saxialĭbus eōrum,
Nov' Hominĭbus Mortalĭbus, qui moritūri sunt fatalĭter,
Un' Imperatōri Umbrae in Obscūra Sede sua
In Mordōris Terra, qua Obscūra jacent.
Unus Orbis regat eos omnes et requīrat, Unus Orbis eos,
Unus Orbis eos omnes conglŏbet et conjungat in obscūro eos
In Mordōris Terra, qua Obscūra jacent.`
  },
});
