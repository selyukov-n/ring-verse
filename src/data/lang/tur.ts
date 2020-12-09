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
});
