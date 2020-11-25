import { ItemGroup } from "../types";
import { book } from "../utils";
import pic49 from "../pic/49jap.png";

export const jp: ItemGroup = {
  49: {
    language: "jap",
    name: "из перевода ВК",
    book: book("J", 180),
    input: "0.2.0",
    author: [],
    comments: ["some comments"],
    content: [
      {
        text: `三つの指輪は、空の下なるエルフの王に、
七つの指輪は、岩の やかた 館のドワーフの君に、
九つは、死すべき さだめ 運命の⼈の⼦に、
⼀つは、暗き みくら 御座の冥王のため、
影横たわるモルドールの国に。
⼀つの指輪は、すべてを統べ、
⼀つの指輪は、すべてを⾒つけ、
⼀つの指輪は、すべてを捕らえて
くらやみのなかにつなぎとめる。
影横たわるモルドールの国に。`,
      },
      {
        name: "pic",
        type: "image",
        image: pic49,

        author: ["111"],
        comment: "Some comment for this variant",
      },
      {
        name: "ромадзи",
        text: `Mittsu-no yubiwa-wa, sora-no shitanaru erufu-no ó-ni,
nanatsu-no yubiwa-wa, iwa-no yakata-no dowáfu-no kimi-ni,
kokonotsu-wa, shisubeki kidame-no hito-no ko-ni,
hitotsu-wa, kuraki mikura-no meió-no tame-ni,
kage yokotawaru morudóru-no kuni-ni.
Hitotsu-no yubiwa-wa, subete-wo sube,
hitotsu-no yubiwa-wa, subete-wo mitsuke,
hitotsu-no yubiwa-wa, subete-wo toraete,
kurayami-no naka-ni tsunagitomeru.
Kage yokotawaru morudóru-no kuni-ni.`
      },
    ]
  }
};