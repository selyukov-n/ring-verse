import { book, make } from "../utils";
import pic213ar from "../pic/213ara.png";
import pic213hb from "../pic/213heb.png";

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
});
