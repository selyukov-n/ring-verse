import { IDerzhansky } from "../authors";
import { book, make } from "../utils";

export const akk = make({ language: "akk" }, {
  89: {
    input: "0.2.5",
    name: "старовавилонский диалект",
    book: book("A", 203),
    author: IDerzhansky,
    comments: ["Orig. published in Tyalië Tyelelliéva #6, pp. 7-8 (with cuneiform)."],
    content: `šaláš unqátim ana šarrí *nimrí ša ultu šamê namurratsunú,
sibettum ana bélí *kazádáya in ékallátim šapal šadêm,
tišettum ana márí awílútim ša mútum ixxazú carratsunú,
ište'at unqum ana bélim eþêm, a šášiná a qátim nadêm
in mátim eþêm, in mát marri dúrim ašar našûmatú šímatsunú.
ište'at unqum kálšiná a macá, ište'at unqum a bêlišiná,
ište'at unqum kálšiná a nacá ú in eþûtim ecélišiná,
in mátim eþêm, in mát marri dúrim ašar našûmatú šímatsunú.`
  }
});
