import { sources } from "../../sources";
import { book, make } from "../../utils";

const ic = (name: string) => `${name} [${sources.iceland}]`;

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

  335: {
    input: "0.13.6",
    name: "перевод #334",
    author: ic("Reykjavik.nu"),
    content: `Þrir hringir fyrir álfarna undir það bláa
Sjö fyrir dverga i steina salnum
þið fyrir menn sem á dauðagang fara
En fyrir skratta vitisins einn fyrir einn
i einföldu Mordor þar sem skuggar ráða.
Einn Hringur kemur þeim saman, einn hringur finnur þá
Einn hringur þvingar þá til vítis
i landi Mordors þar se skuggar ráða.`
  },
  336: {
    input: "0.14.0",
    author: ic("Leifur~"),
    source: sources.iceland,
    book: ["I-3", 76],
    content: `Þrjá hringa hlutu álfakonungar og varðveita þá í leynum.
Sjö hringa hlutu dvergakonungar í djúpum klettasölum.
Níu hringar gengu til manna, til ágjarnra manna sem seldu sál sína og ummynduðust í svarta skugga.
En hringurinn EINI, sem ræður yfir öllum hinum var eign Saurons hins mikla og svarta, Myrkrahöfðingjans.
Hringurinn eini til að drottna yfir þeim öllum,   hringurinn eini til að finna alla hina,
hringur eini til að draga þá alla saman í myrkrinu   og binda saman allt vald á jörð...`
  },
});
