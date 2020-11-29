import { sources } from "../sources";
import { book, make } from "../utils";

const pol_drops = make({ language: "pol", input: "0.1.5" }, {
  35: {
    name: "официальная версия",
    author: "Jerzy Łoziński",
    book: book("P-2", 42),
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
    book: book("P-1", 38, "но там немного другая версия"),
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

const pol = make({ language: "pol" }, {
  138: {
    input: "0.7.0",
    author: ["Marek Gumkowski", "Paulina Braiter"],
    book: book("P-4a", 43),
    content: `Dla elfich władców pod niebem jasnym są Trzy Pierścienie,
Dla krasnoludzkich w podziemiach królów Pierścieni Siedem,
Dziewięć dla ludzi - tych ostatecznym śmierć przeznaczeniem,
Dla Władcy Mroku na czarnym tronie jest Pierścien Jeden
W Krainie Mordor, w wieczystej nocy spowitej cienie.
Jeden Pierścień, by innymi władać, czarem je opętać,
Jeden, by wszystkie zebrać i w ciemnościach spętać
W Krainie Mordor, w wieczystej nocy spowitej cienie.`
  },
  178: {
    input: "0.8.0",
    author: "zbihniew",
    content: `Trzy pierścienie elfów królom pod niebem,
Siedem krasnoludów władcom w salach z kamienia,
Dziewięć śmiertelnym ludziom przeznaczonym by umrzeć,
Jeden dla Mrocznego Pana na jego mrocznym tronie
W Ziemi Mordoru gdzie Cienie zalegają.
Jeden pierścień by rządzić wszystkim, Jeden pierścień by odnaleźć wszystkie,
Jeden pierścień by sprowadzić je wszystkie i w ciemności połączyć
W Ziemi Mordoru gdzie Cienie zalegają.`
  },
  405: {
    input: "0.16.0",
    source: sources.wmigurok,
    author: "Marek Gumkowski",
    book: ["P-4", 43],
    content: `Dla elfich władców pod niebem jasnym trzy są pierścienie,
Dla krasnoludzkich podziemnych królów pierścieni siedem,
Dziewięć dla ludzi - tych ostatecznym śmierć przeznaczeniem,
Dla władcy mroku na czarnym tronie jest pierścien jeden
W krainie Mordor, gdzie wiecznej nocy zaległy cienie.
Pierścień jedyny, by władać wszystkimi, czarem je opetać,
Pierścień jedyny, by wszystkie zgromadzić i w ciemnościach spętać
W krainie Mordor, gdzie wiecznej nocy zaległy cienie.`
  },
});

export default [
  pol_drops,
  pol,
];
