import { make } from "../../utils";
import pic221 from "../../pic/221heb.png";

export const yiddish = make({ language: "yid" }, {
  221: {
    input: "0.7.0",
    book: ["Y", 77],
    author: "David Weiß",
    content: [
      {
        name: "латиница (германизированная)",
        text: `Drei ringen far Elbn-kingn unter der himmel,
Seiben far Schartl-prinsn in stein schlusses,
Neun far mentschn arurteilt geboirn of toit,
Ein far de Finster Lord un a farschwarze malchus tron
In di land di Mordor wer deschuttn lign.
Ein ring unfirn sie, und sie gefinen,
Ein ring zubringn sie und in finster sie farbindn
In di land di Mordor wer deschuttn lign.`
      },
      {
        name: "древнееврейское письмо (вариант для идиш)",
        type: "image",
        image: pic221,
      }
    ],
  }
});
