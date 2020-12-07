import { sources } from "../../sources";
import { book, map } from "../../utils";

const rh = map({
  323: {
    variant: "сурмиранский вариант, Surses и Val Alvra",
    author: "Isemboldo Bolgeri",
    book: "R-2",
    content: `Treis Anels agl rètg dallas dialas sot igl tschiel tgi resplenda,
Set agls prencis digls nanigns ainten lour fortezza da crap,
Nov agls carstgangs mortals tgi spetga tresta mort,
Egn per igl signour dalla stgiradetna saro aint igl palaz grevaditsch
Ainten la tera da Mordor, noua tgi la sumbreiva neira croda.
En Anel per igls dominar, en Anel per igls cattar,
En Anel per igls captivar ed igls ancadanar aint igl stgeir,
Ainten la tera da Mordor, noua tgi la sumbreiva croda grev.`
  },
  324: {
    name: "Grischun (офиц. язык Швейцарии и кантона Grigioni)",
    author: "Isemboldo Bolgeri",
    book: "R-1",
    content: `Trais Anès al retg da las dialas sot il tschiel che resplenda,
Set als prencis dals nanins en lur fortezza da crap,
Nov als umans mortals che spetga la trista mort,
In per il signur da la stgirezza serrà en il palaz grevaditsch
En la terra da Mordor, nua che la sumbriva naira croda.
In Anè per als dominar, in Anè per als chattar,
In Anè per als captivar ed als enchadanar,
En la terra da Mordor, nua che la sumbriva croda grev.`
  },
}, t => ({ ...t, language: "swi", input: "0.13.0", author: `${t.author} [${sources.eldalie}]`, book: book(t.book, 103) }));

export const list = [
  rh,
];
