import { sources } from "../sources";
import { fromLotR, make } from "../utils";

export const turkish = make({ language: "tur" }, {
  182: {
    input: "0.8.0",
    name: fromLotR(),
    book: ["T", 164],
    author: "Bulent Somay",
    content: `Üç Yüzük göğün altında yaşayan Elf Kralları'na
Yedisi taştan saraylarında yaşayan Cüce Hükümdarlar'a,
Dokuz Yüzük Ölümlü İnsanlar'a, ölecekler ne yazık
Bir Yüzük gölgeler içindeki Mordor Diyarı'nda
Kara tahtında oturan Karanlıklar Efendisi'ne
Hepsini hükmedecek Bir Yüzük, hepsini o bulacak
Hepsini bir araya getirip karanlıkta birbirine bağlayacak
Gölgeler içindeki Mordor Diyarı'nda.`
  },

  542: {
    input: "2.3.0",
    author: sources.lyricstranslate.makeAuthor("GizemliGlambert"),
    content: `Üç yüzük Elf-Kralları için gökyüzünün altındaki,
Yedisi Cüce-Hükümdarlar için taştan salonlarındaki
Dokuzu fani adamlara ölüme mahkûm olan,
Biri Karanlık Efendi için karanlık tahtındaki;
Gölgelerin uzandığı Mordor Diyarında
Bir yüzük hepsine hükmedecek, bir yüzük hepsini bulacak,
Bir yüzük hepsini bir araya getirecek, ve karanlıkta onları bağlayacak
Gölgelerin uzandığı Mordor Diyarında`
  },
  543: {
    input: "2.3.0",
    author: sources.lyricstranslate.makeAuthor("ogulcanerak"),
    content: `Üç yüzük yukardaki Elf-kralları için,
Yedi tanesi taştan salonlarındaki elf-lordları için,
Dokuz tanesi ölüme mahkum edilen Ölümlü Adamlar için,
Bir tanesi kara tahtındaki Dark Lord için,
Mordorda Gölgelerin yalan söylediği yerde.
Bir Yüzük hepsini yönetmek için, Bir Yüzükle onları bulmak için,
Bir Yüzük hepsini almak için ve karanlığa bağlamak için,
Mordorda Gölgelerin yalan söylediği yerde.`
  },
});
