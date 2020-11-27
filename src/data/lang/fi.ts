import { sources } from "../sources";
import { book, make } from "../utils";

export const fi = make({ language: "fin" }, {
  88: {
    input: "0.2.0",
    name: "из перевода ВК",
    book: book("F-1", 160),
    author: "Panu Pekkanen",
    content: `Kolme sormusta haltiakuninkaille all auringon,
seitsemän kääpiöruhtinaille kivisaleissaan,
yhdeksän ihmisille jotka vie tuoni armoton,
yksi Mustalle Ruhtinaalle valtaistuimellaan
maassa Mordorin joka varjojen saartama on.
Yksi sormus löytää heidät, se yksi heitä hallitsee,
se yksi heidät yöhön syöksee ja pimeyteen kahlitsee
maassa Mordorin joka varjojen saartama on.`
  },
  337: {
    input: "0.14.0",
    source: sources.iceland,
    name: "вост.-ботнический диалект",
    author: `Eldritch [${sources.iceland}]`,
    book: ["F-2", 160],
    content: `Fiiniä rinkuloota kolome sai komeeren isännät,
Kivikamarien kituusille seittemän oli,
Yhyreksän sai ne jokka jättää maat viheriät,
Yhren se Ruma Vallesmanni ittellänsä piti
Koristamas Möröönperän onhoosta pirttiä.
S'on aika kälyynen se yks, jolle jokaanen perso on,
Koria s'on, vaan seurauksena kohtalo maharoton -
Koristamaan Möröönperän onhoosta pirttiä.`
  },
});
