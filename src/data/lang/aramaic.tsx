import React from "react";
import { make } from "../utils";

export const aramaic = make({ language: "aramaic", input: "0.7.0" }, {
  169: {
    author: "Ron Croizer - רן קרויזר",
    book: ["A-1", 200],
    content: [{
      type: "rtl",
      title: "מָרָא עִיזְקִין",
      text: `תְּלָת עִיזְקִין לְמַלְכֵי דְעַלְפֵי תְּחוֹת שְׁמַיָּא,
 שְׁבַע לְמָרֵי גַמְדֵי בּהֵיכְלֵי אַבְנָא,
תְּשַׁע לְאֱנָשֵׁי, דְלֶיהֱווֹן מִיתַיָּא,
 חֲדָא לְמָרָא אַפְלָא אַכּוּרְסְיֵיהּ אַפְלָא דְחָשֵׁיב חוּרְבָּנָא
בְּאַרְעָא דְמוֹרְדּוֹר תַּם רָבְעִין טְלַלְיָא.
 חֲדָא עִיזְקְתָא לְמִשְׁלָט בְּכוּלּהוֹן, חֲדָא עִיזְקְתָא לְמִשְׁכָּחוֹן,
 חֲדָא עִיזְקְתָא לְאַתְיָא כּוּלּהוֹן, וּבַחֲשׁוֹכָא לְמִכְרָכוֹן
בְּאַרְעָא דְמוֹרְדּוֹר תַּם רָבְעִין טְלַלְיָא.`
    }]
  },
  215: {
    author: "Yehuda Ronen",
    book: ["A-2", 201],
    content: [
      {
        type: "rtl",
        text: `תלת עיזקן למלכיא דלילין תחות שמיא,
שבע למרי דגמדי בהיכלי אבנא דילהון,
תשע לגברין ברי-מית,
חדא למרא אפלא בכורסיא אפלא דיליה
בארעא דמורדור תמה טלליא רביעין.
עיזקן חדא למישלט בכולהון, עיזקן חדא יתיהון למישכח,
עיזקן חדא לאיתאה ית כולהון ובחשוכה יתיהון למיכרך
הארעה דמורדור תמה טלליא רביעין.`
      },
      {
        text: <>
          T<small>e</small>la<u>t</u> 'izqan lemal<u>k</u>aja deLilin t<small>e</small>h`ot &#353;<small>e</small>maja,<br />
          &#352;e<u>b</u>a' lemarej de<u>G</u>ma<u>d</u>ej behej<u>k</u>lej a<u>b</u>na dilehon,<br />
          Te&#353;a' le<u>G</u>a<u>b</u>rin barej-mi<u>t</u>.<br />
          H`a<u>d</u>a lemara a<u>p</u>ala be<u>k</u>urseja a<u>p</u>ala dilejh<br />
          Be|ar'a deMordor tamma t`elalaja re<u>b</u>i'in.<br />
          'izqan H`a<u>d</u>a lemi&#353;lat` bekulehon, 'izqan H`a<u>d</u>a ja<u>t</u>ejhon lemi&#353;kah`,<br />
          'izqan H`a<u>d</u>a le|ej<u>t</u>a|a ja<u>t</u> kulehon ubeh`a&#353;o<u>k</u>a ja<u>t</u>ejhon lemikra<u>k</u><br />
          Be|ar'a deMordor tamma t`elalaja re<u>b</u>i'in.
        </>
      },
    ]
  }
});
