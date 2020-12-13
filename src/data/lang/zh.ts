import { sources } from "../sources";
import { fromLotR, make, tonal } from "../utils";
import pic338 from "../pic/338chi.jpg";
import pic420 from "../pic/420chi.gif";
import pic483a from "../pic/483chi-a.png";
import pic483b from "../pic/483chi-b.png";
import pic499a from "../pic/499chi-a.png";
import pic499b from "../pic/499chi-b.jpg";

export const zh = make({ language: "zh" }, {
  338: {
    input: "0.14.0",
    author: [],
    content: [
      {
        text: `三枚戒指給予天國之下的精靈國王 ，
七枚給予石殿裡的矮人領袖，
九枚給予注定死亡的凡人，
一枚留給黑暗王位上的黑暗之王
在這被陰影攏照的魔都裡。
魔戒之王終將駕馭它們，魔戒之王 終將追尋它們，
魔戒之王終將召喚它們，並在暗中 控制它們，
在這被陰影攏照的魔都裡。`
      },
      {
        name: "image",
        type: "image",
        image: pic338,
      }
    ]
  },
  420: {
    input: "0.17.0",
    source: sources.translations,
    name: fromLotR(),
    variant: "путунхуа",
    author: [],
    book: ["C-p", 175],
    content: [
      {
        name: "image",
        type: "image",
        image: pic420,
      },
      {
        name: "pinyin",
        text: tonal(`san1 da4 jie4-zhi3 gui1-shu3 tian1
xia4 xsiao3-jing2-zhu1-jun1
qui1 da4 jie4-zhi3 gui1-shu3 shi2-ting1
xsiao3-ai3-ren2 lie4 wang2
jiu3 mei2 jie4zhi3 shu3 yu2 yang2
shou4 ke3 shu4 de5 fan2 ren2.
hai2 you3 yi4 mei2 shu3 yu2 gao1 ju1
yu4 zuo4 de5 hei1 kui2 shou3.
mo4 dou1 da4 di4 hei1 ying3 chuang2chuang2
yi4 mei2 jie4 zhi3 tong3 ling3 zhong4
jie4, jin3 gui1 luo2 wang3,
yi4 mei2 jie4 zhi3 jin4 gu4 zhong4
jie4, hun1 an4 wu2 guang1.
mo4 dou1 da4 di4 hei1 ying3 chuang2chuang2`)
      },
      {
        name: "система Палладия",
        text: `сань да цзе-чжи гуй-шу тянь
ся сяо-цзин-чжу-цзюнь
цюй да цзе-чжи гуй-шу ши-тин
сяо-ай-жэнь ле ван
цзю мэй цзечжи шу юй ян
шоу кэ шу дэ фань жэнь.
хай ю и мэй шу юй гао цзюй
юй цзо дэ хэй куй шоу.
мо доу да ди хэй ин чуанчуан
и мэй цзе чжи тун лин чжун
цзе, цзинь гуй ло ван,
и мэй цзе чжи цзинь гу чжун
цзе, хунь ань у гуан.
мо доу да ди хэй ин чуанчуан`
      },
    ]
  },
  483: {
    input: "1.0.2",
    variant: "кантонский",
    author: "Octo Kwan",
    book: ["C-c", 178],
    content: [
      {
        type: "image",
        image: pic483a,
      },
      {
        name: "xing-shu",
        author: ["Maciej Garbowski"],
        type: "image",
        image: pic483b,
      },
      {
        text: tonal(`tin1 haa6 sin1 wong4 saam1 zi2 waan4
sek6 din6 ai2 wong4 cat1 zi2 waan4
bit1 sei2 faan4 jan4 gau2 zu2 waan4
mo1 jing2 lung4 zaau3 mo1 dou1 noi6
jam1 zo6 mo1 zyu2 mou4 soeng1 wan4
mou4 soeng1 zyu2 zoi2 cam4 zung3 waan4
mou4 soeng1 ziu1 zeoi6 zung3 waan4 gwai1
kwan2 bong2 zung3 waan4 haam6 hak1 ngam3
mo1 jing2 lung4 zaau3 mo1 dou1 noi6`)
      }
    ]
  },
  499: {
    input: "1.1",
    variant: "тайваньский",
    author: "Zhu Xue Heng",
    name: fromLotR(),
    book: ["C-t", 177],
    source: sources.book,
    content: [
      {
        name: "Simplified",
        text: `天下精灵铸三戒，
地底矮⼈得七戒，
寿定凡⼈持九戒，
莫多妖境暗影伏，
闇王坐拥⾄尊戒。
⾄尊戒，驭众戒；
⾄尊戒，寻众戒，
魔戒⾄尊引众戒，
禁锢众戒⿊暗中，
莫多妖境暗影伏。`
      },
      {
        name: "Simplified (pic)",
        type: "image",
        image: pic499a,
      },
      {
        name: "Traditional",
        text: `天下精靈鑄三戒，
地底矮⼈得七戒，
壽定凡⼈持九戒，
魔多妖境暗影伏，
闇王坐擁⾄尊戒。
⾄尊戒，馭眾戒；
⾄尊戒，尋眾戒，
魔戒⾄尊引眾戒，
禁錮眾戒⿊暗中，
魔多妖境暗影伏。`
      },
      {
        name: "Traditional (pic)",
        type: "image",
        image: pic499b,
      },
      {
        text: `Tiānxià jīnglíng zhù sān jiè,
Dìdǐ ǎirén dé qī jiè,
Shòu dìng fánrén chí jiǔ jiè,
Móduō yāo jìng ànyǐng fú,
Àn wáng zuò yōng zhìzūn jiè.
Zhìzūn jiè, yù zhòng jiè;
Zhìzūn jiè, xún zhòng jiè,
Mó jiè zhìzūn yǐn zhòng jiè,
Jìngù zhòng jiè hēi’àn zhōng,
Móduō yāo jìng ànyǐng fú.`
      },
    ]
  },
});
