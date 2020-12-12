import { fromLotR, make } from "../../utils";

const da = make({ language: "dan", input: "0.2.0" }, {
  57: {
    name: fromLotR(),
    book: ["D-1", 69],
    author: "Ida Nyrop Ludvigsen",
    content: `Tre har elvernes konge i dybeste skove,
Syv har dværgenes herrer i sale af sten,
Ni har mennesket dødeligt, dømt til at sove,
Én har den natsorte fyrste for ondskab og mén
I Mordors land, hvor skygger ruge.
Én Ring er over dem alle, én Ring kan finde de andre
Én Ring kan bringe dem alle, i mørket lænke dem alle
I Mordors land, hvor skygger ruge.`
  },
  58: {
    book: ["D-2", 69],
    author: "Bjørn Arnfred Bojesen",
    content: `Tre Ringe for elverne under det blå;
syv ere for dværg-æt i sale af sten;
ni for maend som mod døden gå;
Mørkets Herre på tronen får én
i Mordors land hvor skyggerne bestå.
Én Ring kan kue dem, én Ring finde dem,
Én Ring kan bringe dem og i mørket binde dem
i Mordors land hvor skyggerne bestå.`
  },
});

const da2 = make({ language: "dan" }, {
  139: {
    input: "0.7.0",
    author: "Jonathan Avidan",
    book: ["D-3", 70],
    content: `Tre ringer til Elleve-Damer under himmelen,
Syv til Dvarg-Herrene i sin haller på sten,
Ni ringer til Dödelige-mennesker dømmt til dø,
En til Herre-mørk på hans tron-mørk
I landet på Mordor hvor skyggeren ligger.
En ring till regere dem al, en ring till finde dem,
En ring till bringe dem al og i mørket binde dem
I landet på Mordor hvor skyggeren ligger.`
  }
});

export default [
  da,
  da2,
];
