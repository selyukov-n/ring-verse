import { ME } from "../authors";
import main from "../main";
import { sources } from "../sources";
import { make } from "../utils";
import pic229 from "../pic/229nuts.png";
import pic433 from "../pic/433gest.png";

const pic = (image: any) => ({ type: "image" as const, image });

const prepareForMorse = (text: string) => {
  const lines = text.split(/\n/).map(l => {
    const words = l.split(/[^\w-]/).map(w => w.split("").join(" ").toUpperCase());
    return words.join(" & ");
  });
  return lines.join("\n");
};

const items1 = make({ input: "0.7.0" }, {
  227: {
    language: "e.morse",
    author: "Yehuda Ronen",
    content: [{
      type: "morse",
      text: prepareForMorse(main.content),
    }]
    /*
    content: `- ···· ·-· · · / ·-· ·· -· --· ··· / ··-· --- ·-· / - ···· · / · ·-·· ···- · -· -····- -·- ·· -· --· ··· / ··- -· -·· · ·-· / - ···· · / ··· -·- -·-- --··-- /
··· · ···- · -· / ··-· --- ·-· / - ···· · / -·· ·-- ·- ·-· ··-· -····- ·-·· --- ·-· -·· ··· / ·· -· / - ···· · ·· ·-· / ···· ·- ·-·· ·-·· ··· / --- ··-· / ··· - --- -· · --··-- /
-· ·· -· · / ··-· --- ·-· / -- --- ·-· - ·- ·-·· / -- · -· / -·· --- --- -- · -·· / - --- / -·· ·· · --··-- /
--- -· · / ··-· --- ·-· / - ···· · / -·· ·- ·-· -·- / ·-·· --- ·-· -·· / --- -· / ···· ·· ··· / -·· ·- ·-· -·- / - ···· ·-· --- -· · /
·· -· / - ···· · / ·-·· ·- -· -·· / --- ··-· / -- --- ·-· -·· --- ·-· / ·-- ···· · ·-· · / - ···· · / ··· ···· ·- -·· --- ·-- ··· / ·-·· ·· · ·-·-·- /
--- -· · / ·-· ·· -· --· / - --- / ·-· ··- ·-·· · / - ···· · -- / ·- ·-·· ·-·· --··-- / --- -· · / ·-· ·· -· --· / - --- / ··-· ·· -· -·· / - ···· · -- --··-- /
--- -· · / ·-· ·· -· --· / - --- / -··· ·-· ·· -· --· / - ···· · -- / ·- ·-·· ·-·· / ·- -· -·· / ·· -· / - ···· · / -·· ·- ·-· -·- -· · ··· ··· / -··· ·· -· -·· / - ···· · -- /
·· -· / - ···· · / ·-·· ·- -· -·· / --- ··-· / -- --- ·-· -·· --- ·-· / ·-- ···· · ·-· · / - ···· · / ··· ···· ·- -·· --- ·-- ··· / ·-·· ·· · ·-·-·-`
     */
  },
  226: {
    language: "e.braille",
    author: "Yehuda Ronen",
    content: [{
      type: "braille",
      text: main.content,
    }],
  },
  228: {
    language: "e.g",
    author: "Ent-wife aka Real Dream - No'a Tel-Or",
    content: [
      {
        type: "rtl",
        text: `שאגאלוגוש טאגאבאגאעוגות לגמאגאלכגי בנגי-ליגיליגית ביגימרוגומאגאם,
שגבגאע לגנגסיגיכגי גאגאמאגאדיגים בגטיגירוגות אגבגן צגל,
תגשאגאע ליגיבנגי האגאתמוגותאגה, יגליגידגי האגאאגאדאגאם,
אגאחאגאת לגשאגר אוגופגל עאגאל כיגיסאוגו האגאאגאפגל
בגמאגאמלגכגת מוגורדוגור באגה האגאצגל לוגא ניגירדאגאם.
טאגאבאגאעאגאת ליגימשוגול באגאם וגולגאגאתראגאם,
טאגאבאגאעאגאת ליגימשוגוך באגאם וגולגקאגאשראגאם
בגמאגאמלגכגת מוגורדוגור באגה האגאצגל לוגא ניגירדאגאם.`
      },
    ]
  },
  229: {
    language: "e.nuts",
    author: "Ent-wife aka Real Dream - No'a Tel-Or",
    content: [
      pic(pic229),
    ]
  },
});

const items2 = make({ input: "0.13.5", author: ME }, {
  329: {
    language: "e.sndex",
    comments: ["служ. слова со строчных букв, несколько соседних (\"for the\") объединяются"],
    content: [{
      type: "mono",
      text: `T600 R522 f630 E415 K522 u536 S200
S150 f630 D161 L632 i200 T600 H420 o100 S350
N500 f600 M634 M500 D530 t000 D000
O500 f630 D620 L630 o500 H200 D620 T650
i530 L530 o100 M636 w630 S320 L000
O500 R520 t000 R400 T500 A400 O500 R520 t000 F530 T500
O500 R520 t000 B652 T500 A400 a535 D625 B530 T500
i530 L530 o100 M636 w630 S320 L000`}]
  },
  330: {
    language: "e.nysiis",
    book: ["NYS", 216],
    content: `Thry rang far t Elvan-cang undar t scy
Safan far t Dwarf-lard in tar hal of stan
Nan far Martal Man danad t dy
On far t Darc lard on h darc thran
In t lad of Mardar war t Sad ly
On Rang t ral tan al On Rang t fad tan
On Rang t brang tan al ad in t darn bad tan
In t lad of Mardar war t Sad ly`
  },
  331: {
    language: "e.dmsnd",
    comments: ["некоторые слова объединяются"],
    content: [{
      type: "mono",
      text: `396540 793000 087600 565400 063930 450000
476793 379700 893400 063900 584000 074360
679000 693766 363000 300000
067930 395893 065400 395396
063863 076939 759000 343748
069650 398000 360800 069650 376300
069650 379650 360800 063063 395640 763000
063863 076939 759000 343748`
    }]
  },
  332: {
    language: "e.hex",
    content: [{
      type: "mono",
      text: `347eh     e1f91995   4de7h     e594
747eh     d3af10d5   17e1h     a115   0f  $702e
9f08      307a13e2   d00edd1e
147eh     0dac10d0h  15dac780h
117eh     1ad030d0h  3e7eh    $ad00  $11e
18199708  41e7ea11   181970f1  1d7eh
1819970b  8197ea11   ad17edac $b11d   7eh
117eh     1ad030d0h  3e7eh    $ad00  $11e`
    }]
  },
});

const items = make({}, {
  349: {
    input: "0.14.0",
    language: "e.eli",
    comments: ['("Aoccdrnig to rscheearch at Cmabrigde Uinervtisy...")'],
    author: `Cirion_12thRulingSteward [${sources.theonering}]`,
    content: `Trehe Rgnis for the Eevln-kgns uednr the sky,
Sveen for the Drwaf-lrdos in tehir hlals of sotne,
Nnie for Mtaorl Men dmeood to die,
One for the Drak Lrod on his drak tnrhoe
In the Lnad of Mdroor wrehe the Swdohas lie.
One Rnig to rlue tehm all, One Rnig to fnid tehm,
One Rnig to bnrig tehm all and in the drkaesns bnid tehm
In the Lnad of Mdroor wehre the Swdohas lie.`
  },
  419: {
    input: "0.16.5",
    language: "e.ver",
    author: ME,
    content: `Oitre neauhas pour les oir feuél sous le lecieu,
Tecè pour les gneucès nains dans leurs leças d'ierpe,
Feneu pour meheaux telmors nédeste au patré,
Un pour le Gneucè Breçon dans son netreau renoi
Dans l'ipai de Dormor, l'ipai des breçons.
Un Neauha pour les négouver tous, Un Neauha por les vétrou,
Un Neauha pour les nerame et dans les nèbreté les iél
Dans l'ipai de Dormor, l'ipai des breçons.`
  },
  433: {
    input: "1.0",
    language: "e.gest",
    author: [],
    book: ["Z", 13],
    content: [{
      type: "image",
      image: pic433,
    }],
  },
});

export const list = [
  items1,
  items2,
  items,
];
