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
});
