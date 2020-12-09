import { book, fromLotR, make } from "../../utils";

export const nl = make({ language: "nl", input: "0.2.0", name: fromLotR() }, {
  59: {
    book: book("N-1", 67),
    author: "Max Schuchart",
    content: `Drie Ringen voor de Elfen-koningen op aard'
Zeven voor de Dwergvorsten in hun zalen schoon,
Negen voor de mensen, die de dood niet spaart,
Een voor de Zwarte Heerser op zijn zwarte troon
In Mordor, waar de schimmen zijn,
Een Ring om allen te regeren, Een Ring om hen te vinden,
Een Ring die hen brengen zal en in duisternis binden,
In Mordor, waar de schimmen zijn.`
  },
  60: {
    book: book("N-2", 67),
    author: "E.J.Mensink van Warmelo",
    content: `Drie Ringen voor de Elfenkoningen op aard',
Zeven voor de Dwergvorsten in hun zalen schoon,
Negen voor de Mensen die de dood niet spaart,
Één voor de Zwarte Heer op zijn donkre troon
In het land Mordor waar de Schaduw waart.
Één Ring om ze alle te regeren, één Ring om ze te vinden,
Één Ring om ze te brengen en in de duisternis te binden
In het land Mordor waar de Schaduw waart.`
  }
});
