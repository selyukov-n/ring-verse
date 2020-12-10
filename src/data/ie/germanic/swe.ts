import { JAvidan } from "../../authors";
import { sources } from "../../sources";
import { book, fromLotR, make } from "../../utils";

export const swedish = make({ language: "swe" }, {
  65: {
    input: "0.2.0",
    name: fromLotR(),
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
    source: sources.ringarnas,
    content: `Tre ringar för älvkungarnas makt högt i det blå,
sju för dvärgarnas furstar i salarna av sten,
nio för de dödliga män, som köttets väg skall gå,
en för Mörkrets herre i ondskans dunkla sken
i Mordors land, där skuggorna ruva.
En ring ska styra dem, en ring ska finna dem,
en ring ska hämta dem och djupt i mörkret binda dem -
i Mordors land, där skuggorna ruva.`
  },

  334: {
    input: "0.13.6",
    variant: "норвежский диалект ?",
    author: `jacqueline [${sources.iceland}]`,
    content: `Tre Ringer for alvene under det blå;
sju for dvärger i sal av sten;
ni for men som all dömd gang må gå.
Men for Mörkets herre en eneste en
i det dunkle Mordor hvor skyggene rår.
En Ring skal samle dem, en Ring hittar dem,
en Ring betvinge dem och i mörket binde dem
i det land Mordor hvor skyggene rår.`
  },

  346: {
    input: "0.14.0",
    name: fromLotR("новый"),
    author: "Lotta Olsson",
    book: ["S-2", 71],
    content: `Ringar tre skall alver se, under himlens rand,
sju för dvärgars härskare, som djupt i berget bor,
nio för människor, som döden tar omhand,
en för Mörkrets herre, på mörka tronen stor,
i Mordor, i skuggornas land.
En ring att styra dem, en ring att se dem,
en ring att fånga dem och till mörkret ge dem,
i Mordor, i skuggornas land.`
  },
});
