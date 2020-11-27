import { sources } from "../sources";
import { book, make } from "../utils";
import pic213ar from "../pic/213ara.png";
import pic213hb from "../pic/213heb.png";
import pic351 from "../pic/351ara.jpg";

const pic = (image: any, name?: string) => ({ type: "image" as const, image, name });

export const arab = make({ language: "arabic" }, {
  213: {
    input: "0.7.0",
    name: "классическая форма литературного языка",
    author: "Husam Mahajna",
    book: book("CA", 202),
    content: [
      pic(pic213ar, "арабское письмо"),
      pic(pic213hb, "древнееврейское письмо"),
      {
        name: "transliteration",
        text: `ṯalāṯat ’aṭwāq li-mulūk al-ʿalāf taḥta as-samā’
sabʿa li-’umarā’ al-’aqzām fī quṣūr al-ḥaǧar
tisʿa li-’abnā’ al-mawt, maṣīruhum al-fanā’
wāḥid li-’amīr al-layālī ʿalā ʿarš aẓ-ẓalām
fī bilād al-mūrdūr hiya dār aẓ-ẓalām
ṭawq li-ḥukmihim wa-li-l-ʿuṯūr ʿalayhim
ṭawq li-rabṭihim wa-li-l-qabḍ ʿalayhim
fī bilād al-mūrdūr hiya dār aẓ-ẓalām`
      }
    ]
  },
  351: {
    input: "0.14.0",
    author: `YAZ [${sources.theonering}]`,
    book: ["A", 168],
    content: [
      {
        name: "Unicode",
        text: ` ثلاثة خواتم لملوك الجن تحت السماء
 سبعة لأسياد الأقزام في صالتهم الحجرية
 تسعة للرجال الفانيين، مصيرهم الفناء
 واحد لسيد الظلام على عرشه المظلم
 في أرض موردور تقع الظلال
 خاتم واحد لحكمهم كلهم، خاتم واحد ليجدهم
 خاتم واحد ليجمعهم كلهم وفي الظلام يربطهم
 في أرض موردور تقع الظلال`
      },
      {
        name: "pic",
        type: "image",
        image: pic351,
      }
    ],
  },
});
