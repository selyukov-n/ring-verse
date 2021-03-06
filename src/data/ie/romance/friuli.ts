import { sources } from "../../sources";
import { make } from "../../utils";

const eld = (name: string) => `${name} [${sources.eldalie}]`;

export const friuli = make({ language: "fru", input: "0.13.0" }, {
  290: {
    author: eld("Elviel"),
    book: ["F-1", 104],
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
    book: ["F-2", 104],
    content: `Tre anei al re dai Elfi sot il cil che lus,
Siet ai princips dai Nanus in tas lor rochis di piere,
Nûf ai Omps Mortai che la marumite muart a spiete,
Un pal Scur Re siarat in tal palaz real neri.
In ta tiere di Mordor, indulà che l'ombrene nere a ven jù,
Un anel par domeajus, un anel par cjatajus,
un anel par brincajus e in tal scur incjadenajus,
in te tiere di Mordor, indulà che l'ombrene scure a ven jù.`
  },
});
