import { sources } from "../sources";
import { make, makeSource } from "../utils";

const pol_drops = make({ language: "pol" }, {
  35: {
    name: "официальная версия",
    author: "Jerzy Łoziński",
    source: makeSource("P-2", 42, sources.drops),
    content: `Trzy Pierścienie elfowym władcom szlachetnego miana,
Siedem krzatów monarchom w kamiennych sal koronie,
Dziewięć ludzkim istotom, którym śmierć pisana,
Jeden dla Władcy Ciemności, co trwa na mrocznym tronie
W Mordorze, moc którego zwycięży nie chciana.
Ten Jedyny, by rządzić wszystkimi, ten Jedyny, by wszystkie odnależć,
Ten Jedyny, by zebrać je wszystkie i w ciemności zespolić więzami
W Mordorze, moc którego zwycięży nie chciana.`
  },
  36: {
    name: "официальная версия",
    author: "Maria Skibniewska",
    source: {
      ...makeSource("P-1", 38, sources.drops),
      other: ["но там немного другая версия"],
    },
    content: `Trzy pierścienie dla królów Elfów pod otwartym niebem,
Siedem dla władców krasnali w ich kamiennych pałacach,
Dziewięć dla śmiertelników, ludzi śmierci podległych.
Jeden dla Władcy Ciemności na czarnym tronie
W Krainie Mordor, gdzie zaległy cienie.
Jeden, by wszystkimi rządzić, Jeden, by wszystkie odnaleźć,
Jeden, by wszystkie zgromadzić i w ciemności związać
W Krainie Mordor, gdzie zaległy cienie.`
  },
  37: {
    name: "дословный перевод",
    author: "-",
    source: { main: sources.drops },
    content: `Trzy pierścienie dla Elfowych królów pod niebem,
Siedem dla Lordów Krasnoludów (Krzatów) w ich zalach z kamienia,
Dziewięć dla śmiertelnych ludzi skazanych na śmierć,
Jeden Pierścień dla Ciemnego Lorda na jego ciemnym tronie
W krainie Mordor, gdzie leżą cienie.
Jeden Pierścień by rządiś nimi wszystkimi,
Jeden Pierścień by je odnaleźć,
Jeden Pierścień sprowadziś je wszystkie,
i w ciemnościah je połączyć
W krainie Mordor, gdzie leżą cienie.`
  },
});

export default [
  pol_drops,
];
