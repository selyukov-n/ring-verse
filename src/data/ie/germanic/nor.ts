import { book, make } from "../../utils";
import { JAvidan } from "../../authors";

export const nb = make({ language: "nor-b" }, {
  74: {
    input: "0.2.0",
    name: "офиц. перевод",
    book: book("Nb", 72),
    author: "Thorstein Bugge Høverstad",
    content: `Tre Ringer for alver under det blå
sju for dvergene i saler av sten;
ni for Menn som all kjødets gang må gå.
Men for Mørkets Herre en eneste én
I det dunkle Mordor hvor skyggene rår.
Én Ring skal samle dem, én Ring skal finne dem,
Én Ring betvinge dem og i mørket binde dem
I det dunkle Mordor hvor skyggene rår.`
  },
});

export const nn = make({ language: "nor-nn" }, {
  75: {
    input: "0.2.0",
    book: book("Nn-2", 73),
    author: "Bjørn Arnfred Bojesen",
    content: `Tre Ringar for alvar under det blå;
sju for dvergane i salar av stein;
ni for Menn som mot døden er små.
Men for Mørkeherren ein einaste éin
I det dunkle Mordor der skuggane rår.
Éin Ring skal samla dei, éin Ring skal finna dei,
Éin Ring skal føra dei og i mørket binda dei
I det dunkle Mordor der skuggane rår.`
  },

  145: {
    input: "0.7.0",
    name: "nynorsk or bokmal ??",
    book: book("Nn-3", 74),
    author: JAvidan,
    content: `Tre ringer til De Elleve-konger under himmelen,
Sju til Dverg-Herrene i deras Saler av stein,
Ni til Dødelige-menn dømt til å dø,
En til Mørkets-Herre på sin mørk trone
I landet av Mordor hvor skyggeren ligger.
En ring skal styre dem alle, en ring skal finne dem,
En ring skal bringe dem alle og i mørket til binde dem
I landet av Mordor hvor skyggeren ligger.`
  },
  180: {
    input: "0.8.0",
    author: "Tamfiiris Entwife",
    book: book("Nn-4", 74),
    content: `Tre ringar for alvekongar ute i det fri,
og sju til herredvergar i hallar av stein.
Ni til døyelege menn som til jord skal bli
og ein for den mørke herskaren
i landet Mordor, der skuggane rår.
Ein ring til å herska, ein ring til å finna dei,
ein ring til å bringa dei, og i mørkret binda dei
i landet Mordor, der skuggane rår.`
  },
});
