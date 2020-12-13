import { sources } from "../../sources";
import { make } from "../../utils";
import pic507a from "../../pic/507ocs-a.png";
import pic507b from "../../pic/507ocs-b.png";

export const ocs = make({ language: "ocs" }, {
  507: {
    input: "1.1",
    source: sources.kontuwiki,
    name: "(не полностью)",
    author: "Jussi Halla-Aho",
    book: ["OCS", 206],
    content: [
      {
        name: "кириллица",
        type: "image",
        image: pic507a,
      },
      {
        name: "глаголица",
        type: "image",
        image: pic507b,
      },
      {
        name: "transliteration",
        type: "translit",
        text: `jedinъ prьstenь ję obręštetъ
sь jedinъ jimi obladajetъ
sь jedinъ ję vъ noštь vъvrьžetъ
i vъ tьmě ję sъvęžetъ
vъ straně mradorьscě
sěnьmi obьstojimě`
      }
    ]
  },
});
