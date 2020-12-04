import { book, fromLotR, make } from "../utils";
import pic217 from "../pic/217heb.png";
import pic218 from "../pic/218heb.png";
import pic231 from "../pic/231heb.jpg";
import pic232 from "../pic/232heb.jpg";
import pic502 from "../pic/502heb.png";

const pic = (image: any) => ({
  type: "image" as const,
  image,
});

const heb = make({ language: "heb" }, {
  217: {
    input: "0.7.0",
    author: "Yaron Tausky",
    book: book("H-3", 167),
    content: [
      pic(pic217),
    ]
  },

  231: {
    input: "0.8.4",
    name: fromLotR(),
    book: book("H-1", 165),
    author: "Ruth Livnit",
    content: [
      {
        name: "кириллица",
        text: `Шалош табаот ле-мальхэй б'нэй лейлот бимромам,
Шэва лин'сихэй гамадим бэтирот эвэн цэль,
Тэйша ливнэй hа-тмута, йэлидэй hа-адам,
Ахат ле-сар офэль аль кис'о hа-афэль
Бэ-мамлехэт Мордор ба hа-цэль ло нирдам.
Табаат лимшоль бам у-леатрам,
Табаат лимшох бам у-лекашрам,
Бэ-мамлехэт Мордор ба hа-цэль ло нирдам.`
      },
      pic(pic231),
    ]
  },
  232: {
    input: "0.8.4",
    author: "Uriel Ofek",
    content: [
      {
        name: "кириллица",
        text: `Шалош табаот ле-мальхэй алафим тахат шмэй hа-тлалим
Шэва ле-сарэй гамда'им би-н'карот 'отот-цэль
Тэйша ли-внэй hа-адам, б'нэй тмута умлалим
Ахат ле-сар hа-офэль аль кис'о hа-афэль
Бэ-эрэц Мордор, шам ровцим hа-цлалим.
Табаат ахат лимшоль бэ-хулан, табаат ахат лемац'ан,
Табаат ахат леhашив эт кулан, ба-офель лехавлан,
Бэ-эрэц Мордор, шам ровцим hа-цлалим.`
      },
      pic(pic232),
    ]
  },

  480: {
    input: "1.0.2",
    author: "Emanuel Lottem",
    name: fromLotR(),
    book: ["H-2", 166],
    content: 'TODO', // TODO
  },

  502: {
    input: "1.1",
    author: [],
    content: [
      {
        type: "image",
        image: pic502,
      },
      {
        text: `Shelvesh teb’evet lemleky alepyem thet shemy hetlelyem,
Sheb’ leshery gemdeym bheykely sel’e,
Tesh’ lebney hadem, beny temveth henyedvenyem lemvet
Ahet lesher havepl ’el keysav hapel
Barets Mevredver, shem revbetseym hetselleym.
Teb’et ahet lemshevl bekveln, teb’et ahet lemtesan,
Teb’et ahet lhesheyb at kevlen, bapelh lekbeln,
Barets Mevredver, shem revbetseym hetselleym.`
      }
    ]
  },
});

const old = make({ language: "hbo" }, {
  218: {
    input: "0.7.0",
    author: "Yuval Welis",
    book: book("OH", 199),
    content: [
      pic(pic218),
    ]
  },
});

export const list = [
  heb,
  old,
];
