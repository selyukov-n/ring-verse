import { JAvidan } from "../../authors";
import { book, make } from "../../utils";

export const swedish = make({ language: "swe" }, {
  65: {
    input: "0.2.0",
    name: "офиц. перевод",
    book: book("S-1", 70),
    author: "Åke Ohlmarks",
    content: `Tre ringar för älvkonungarnas makt högt i det blå,
sju för dvärgarnas furstar i salarna av sten,
nio för de dödliga, som köttets väg skall gå,
en för Mörkrets herre i ondskans dunkla sken
i Mordorlandets hisnande gruva.
En ring att sämja dem,
en ring att främja dem,
en ring att djupt i mörkrets
vida riken tämja dem -
i Mordors land, där skuggorna ruva.`
  },

  143: {
    input: "0.7.0",
    author: JAvidan,
    book: book("S-3", 71),
    content: `Tre ringer till Elleve-kunger under himmelen,
Sju till Dvärg-Herrene i deras haller av sten,
Nio till Dödlig-manskap dömmt till dö,
En till Herre-mörk på hans mörk tron
I landet av Morder vor skuggaren liggar.
En ring till regera dem all, en ring till finna dem,
En ring till bringa dem all och i mörket till binda dem
I landet av Morder vor skuggaren liggar.`
  },
  212: {
    input: "0.7.0",
    author: [],
    source: "Ringarnas härskare",
    content: `Tre ringar för älvkungarnas makt högt i det blå,
sju för dvärgarnas furstar i salarna av sten,
nio för de dödliga män, som köttets väg skall gå,
en för Mörkrets herre i ondskans dunkla sken
i Mordors land, där skuggorna ruva.
En ring ska styra dem, en ring ska finna dem,
en ring ska hämta dem och djupt i mörkret binda dem -
i Mordors land, där skuggorna ruva.`
  },
});
