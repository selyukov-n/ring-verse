import { book, make } from "../../utils";

export const icel = make({ language: "ice" }, {
  81: {
    input: "0.2.0",
    name: "офиц. перевод",
    author: "Geir Kristjanson",
    book: book("I-1", 75),
    content: `Þrjá fá kóngar Álfa í eyðiskóga geim,
sjö fá höldar Dverga í hamravíðum sal,
níu fá dauðlegir Menn, þá hel sækir heim,
einn fær sjálfur Myrkradróttinn á myrkranna stól
í því landi Mordor sem magnar skugga sveim.
Einn Hringur ræður þeim öllum, einn skal hann hina finna,
einn skal hann safna þeim öllum og um sinn fjötur spinna
í því landi Mordor sem magnar skugga sveim.`
  },
  270: {
    input: "0.12.0",
    author: [],
    book: book("I-2", 76),
    content: `Þrír hringar fyrir ellefu kónga undir himninum,
sjö fyrir dvergana í sölunum í steinunum
níu fyrir mennin, dæmdir til að deyja
einn fyrir herra myrkursins ríkidæmi
Í landi þeirra venjulega, þar sem skuggarnir ljúga.
Einn hringur til að ráða þeim öllum, einn hringur til að finna þá.
Einn hringur til að koma þeim öllum saman í myrkrið og sameina þá
Í landi þeirra venjulegu, þar sem skuggarnig ljúga.`
  },
});
