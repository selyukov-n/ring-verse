import { IDerzhansky } from "../authors";
import { book, make } from "../utils";

export default make({ language: "c.tlh" }, {
  56: {
    input: "0.2.0",
    author: "Anthony Appleyard",
    book: book("K-1", 210),
    content: `elDa'joHmeHvaD chalbingDaq wej Qeb,
nawqo'joHmeHvaD naghjuHmeychajDaq Soch,
HumanmeyvaD jubbe' HeghmeH qichbogh Hut,
joHvaD Hurgh quSDajDaq Hurgh wa'
Qotbogh Qibmey morDor puHDaq.
Hoch che'meH wa' Qeb, tu'meH wa' Qeb,
Hoch qemmeH lan HurghDaq baghmeH je wa' Qeb
Qotbogh Qibmey morDor puHDaq.`
  },
  92: {
    input: "0.2.5",
    author: IDerzhansky,
    book: book("K-2", 211),
    content: `chal bIngDaq wej Qebmey Hev 'e'llv jawpu',
nagh vaSmeyDaq Do'rIv chuQunvaD Soch veb,
Hegh pIHbogh Human Segh jubbe'vaD Hut chu',
quS'a' qIjDaq ba'bogh joH qIjvaD wa' Qeb
morDor puHDaq, QIbmeyDaq 'oH chenmoHlu'.
Hoch SeHmeH wa' Qeb 'ej bIH maghmeH wa' Qeb,
Hoch qemmeH 'ej ramDaq bIH baghmeH wa' Qeb
morDor puHDaq, QIbmeyDaq 'oH chenmoHlu'.`
  },
  263: {
    input: "0.11.0",
    author: [],
    book: book("K-3", 211),
    content: `chalbIngDaq 'elDajoHpu'vaD wej Qeb
naghjuHmeychajDaq nawqo'joHpu'vaD Soch
HeghmeH Humanpu'vaD jubbe' luqIchlu'bogh Hut.
quS'a'DajDaq Hurgh joHvaD Hurgh wa'
Qotbogh QibmeyDaq morDor puHDaq
Hoch che'meH wa' Qeb, tu'meH wa' Qeb
Hoch qemmeH wa' Qeb 'ej lan HurghDaq bagh
Qotbogh QibmeyDaq morDor puHDaq`
  },
});
