import { sources } from "../../sources";
import { book, make } from "../../utils";

export const sloven = make({ language: "slo" }, {
  77: {
    input: "0.2.0",
    book: book("S-1", 112),
    author: [],
    content: `Trije Prstani za vilinske kralje pod svodom neba,
sedem za škratov vladarje, ki so v palaċah iz kamna doma,
devet za umrljive ljudi, ki jih smrt dohiti,
eden za Temnega gospodarja, ki na temnem prestolu živi,
v dezeli Mordor, kjer sence žive.
En Prstan, ki vlada vsem, en Prstan, ki vse najde,
en Prstan, da vse vrne in v temo jih povrne,
v deželo Mordor, kjer sence žive.`
  },
  243: {
    input: "0.9.0",
    author: `Elrohir [${sources.planetTolkien}]`,
    book: book("S-2", 112),
    content: `Troji Prstani za vilinske kralje pod neba blescavo,
Sedmeri za škratje vladarje v njih skalnem zaklonu,
Deveteri za Smrtnike, ljudi z umrljivo naravo,
En sam pa za Temnega vladarja, ki sedi na tronu
v Mordorju, kjer senca ne nehava.
Edini, ki jim vsem vlada, Edini ki jih vse prese~e,
Edini, da jih vse poisce in v temi pove~e
v Mordorju, kjer senca ne nehava.`
  },
  495: {
    input: "1.1",
    author: [],
    comments: ["очень похоже на #243"],
    content: `Troji Prstani za vilinske kralje pod neba bleščavo,
Sedmeri za škratov vladarje v njih skalnem zaklonu,
Deveteri za Smrtnike, ljudi z umrljivo naravo,
En sam pa za Temnega vladarja, ki sedi na tronu
V Mordorju, kjer sence ležijo stoglavo.
Edini, ki jim vsem vlada, Edini, ki jih vse preseže,
Edini, da jih vse poišče in jih v temí poveže
V Mordorju, kjer sence ležijo stoglavo.`
  },
});
