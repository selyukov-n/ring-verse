import { book, fromLotR, make } from "../utils";
import pic231 from "../pic/231heb.jpg";

const pic = (image: any) => ({
  type: "image" as const,
  image,
});

const heb = make({ language: "heb" }, {
  217: {
    input: "0.7.0",
    author: "Yaron Tausky",
    book: book("H-3", 167),
    content: [
      {
        type: "rtl",
        text: `שלוש טבעות למלכי-עלפים תחת רקיע ועץ,
שבע לשרי-גמדים בהיכלות עמקי-עולם,
תשע לבני-אדם עליהם נגזר קץ,
אחת לשר האופל באפלת כסאו הרם
במורדור, ארץ-אופל, בה הצל רובץ.
טבעת אחת למשול בכולן, טבעת אחת למצאן,
טבעת אחת להשיב את כולן ובאופל לכבלן
במורדור, ארץ-אופל, בה הצל רובץ.`
      },
    ]
  },

  231: {
    input: "0.8.4",
    name: fromLotR(),
    book: book("H-1", 165),
    author: "Ruth Livnit",
    content: [
      pic(pic231),
      {
        name: "кириллица",
        text: `Шалош табаот ле-мальхэй б'нэй лейлот бимромам,
Шэва лин'сихэй гамадим бэтирот эвэн цэль,
Тэйша ливнэй hа-тмута, йэлидэй hа-адам,
Ахат ле-сар офэль аль кис'о hа-афэль
Бэ-мамлехэт Мордор ба hа-цэль ло нирдам.
Табаат лимшоль бам у-леатрам,
Табаат лимшох бам у-лекашрам,
Бэ-мамлехэт Мордор ба hа-цэль ло нирдам.`
      },
    ]
  },
  232: {
    input: "0.8.4",
    author: "Uriel Ofek",
    content: [
      {
        type: "rtl",
        text: `שָׁלשׁ טַבָּעוֹת לְמַלְכֵי עֲלָפִים תַּחַת שְׁמֵי הַטְּלָלִים,
שֶׁבַע לְשָׂרֵי גַּמְדָּאִים בִּנְקָרוֹת עוֹטוֹתייצֵל,
תֵּשַׁע לִבְנֵי־הָאָדָם, בְּנֵי־תְּמוּחָה אֻמְלָלִים,
אַחַת לְשַׂר הָאֹפֶל עַל כִּסְאוֹ הָאָפֵל
בְּאֶרֶץ מוֹרְדוֹר, שָׁם רוֹבְצִים הַצְלָלִים.
טבַּעַת אַחַת לִמְשׁוֹל בְּכֻלָּן, טַבַּעַת אַחַת לְמָצְאָן,
טבַּעַת אַחַת לְהָשִׁיב אֶת כֻּלָּן. בָּאֹפֶל לְבָבְלָן,
בְּאֶרֶץ מוֹרְדוֹר, שָׁם רוֹבְצִים הַצְלָלִים.`
      },
      {
        name: "кириллица",
        text: `Шалош табаот ле-мальхэй алафим тахат шмэй hа-тлалим
Шэва ле-сарэй гамда'им би-н'карот 'отот-цэль
Тэйша ли-внэй hа-адам, б'нэй тмута умлалим
Ахат ле-сар hа-офэль аль кис'о hа-афэль
Бэ-эрэц Мордор, шам ровцим hа-цлалим.
Табаат ахат лимшоль бэ-хулан, табаат ахат лемац'ан,
Табаат ахат леhашив эт кулан, ба-офель лехавлан,
Бэ-эрэц Мордор, шам ровцим hа-цлалим.`
      },
    ]
  },

  480: {
    input: "1.0.2",
    author: "Emanuel Lottem",
    name: fromLotR(),
    book: ["H-2", 166],
    content: [{
      type: "rtl",
      text: `שלוש טבעות למלכי האלפים תחת השמים
שבעה לשרי הגמדים באולמותיהם עשויי האבן
תשעה לבני האדם בני התמותה נידונים למות
אחת בשביל לשר האופל על כיסא מלכותו האפלה
בארץ מורדור היכן שהצללים שוכנים
טבעת אחת בכולם לשלוט
טבעת אחת למצוא אותם
טבעת אחת להביא אותם ובאפילה לכבול אותם
בארץ מורדור היכן שהצללים שוכנים`
    }]
  },

  502: {
    input: "1.1",
    author: [],
    content: [
      {
        type: "rtl",
        text: `שלוש טבעות למלכי אפים תחת שמי הטללים,
שבע לשרי גמדים בהיכלי סלע,
תשע לבני האדם, בני תמותה הנידונים למות
אחת לשר האופל על כיסאו האפל
בארץ מודדור, שם רובצים הצללים.
טבעת אחת למשול בכולן, טבעת אחת למצאן,
טבעת אחת להשיב את כולן, באפלה לכבלן,
בארץ מודרדור, שסם רובצים הצללים.`
      },
      {
        text: `Shelvesh teb’evet lemleky alepyem thet shemy hetlelyem,
Sheb’ leshery gemdeym bheykely sel’e,
Tesh’ lebney hadem, beny temveth henyedvenyem lemvet
Ahet lesher havepl ’el keysav hapel
Barets Mevredver, shem revbetseym hetselleym.
Teb’et ahet lemshevl bekveln, teb’et ahet lemtesan,
Teb’et ahet lhesheyb at kevlen, bapelh lekbeln,
Barets Mevredver, shem revbetseym hetselleym.`
      }
    ]
  },
});

const old = make({ language: "hbo" }, {
  218: {
    input: "0.7.0",
    author: "Yuval Welis",
    book: book("OH", 199),
    content: [
      {
        type: "rtl",
        text: `שלוש טבעות יאחזו מלכי לילין תחת הרקיע,
שבע יאחזו אדוני-גמדים יושבי משכן-סלע,
תשע אנוש יחזיקו, בני תמותה,
אחת תהי לאדוני החשיכה על מושבו
בארץ מורדור - צלמוות ירבצה.
טבעת אחת תמשול בן, טבעת אחת תקשון,
טבעת אחת תביאם מכנפות -עולם ובצל תשקעם
בארץ מורדור - צלמוות ירבצה.`
      },
    ]
  },
});

export const list = [
  heb,
  old,
];
