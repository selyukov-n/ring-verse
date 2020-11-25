import { IDerzhansky } from "../authors";
import { book, make } from "../utils";

export const irish = make({ language: "gle" }, {
  85: {
    input: "0.2.0",
    author: [],
    book: book("I-1", 144),
    content: `Trí fháinne do ríthe na síogaithe thuas sa spéir,
seacht gcinn do tiarnaí na n-abhac ina gcuid hallaí cloiche,
naoi gcinn do dhaoine básmhaire atá faoi cháineadh an éag.
Fáinne amháin don tiarna dubh ar a ríchathaoir dhubh
i dtír Mordor a bhfagraíonn na scáileanna.
Fáinne amháin len iad a rialú,
fáinne amháin len iad a fháil,
fáinne amháin len iad a thabhairt,
fáinne amháin len iad a cheangal sa dorchadas
i dtír Mordor a bhfagraíonn na scáileanna.`
  },
  91: {
    input: "0.2.5",
    author: IDerzhansky,
    book: book("I-2", 144),
    content: `Trí Fháinne do Ríthe na Síthe, slua na réaltaí sa spéir,
Seacht gcinn dosna hAbhacaibh uaibhreacha síos ina n-allaíbh d'art,
Naoi gcinn dosna Fearaibh básmhara go mbainfidh Éag a neart,
Aon Fháinne amháin don Tiarna Dubh, chun go ndeintear a réir,
Go maire an Oíche sa tsaol mór mar i dtír Mordor féin.
Aon Fháinne iad uile do stiúradh, Aon Fháinn' amháin iad d'fháil,
Aon Fháinne iad uile a cheapadh 's iad do chuibhriú faoin Scáil,
Go maire an Oíche sa tsaol mór mar i dtír Mordor féin.`
  },
});
