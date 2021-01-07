import { sources } from "../sources";
import { make } from "../utils";

export const arm = make({ language: "arm" }, {
  479: {
    input: "1.0.2",
    author: "Gevorg Ohanian",
    book: ["A", 155],
    content: [
      {
        text: `Երեք մատանի՝ էլֆերին իմաստւն
         վեհ բար թյան համար,
Յոթ մատանի՝ անձաﬖերի անխոնջ թզ կներին
         հանքաջանքի համար,
Ինը մատանի՝ Միջերկրի մարդկանց
Սևին ծաոայել,
Կռիﬖեր մ խիզախ մարտնչել համար:
Իսկ այս Մեկը՝ Աﬔնազորը, Տիրակալին Մորդորի:
Որ թշնամանք ցանի, կամազրկի մարդկանց,
Խառնամբոխվեն նրանք Չարչարանաց երկր մ՝
Զոր թյան տակ՝ Մորդորի տիրակալի`
      },
      {
        text: `Yereq matani Elferin imastun
    Veh barutian hamar,
Yot matani andzavneri ankhondj
    tzuknerin Hanqadjanqi hamar,
Ine matani Midjerkri mardkants
Sevin tsarajelu,
Krivnerum khizakh martnchelu hamar.
Isk ajs Meke Amenazore, Tirakalin Mordori,
Vor tshnamanq tsani, kamazrki mardkants,
Kharnambokhven nranq Charcharanats erkrum
Zorutian tak Mordori tirakalin.`
      }
    ]
  },
  558: {
    input: "2.4.0",
    source: sources.warosu,
    author: [],
    content: [
      {
        text: `Երեք օղակները կախովի մեջ արեւի տակ,
Քարե պատի մեջ յոթ գաճաճ նարնջեր,
Ինը հոգու համար, ովքեր բերում են իմ անձնազոհ,
Մեկը սեւ արքայի համար իր գահին,
Երկրում, որտեղ Մորդորը ստվերում է:
Մեկ օղակը գտնում է նրանց, մեկը գերակայում է նրանց,
Նրանցից մեկը գիշերը ընկնում է եւ խավարում է
Երկրում, որտեղ Մորդորը ստվերում է:`
      },
      {
        text: `Yerek’ oghaknery kakhovi mej arevi tak,
K’are pati mej yot’ gachach narnjer,
Iny hogu hamar, ovk’er berum yen im andznazoh,
Meky sev ark’ayi hamar ir gahin,
Yerkrum, vortegh Mordory stverum e.
Mek oghaky gtnum e nrants’, meky gerakayum e nrants’,
Nrants’its’ meky gishery ynknum e yev khavarum e
Yerkrum, vortegh Mordory stverum e:`
      }
    ]
  },
});
