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
});
