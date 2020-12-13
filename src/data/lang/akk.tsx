import React, { FC } from "react";
import { IDerzhansky } from "../authors";
import { make } from "../utils";
import pic89 from "../pic/89akk.png";

const Word: FC<{ det: string }> = ({ det, children }) => <><sup>{det}</sup>{children}</>;

// thanks to Cuneify http://cuneifyplus.arch.cam.ac.uk/
const cuneified89 = `𒐈 𒌦 𒋡 𒀀 𒁴 𒁹 𒈗 𒈨𒌍 𒀭 𒉏 𒊑 𒄿 𒃻 𒋫 𒀭 𒂊 𒈾 𒅎 𒊩 𒋢 𒉡
𒅓 𒌈 𒁹 𒂗 𒈨𒌍 𒇽 𒅗 𒍠 𒀀 𒁕 𒀀 𒀀 𒅔 𒂍 𒃲 𒈨𒌍 𒆠 𒋫 𒆳
𒑆 𒌈 𒁹 𒌉 𒈨𒌍 𒇽 𒌋 𒁴 𒃻 𒈬 𒌋 𒌈 𒄴 𒄩 𒍪 𒄑 𒌋𒂙 𒋢 𒉡
𒁹 𒀜 𒌦 𒄣 𒌝 𒉿 𒈾 𒂗 𒂊 𒁲 𒅎 𒉿 𒃻 𒀀 ░ 𒀸 𒈾 𒀀 𒋗 𒊒 𒅎
𒅔 𒆳 𒂊 𒁲 𒅎 𒀸 𒆳 𒈥 𒊑 𒁺 𒌋 𒀖 𒆠 𒈾 𒋗 𒌋 𒈠 𒌓 𒉆 𒆳 𒋢 𒉡
𒁹 𒀜 𒌦 𒄣 𒆗 𒅆 𒈾 𒀀 𒈠 𒍝 𒀀 𒁹 𒀜 𒌦 𒄣 𒌝 𒉿 𒁁 𒂊 𒉌 𒅆 𒈾
𒁹 𒀜 𒌦 𒄣 𒆗 𒅆 𒈾 𒀀 𒈾 𒍝 𒀀 𒌋 𒅔 𒂊 𒂅 𒁴 𒂊 𒍢 𒂊 𒉌 𒅆 𒈾
𒅔 𒆳 𒂊 𒁲 𒅎 𒀸 𒆳 𒈥 𒊑 𒁺 𒌋 𒀖 𒆠 𒈾 𒋗 𒌋 𒈠 𒌓 𒉆 𒆳 𒋢 𒉡`;

export const akk = make({ language: "akk" }, {
  89: {
    input: "0.2.5",
    variant: "старовавилонский диалект",
    book: ["A", 203],
    author: IDerzhansky,
    comments: ["Orig. published in Tyalië Tyelelliéva #6, pp. 7-8 (with cuneiform)."],
    content: [
      {
        type: "image",
        image: pic89,
      },
      {
        name: "transliteration",
        type: "translit hgn",
        text: <>EŠ<sub>5</sub> un-qa-a-tim ana LUGAL.MEŠ AN-nim-ri-i   šá TA AN-e na-im-ra(q)-su-nu<br />
IMIN-tum ana EN.MEŠ LÚ.ka-zà-a-da-a-a   in É.GAL.MEŠ.KI TA KUR<br />
ILIMMU-tum ana DUMU.MEŠ LÚ-u-tim   šá mu-u-tum iḫ-ḫa-zu GIŠ.[ŠIBIR?]-su-nu<br />
DIŠ-at un-qu-um à-na EN e-ṭe-em   à šá-a-[?]-aš-na a ŠU ŠUB-em<br />
in KUR e-ṭe-em ina mat mar-ri du-u-rím   KI na-šu-u-ma-tú ším-mat-su-nu<br />
DIŠ-at un-qum kal-ši-na a ma-ṣa-a   DIŠ-at un-qu-um à be-e-lí-ši-na<br />
DIŠ-at un-qum kal-ši-na a na-ṣa-a   u in e-ṭu-tim e-ṣe-e-lí-ši-na<br />
in KUR e-ṭe-em ina mat mar-ri du-u-rím   KI na-šu-u-ma-tú ším-mat-su-nu</>
      },
      {
        name: "normalized",
        type: "translit hgn",
        text: <>šalāš unqātim ana šarrī  <Word det="d">*nimrī</Word> ša ultu šamê namurratsunū,<br />
sibettum ana bēlī  <Word det="LÚ">*kazādāya</Word> in ēkallātim šapal šadêm,<br />
tišettum ana mārī awīlūtim ša mūtum iḫḫazū <Word det="GIŠ">ṣarratsunū</Word>,<br />
ište'at unqum ana bēlim eṭêm a šāšinā a qātim nadêm<br />
in mātim eṭêm, in māt marri dūrim ašar mašûmatū šīmatsunū.<br />
iste'at unqum kalšinā a maṣā, iste'at unqum a bēlišinā,<br />
iste'at unqum kalšinā a naṣā ū in eṭûtim eṣēlišinā,<br />
in mātim eṭêm, in māt marri dūrim ašar mašûmatū šīmatsunū.</>
      },
      {
        name: "Unicode (font 1)",
        type: "cuneiform-assur",
        text: cuneified89,
      },
      {
        name: "Unicode (font 2)",
        type: "cuneiform-na",
        text: cuneified89,
      }
    ]
  },
});
