import { sources } from "../../sources";
import { fromLotR, make } from "../../utils";

const es = make({ language: "es", input: "0.2.0" }, {
  61: {
    name: fromLotR(),
    book: ["S-1", 82],
    author: ["Matilde Horne", "Luis Domènech"],
    content: `Tres anillos para los Reyes Elfos bajo el cielo.
Siete para los Señores Enanos en casas de piedra.
Nueve para los Hombres Mortales condenados a morir.
Uno para el Señor Oscuro, sobre el trono oscuro
en la Tierra de Mordor donde se extienden las Sombras.
Un Anillo para gobernarlos a todos. Un Anillo para encontrarlos,
un Anillo para atraerlos a todos y atarlos en las tinieblas
en la Tierra de Mordor donde se extienden las Sombras.`
  },
  62: {
    name: fromLotR("?"),
    book: ["S-4", 83],
    author: ["Josê Tarragô", "Alejandro Murgia"],
    content: `Tres Anillos para los Reyes Elfos bajo la bôveda celeste.
Siete para los Señores Enanos en sus pêtreos recintos.
Nueve para los Hombres Mortales destinados a la muerte.
Uno para el Señor Oscuro sobre su trono sombrîo
en la Tierra de Mordor donde las Sombras se extienden.
Un Anillo para gobernarlos. Un Anillo para encontrarlos,
un Anillo para atraerlos y en las tinieblas atarlos
en la Tierra de Mordor donde las sombras se extienden.`
  }
});

const es2 = make({ language: "es" }, {
  140: {
    input: "0.7.0",
    author: "Jonathan Avidan",
    book: ["S-2", 82],
    content: `Tres anillos para los Reines Elficos bajo el cielo,
Siete para los Principes de Enanos en sus salones de piedra,
Nueve para los Mortales que morirán,
Una para el Principe Tenebroso oscuro sobre su silla oscura,
En el Reinado de Mordor donde están las neblinas.
Un anillo para dominarlos, Un anillo para encontrarlos,
Un anillo para traerlos y en la oscuridad ligarlos
En el Reinado de Mordor donde están las neblinas.`
  },
  241: {
    input: "0.9.0",
    variant: "SPangilish, калифорнийский англо-испанский",
    author: `Randalllin [${sources.planetTolkien}]`,
    book: ["S-s", 85],
    content: `Tres Ringos por la Elveno-kingas baja la sky,
Siete por el Dwarf-lords en their hallas de stone,
Nueve por la Mortal Men doomed a die,
Uno por el Dark Lord en el dark throne
En la Land de Mordor quien la Shadows lie.
Uno Ringo a rule them all, Uno Ringo a find them,
Uno Ringo a bring them all y en la darkness bind them
En la Land de Mordor Quien la Shadows lie.`
  },

  309: {
    input: "0.13.0",
    author: [],
    content: `Tres anillos para los reyes elfos bajo el cielo
Siete anillos para los señores enanos en sus casas de piedra
Nueve anillos para los hombres mortales condenados a morir
Uno para el Señor Oscuro en su trono oscuro
En la tierra de Mordor donde habitan las tinieblas
Un anillo para dirigirlos atodos, un anillo para encontrarlos
Un anillo para atraerlos y en las tinieblas atarlos
En la tierra de Mordor donde habitan las tinieblas.`
  },

  461: {
    input: "1.0",
    author: [],
    book: ["S-3", 83],
    content: `Tres anillos para los Elven-reyes debajo del cielo,
Siete para los Enano-señores es sus pasillos de la piedra,
Nueve para los hombres mortales condenaron morir,
Uno para el señor oscuro en su trono oscuro
En la tierra de Mordor en donde mienten las sombras.
Un Anillo para gobernarlos todos, Un Anillo para encontrarlos,
Un Anillo para traerlos todos y en oscuridad los atan
En la tierra de Mordor en donde mienten las sombras.`
  },
});

const others = make({}, {
  252: {
    language: "arg",
    input: "0.10.5",
    author: [],
    book: ["S-a", 84],
    content: `Tres aniellos t’os Reis Elfos baxo o zielo,
Siete t’os Siñors Nanos en casa de piedra,
Nueu t’os Ombres Mortals condenaus a morir,
Uno t’o siñor Fosco, sobre o trono escuro
En a Tierra de Mordor an s’ixemenan as Güembras
Un Aniello ta gubernar-los a toz,
Un Aniello ta trobar-los,
Un Aniello ta atrayer-los a toz y piar-los en as tiniebras
En a Tierra de Mordor an s’ixemenan as Güembras`
  },
  253: {
    language: "ast",
    input: "0.10.5",
    variant: "леонский ?",
    author: [],
    book: ["S-l", 84],
    content: `Tres aniellos pa los Reis Elfos baxu'l cieu,
Sietë pa los Siñores Enanos en casas de piadra,
Nuevë pa los Homes Mortales condenaos a morrire,
Unu pa'l Siñor Escuru, sobru'l tronu escuru
na Tierra de Mordor ú se extiendense las Sombras.
Un Aniellu pa gobernalos a toos,
Un Aniellu pa alcontralos,
un Aniello pa atrayelos a toos ya ataros nas tinieblas
na Tierra de Mordor ú extiendense las Sombras.`
  },

  491: {
    language: "ast",
    input: "1.0.3",
    source: sources.wiki_ast,
    author: [],
    content: `Trés Aniellos pa los Reis Elfos embaxo'l cielu.
Siete pa los Señores Nanos nos sos palacios de piedra.
Nueve pa los Homes mortales, condergaos a morrer.
Ún pal Señor Escuru, sobro'l tronu escuru
na Tierra de Mordor au s'estienden les Solombres.
Un Aniellu pa gobernalos a toos.
  Un Aniellu p'afayalos.
Un Aniellu p'atrayelos a toos
  y arreyalos nes borrines,
na Tierra de Mordor au s'estienden les Solombres.`
  },
});

export const list = [
  es,
  es2,
  others,
];
