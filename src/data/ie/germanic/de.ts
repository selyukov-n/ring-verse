import { book, make } from "../../utils";
import { sources } from "../../sources";

const elbenwald = (name: string) => `${name} [${sources.elbenwald}]`;

const de = make({ language: "de" }, {
  64: {
    input: "0.2.0",
    book: book("G-1", 55),
    author: "Ebba Maria von Freymann",
    content: `Drei Ringe den Elbenkönigen hoch im Licht,
Sieben den Zwergenherrschern in ihren Hallen aus Stein,
Den Sterblichen, ewig dem Tode verfallen, neun,
Einer dem Dunklen Herrn auf dunklem Thron
Im Lande Mordor, wo die Schatten drohn.
Ein Ring, sie zu knechten, sie alle zu finden,
Ins Dunkel zu treiben und ewig zu binden
Im Lande Mordor, wo die Schatten drohn.`
  },

  141: {
    input: "0.7.0",
    name: "дословный перевод ?",
    author: "Thomas Hahn",
    book: book("G-3", 56),
    content: `Drei Ringe den Elbenkönigen unter dem Himmel,
Sieben den Zwergenherrschern in ihren Hallen aus Stein,
Neun den Sterblichen, denen der Tod bestimmt ist,
Ein Ring dem Dunklen Herrscher auf seinem dunklen Thron
Im Lande Mordor, wo die Schatten sind.
Ein Ring um über sie zu Herrschen, Ein Ring um sie zu finden,
Ein Ring um sie zu holen und in der Dunkelheit zu binden
Im Lande Mordor, wo die Schatten sind.`
  },
  165: {
    input: "0.7.0",
    source: sources.hfilippo,
    author: "H.Flippo",
    book: book("G-2", 56),
    content: `Drei Ringe den Elbenkönigen unter dem Himmel,
Sieben den Zwergenherren in ihren Hallen aus Stein,
Neun den Sterblichen, ewig dem Tode verfallen,
Einer dem Dunkeln Herrn auf seinem dunkl'n Thron
Im Lande Mordor, wo die Schatten liegen.
Ein Ring, sie alle zu beherrschen, Ein Ring, sie zu finden,
Ein Ring, sie zu bringen und im Dunkeln zu binden
Im Lande Mordor, wo die Schatten liegen.`
  },

  211: {
    input: "0.8.0",
    name: "диалект восточной Австрии, юж. Burgenland, окр. Oberwart",
    book: book("G-oa", 65),
    author: "Matthias List",
    content: `drai ringal fia di elfnn-kejni wos untan himmll saij
sijm fia di kejni fo di zweagal in ianare schtaananan halln,
nain fia di laijt wos schteam miassnn,
aan fia dejn finstaran heascha auf sain finstaran droon,
in launt moadoaa wo di schotdnn liang,
a ring dassas bindnn duat, a ring dassas findnn duat,
a ring dassa olle zaumbringt unt in da finstda bindnn duat,
in launt moadoaa wo di schotdn liang duan`
  },

  264: {
    input: "0.11.0",
    name: "нижнебаварский диалект",
    author: "Dirk Thierbach",
    book: book("G-lb", 60),
    content: `Drei Ring hab'n de Elbenköni ob'n im Liacht
Simi de Zwerg'nkini in eanerne stoanenen Haiser
De Menschenen, immer den Toad verfoin, neine
Oana fürn schwoarzen Herrscher auf seim düstern Tron
In mordor, wos finsta is
Oa Ringal se zu knechten, se alle zua find'n
Ins Dunk'l zua treib'n und für imma zua bind'n
In mordor, wos finsta is.`
  },
  265: {
    input: "0.11.3",
    name: "Pälzisch диалект",
    author: elbenwald("Gwaeronion"),
    book: book("G-pf", 59),
    content: `Droi Ringe de Elwekönische do owwe im Licht,
Siwwe de Zwergeherrscherr in ihrn Halle aus Stää,
De Sterblische, eewisch m Tod verfalle, noin,
Ääner m Dunggle Herrn uff 'm dunggle Thron
Im Land Mordor, wu de Schadde droon.
Ään Ring, sie zu knechte, sie alle zu finne,
ins dunggel zu treiwe un ewisch zu binne
Im Land Mordor, wu de Schadde droon.`
  },
  267: {
    input: "0.11.3",
    name: "рейнский гессенский (Rheinhessisch) диалект",
    author: elbenwald(`Laurelhass Elmegil`),
    book: book("G-r", 58),
    content: `Drei Ringelscher fer de Elwegenische obbe im Lischt
Siebbe de Zweggehescher en ehre Halle aus Stoh
De Sterblische, ewisch 'm Dode verfalle noin
Onie dem Dunkle Hescher uf dunklem Thron
im Lande Modor, wo die Schatte drohn,
Oh Ring se zu kneschte, se alle zu finne,
ins Dungel zu treibe, un ewisch zu binne,
im Lande Modor, wo die Schatte drohn.`
  },

  380: {
    input: "0.15.0",
    source: sources.barrodowns,
    author: [],
    content: `Drei Ringe für die Elven-Könige unter dem Himmel,
Sieben für die Zwergherren in ihren Hallen des Steins,
Neun für sterbliche Männer verloren,
Eins für den Dunklen Herren auf seinem dunklen Thron
im Land von Mordor wo die Schattenlüge zu sterben.
Ein Ring, um über sie ganz, ein Ring zu herrschen, um sie, ein Ring zu finden,
um sie zu bringen, alle, und in der Dunkelheit binden sie
im Land von Mordor, wo die Schatten liegen.`
  },

  402: {
    input: "0.16.0",
    source: sources.tolkien_cz,
    name: "швейцарский вариант",
    author: [],
    book: ["G-sw3", 62],
    content: `Drei Ring für d Chünige vo de Elbe höch obe im Liecht,
Siebe für Zwärgeherre i irne Halle us Schtei,
De Mönsche, schtärblich wie si sii, dene gits nüün,
Eine für dr schwarzi Herrscher uf sim schwarze Throon,
im Land vo Mordor, wo di dunkle Schatte sii
ä Ring, für sie knächte, sie alli z finge
Itz Dunkle z triibe und eewig z binge
Im Land vo Mordor, wie di dunkle Schatte sii`
  },
});

const de2 = make({ language: "de", input: "0.12.0" }, {
  273: {
    name: "диалект Берна (Швейцария)",
    author: elbenwald("Ankou"),
    book: book("G-sw", 61),
    content: `Drei Ringä dä Eubächönigä höch im Liecht,
Sibä dä Zwärgäherrscher i irnä Hauä us Stei,
Dä Stärblechä, ewig em Tod verfauä, nüün,
Einä am Dunklä Herrscher uf em dunklä Thron
Im Land Mordor, wo d' Schattä drohed.
ä Ring, sä z' chnächtä, sä aui z' findä,
It Dunkuheit z' tribä und ewig z' bindä
Im Land Mordor, wo d' Schattä drohed.`
  },
  275: {
    name: "южнотирольский диалект",
    author: elbenwald("Ringknechter"),
    book: book("G-t", 65),
    content: `Drei Ring in di Elbmkinig hoach im Liacht
Siame in die Zwergnherschor in ihrn holln as Stoan
in die mensch ewig zum okrotzn vorurteilt neine
Oanen im dunkln Herrschor af saien dunkln Trohn
Im lond fu Mordor wo di schottn san
Oan Ring se zu knechtn, se olle zu findn
ins dunkl zu gean und ewig zua bindn
im lond fu Mordor wo die schottn san.`
  },
  279: {
    name: "Oberpfäzisch-Bayrisch диалект",
    author: elbenwald("Chaos Master"),
    book: book("G-opb", 61),
    content: `Drei Ringe für die Elbmköniche droom im Licht,
Siem für die Zwerngherscher in ihre Halln as Staa,
Für die Sterblichen, ewich m Dode vafalln, neun,
Oaner fürn dunkln Herrn am dunkln Dhron.
Im Land Mordor, wou die Schattn drohn.
Oi Ring sie zu Knechten, sie alle zu fiener,
Ins Dunkl zu dreim, und ewich zu bindn.
Im Land Mordor wou die Schatn drohn.`
  },
});

export const list = [
  de,
  de2,
];
