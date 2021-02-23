import React from "react";
import { ItemGroup } from "../types";
import { sources } from "../sources";
import { fromLotR } from "../utils";
import pic49a from "../pic/49jap.png";
import pic49b from "../pic/49jap.jpg";

const getRuby = (text: string, value: string) => <ruby>
  {text}
  <rp>(</rp><rt>{value}</rt><rp>)</rp>
</ruby>;

export const jp: ItemGroup = {
  49: {
    language: "jap",
    name: fromLotR(),
    book: ["J", 180],
    input: "0.2.0",
    author: [],
    content: [
      {
        type: "text-large",
        text: <>三つの指輪は、空の下なるエルフの王に、<br />
七つの指輪は、岩の{getRuby("館", "やかた")}のドワーフの君に、<br />
九つは、死すべき{getRuby("運命", "さだめ")}の⼈の⼦に、<br />
⼀つは、暗き{getRuby("御座", "みくら")}の冥王のため、<br />
影横たわるモルドールの国に。<br />
⼀つの指輪は、すべてを統べ、<br />
⼀つの指輪は、すべてを⾒つけ、<br />
⼀つの指輪は、すべてを捕らえて<br />
くらやみのなかにつなぎとめる。<br />
影横たわるモルドールの国に。</>,
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
