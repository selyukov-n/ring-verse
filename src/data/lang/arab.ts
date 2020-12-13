import { sources } from "../sources";
import { make } from "../utils";
import pic213ar from "../pic/213ara.png";
import pic213hb from "../pic/213heb.png";
import pic351 from "../pic/351ara.jpg";
import pic501 from "../pic/501ara.jpg";

export const arab = make({ language: "arabic" }, {
  213: {
    input: "0.7.0",
    name: "классическая форма литературного языка",
    author: "Husam Mahajna",
    book: ["CA", 202],
    content: [
      {
        type: "rtl",
        text: `ثلاثة أطواق لملوك ألعلاف تحت ألسماء
سبعة لأمراء ألأقزام في قصور ألحجر
تسعة لأبناء ألموت مصيرهم ألفناء
واحد لأمير ألليالي على عرش ألظلام
في بلاد ألموردور هي دار ألظلام
ظوق لحكمهم وللعثور عليهم
ظوق لربطهم وللقبض عليهم
في بلاد ألموردور هي دار ألظلام`
      },
      {
        type: "image",
        image: pic213ar,
      },
      {
        type: "image",
        name: "древнееврейское письмо",
        image: pic213hb,
      },
      {
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
        type: "rtl",
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
        name: "image",
        type: "image",
        image: pic351,
      }
    ],
  },
  501: {
    input: "1.1",
    author: [],
    content: [
      {
        type: "rtl",
        text: `ثلاثة خواتم لملوك الجن تحت السماء,
سبعة لسادة الأقزام في أيهائهم الحجرية,
تسعة للبشر الفانين المحتوم عليهم بالموت,
واحد سيد الظلام في عرشه المظلم
في أرض موردور حيث ترقد الأشباح.
واحد يحكمها جميعا. واحد يجدها جميعاء
خاتم واحد يجمعها جميعا وفي الظلمة يوحدها
في أرض موردور حيث ترقد الأشباح.`
      },
      {
        type: "image",
        image: pic501,
      },
      {
        text: `Thelathh khewatem lemlewk alejn thet alesma’,
Seb’eh lesadh alafezam fey abha’ehem alhejreth,
Tes’eh lelbesher alefaneyn alemhetwem ’eleyhem nalemwet,
Wahed lesyed alezlam fey ’ereshh alemzelm
Fey ared Mewredwer heyth terqed alashebah.
Wahed yhekmha jemy’eana, wahed yejd yejdha jemy’eana,
Jatem wahed yejm’eha jemy’eana wefy alezlemh yewhedha
Fey ared Mewredwer heyth terqed alashebah`
      }
    ]
  },
});
