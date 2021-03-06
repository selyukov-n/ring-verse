import { make } from "../../utils";

export const yiddish = make({ language: "yid" }, {
  221: {
    input: "0.7.0",
    book: ["Y", 77],
    author: "David Weiß",
    content: [
      {
        text: `Drei ringen far Elbn-kingn unter der himmel,
Seiben far Schartl-prinsn in stein schlusses,
Neun far mentschn arurteilt geboirn of toit,
Ein far de Finster Lord un a farschwarze malchus tron
In di land di Mordor wer deschuttn lign.
Ein ring unfirn sie, und sie gefinen,
Ein ring zubringn sie und in finster sie farbindn
In di land di Mordor wer deschuttn lign.`
      },
      {
        type: "rtl",
        text: `דרײ רינגען פאר אעלבן קינגן אונטער דער הימל,
זיבן פאר שארטל פרינסן אין שטיין שלוסעס,
ניין פאר מענטשן אאראורטיילט געבוירן אוף טױט,
איין פאר דה פינסטער לורד און אה פרשווארצע מלכות טרון
אין די לאנד דה מורדור וער דשוטן ליגן.
איין רינג אונפירן זיי אונד זיי געפינען,
איין רינג צוברינגן זײ אונד אין פינסטער זיי פארבינדן
אין די לאנד דה מורדור וער דשוטן ליגן.`
      },
    ],
  },
  523: {
    input: "2.2.0",
    author: [],
    content: [
      {
        type: "rtl",
        title: "דער האַר פון די פינגערלעך",
        text: `דריַי פינגערלעך פאַר די עלף־קיניגן אין די טאָלן,
זיבן פאַר די שרעטל־לאָרדן אין די זאַלן פון שטיין,
ניַיַן פאַר די בשר־ודמס וועמענס גורל אין צו פאַלן,
איינס פאַר דעס בעל־חושך אויפן פינצטערן טראָן 
אין מאָרדאָר, אינעס לאַנד פין דעס בייזן שאָטן.
איין פינגערל איבער אַלע צו הערּשן, אַלע צו געפינען,
איין פינגערל זיי צו זאַמלען, אינעס פינצטערניש צו בינדן
אין מאָרדאָר, אינעס לאַנד פין דעס בייזן שאָטן.`
      },
      {
        name: "transliteration (Google)",
        title: "Der har fun di fingerlekh",
        text: `drii fingerlekh far di elf-kinign in di toln,
zibn far di shretl-lordn in di zaln fun shteyn,
niin far di bshr-udms vemens gurl in tsu faln,
eyns far des bel-khushkh aoyfn fintstern tron
in mordor, ines land fin des beyzn shotn.
eyn fingerl iber ale tsu hershn, ale tsu gefinen,
eyn fingerl zey tsu zamlen, ines fintsternish tsu bindn
in mordor, ines land fin des beyzn shotn.`
      },
    ]
  }
});
