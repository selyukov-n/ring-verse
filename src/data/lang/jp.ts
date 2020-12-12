import { ItemGroup } from "../types";
import { sources } from "../sources";
import { fromLotR } from "../utils";
import pic49a from "../pic/49jap.png";
import pic49b from "../pic/49jap.jpg";

export const jp: ItemGroup = {
  49: {
    language: "jap",
    name: fromLotR(),
    book: ["J", 180],
    input: "0.2.0",
    author: [],
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
        name: "pic1",
        type: "image",
        image: pic49a,
      },
      {
        name: "pic2",
        type: "image",
        image: pic49b,
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
  },
  379: {
    input: "0.15.0",
    language: "jap",
    author: `Joy [${sources.barrodowns}]`,
    source: sources.barrodowns,
    content: `Enjin no san shozoku kingu no elfu entenka amanohara desu.
Enjin no shichi shozoku jouin no dwafu uchi no ishi desu.
Enjin no kyuu shozoku jin no inochi unmeiteki bossuru desu.
Enjin no ichi shozoku no akuma e bodou gyokuza no yuumei desu.
Gen'ya no Morudoru doko hokage harikomu desu.

Enjin no ichi e matsurigoto minna desu.
Enjin no ichi e aritsuku minna desu.
Enjin no ichi e tsurikomu to tokoyami shibarikomu minna desu.
Gen'ya no Morudoru doko hokage harikomu desu.`
  },
};
