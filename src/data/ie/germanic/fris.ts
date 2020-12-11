import { book, make } from "../../utils";

export const frisian = make({ language: "fy" }, {
  199: {
    input: "0.8.0",
    author: "Arjan Groenemejer",
    book: book("F-2", 68),
    content: `Trije ringen foar de elvekeningen ûnder de himel,
Sân foar de dwergehearen yn harren stiennen hallen,
Njoggen foar de stjerrende minsken ferdoeme it libben te litten.
Ien foar de tsjustere hear op syn swarte stoel,
Yn Mordorlân der't de skâden lizze.
Ien ring om har allen te lieden, Ien ring om har te finen.
Ien ring om har allen te bringen en har yn tsjuster te binen
Yn Mordorlân der't de skâden lizze.`
  },
  458: {
    input: "1.0",
    author: "Douwe Tamminga",
    book: ["F-1", 68],
    comments: ["was published in Lembas #13, Journal of Tolkien Society Unquendor (NL)"],
    content: `Trije Ringen foar de Alve-kenings, wolk-dutsen en heech-eal.
Sân foar it Ierdmans-folk yn harren stiennen seal.
Njoggen foar Stjerlingen, ta de dea ferwiisd.
Ien foar de Foarst, der 't syn dunkere troane riist
yn Mordor, oerskade en feal.
Ien Ring ta regear, ien Ring om eltsien te finen,
ien Ring om te bringen, ien om by tsjuster elts te binen
oan Mordor, oerskade en feal.`
  },
  493: {
    input: "1.1",
    author: [],
    content: `Trije Ringen foar de Elfkenings yn 't gea,
Sân foar de Dwerchhearen ûnder stiennen kroan',
Njoggen foar Minskebern, bûn oan har dea,
Ien is foar de Tsjust're op syn Troan
Fier yn Mordor, Lânsdou sûnder Dagerea.
Ien Ring all'gear ta hearsker, Ien har fynder,
Ien Ring dy't har yn 't tsjuster ﬁert, Ien aller bynder
Fier yn Mordor, Lânsdou sûnder Dagerea.`
  },
});
