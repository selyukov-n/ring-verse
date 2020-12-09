import { sources } from "../../sources";
import { book, fromLotR, make } from "../../utils";

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

const pol300 = make({ language: "pol", input: "1.0" }, {
  438: {
    book: ["P-3", 42],
    name: fromLotR(),
    author: "Tadeusz Andrzej Olszański",
    content: `Trzy Pierścienie dla królów elfickich pod niebem jasnym,
Siedem dla krasnoludzkich władców we dworach kamiennych,
Dziewięć dla ludzi, którym śmierć jest sądzona,
Jeden - Czarnemu Władcy na czarnym tronie
W Mordorze, ziemi, gdzie Ciemność zaległa,
Jeden, by nimi władać, Jeden by je znaleźć,
Jeden, by je zgromadzić i wszystkie skrępować
W Mordorze, ziemi, gdzie Ciemność zaległa.`
  },
  439: {
    book: ["P-5", 44],
    name: "гекзаметр",
    author: "Antoni Goldstein",
    content: `Trzy królóm elfów pierścienie, co pod nieb mieszkają skłonem,
Siedem dla władców krasnali w głębi ich pałaców skalnych,
Dziewięć dla ludzi śmiertelnych, którym jest umrzeć sądzone,
Jeden dla Czarnego Władcy na jego tronie czarnym
W kraju Mordoru, kędy Cieniów zaległy tonie.
Jeden, by wszystkimi rządzić, Jeden, by wszystkie odszukać,
Jeden, by wszystkie odnaleźć i powiązać je w mrokach
W kraju Mordoru, kędy Cieniów zaległy tonie.`
  },
  440: {
    book: ["P-6", 44],
    author: "Andrzej Sawicki",
    content: `Trzy pierścienie dla królów elfów, co lasem władają,
Dla władców krasnoludów w ich podziemiach - siedem,
Dziewięć dla królów ludzi, tych, co umierają,
A dla Władcy Ciemności Pierścień Jeden.
W krainie Mordor, kędy leżą cienie.
Jeden, by nimi rządzić, Jeden, by je odszukać,
Jeden, by je zgromadzić i mrokami zbrukać
W krainie Mordor, kędy leżą cienie...`
  },
  441: {
    book: ["P-7", 45],
    author: "Turin Turambar",
    content: `Trzy pierścienie dla władców ludu pod gwiazdami,
Siedem dla Krasnoludów w ich sałach z kamienia,
Dziewięć dla synów ludzkich, dzieci przeznaczenia,
Jeden dla władcy kraju osnutego mgłami,
Tam, gdzie światło wszelkie przez mrok zwycziężne,
Jeden rządzący resztaą. Jeden potężniejszy,
Aby znaleźć i zebrać całe grono mniejszych,
Tam, gdzie światło wszelkie przez mrok zwycziężne.`
  },
  442: {
    book: ["P-8", 45],
    author: "Faelwen i Sarnond",
    content: `Trzy Pierścienie dla Elfów, którzy pod niebem gwiezdnym królują,
Siedem Krasnoludów władcom z ich komnat w gór koronie,
Dziewięć Pierścieni dla ludzi, co śmierci wypatrują,
Jeden Pierścień dla pana Mrocznego, co na czarnym tronie
W ziemi zwanej Mordor, gdzie zło cienem zlega.
Jeden Pierścień, by rządzić Wszystkimi, Jeden, by Je odnaleźć,
Jeden, by zgromadzić Wszystkie i w Mroky w jedności utrwalić
W ziemi zwanej Mordor, gdzie zło cienem zlega.`
  },
  443: {
    book: ["P-9", 46],
    author: ["Katarzyna Staniewska", "'Elring'"],
    content: `Królowie elfów potrójnie pierścienni,
Zaś krasnoludom śni si&$281; sen siedmisty...
Dziewięcioraczą się pilnie śmiertelni;
Jeden - dla Władcy na tronie czernistym
W kraju Mordoru, gdzie się cień bezczelni!
Jeden, by wszystkie wspierścienić jednotą
I by pojednać spierścieniałe złoto
W kraju Mordoru, gdzie się cień bezczelni!`
  },
  444: {
    book: ["P-10", 46],
    author: "Nolimon",
    content: `Trzy Pierścienie podniebnych państw Elfów rządcom przeznaczone,
Siedem Ojcom Krasnali - podziemne ich włosci,
Dziewięć wielkim Ludziom, których serca śmiercią naznaczone,
Jeden dla Nieprzyjaciela na tronie Ciemności
W Czarnym Kraju, pośród mrocznych cieni.
Jeden Pierścień by władać wszystkimi, Jeden by je znaleźć,
Jeden Pierścień by usidlić wszystkie i w pomroce scalić
W Czarnym Kraju, pośród mrocznych cieni.`
  },
  445: {
    book: ["P-11", 45],
    author: "Númenelen",
    content: `Potrójne złoto elfim panom na dłonie,
Siedem srebr dla krasnoludzkich ojców w koronie,
Dziewięć obrąk ludziom, kt&#oacute;rych śmierć na tronie
W kraju bezświatła, w cienistym Mordorze.
Jeden jest wszystkich królem, by znaleźć; Jedyny
Zgromadzi, uciemnięży je czarnymi liny
W kraju bezświatła, gdzie nie wstają zorze.`
  },
  446: {
    book: ["P-s", 47],
    variant: "силезский диалект",
    author: "Ryszard Derdziński (силезск. Rychat Derdźiński)",
    content: `Tři Pješčůnki krůlům Elbůw pod modrym ńybym,
Aže Śedym do Cwergowych Půnůw we grubach kamjynych,
Dźewyńć do Śmjertelnych Ludźi keři sům śmjertce podlygli
Jedyn do Půna Ćmoka na úonygo čornym zeslu.
We Mordoru tyj dźedźińe kaj śe ćimy zlygúy
Jedyn Pješčůnek coby inkše znojść, Jedyn coby rešta reskjyrować
Jedyn Pješčůnek coby inkše pokuplować i we ćmoku rozym je skrymplować
We Mordoru tyj dźedźińe kaj śe ćimy zlygúy.`
  },
  447: {
    book: ["P-hhs", 48],
    variant: "хип-хоп сленг :)",
    author: "Malan",
    content: `Trzy błyskotki dla kłaopuchych co pod niebem jarają
siedem dla karłó w ich podziemnej rozkmince
dziewięć dla naszych ziomków co na życie srają
jeden dla yooo mana w jego gitmelince
w Mordoru ziemi gdzie cieniste są opcje
jeden by wszystkie ogarnać, jeden by wszystkie wyczaić
jeden by nie obsrać makowca i w ciemności zagaić
w Mordoru ziemi gdzie cieniste są opcje`
  },
});

export default [
  pol_drops,
  pol,
  pol300,
];
