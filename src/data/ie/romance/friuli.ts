import { sources } from "../../sources";
import { book, make } from "../../utils";

const eld = (name: string) => `${name} [${sources.eldalie}]`;

export const friuli = make({ language: "fru", input: "0.13.0" }, {
  290: {
    author: eld("Elviel"),
    book: book("F-1", 104),
    content: `Tre Anei ai Re dai Elfos sot el cîl che splent,
Siet ai Princips dai Nanos in ta lôrs grotis di piere,
Nuf ai Omps Mortai che la triste muart i a spiete,
Un par el Scur Paron siarat in ta so oscur palaĉ
In ta Tiare di Mordor, in dulà che e cale la nere ombrene.
Un Anel par domaiu, Un Anel par ĉjataiu,
Un Anel par ĉjapaiu e in tal scûr inĉjatenaiu,
In ta Tiare di Mordor in dulà che cale la scure ombrene.`
  },
  291: {
    variant: "равнинный диалект, зона Аквилеи, Сарвиньян",
    author: eld("rosieposie"),
    book: book("F-2", 104),
    content: `Tre anei al re dai Elfi sot il cil che lus,
Siet ai princips dai Nanus in tas lor rochis di piere,
Nûf ai Omps Mortai che la marumite muart a spiete,
Un pal Scur Re siarat in tal palaz real neri.
In ta tiere di Mordor, indulà che l'ombrene nere a ven jù,
Un anel par domeajus, un anel par cjatajus,
un anel par brincajus e in tal scur incjadenajus,
in te tiere di Mordor, indulà che l'ombrene scure a ven jù.`
  },
  292: {
    variant: "gradese диалект",
    author: eld("rosieposie"),
    content: `Tre aneli ai re dei Elfi soto il sielo che riluse
Sete ai principi dei Nani in te le loro roche de piera,
Nove ai Omoni Mortali che la triste morte speta,
Un pel Oscuro Sior serao intel palasso nero.
Intela tera de Mordor, indola l'ombra nera vien zò.
Un anelo per domali, un anelo per catali,
un anelo per grampali e intel scuro incatenali,
intela tera de Mordor, indola l'ombra scura vien zò.`
  },
});
