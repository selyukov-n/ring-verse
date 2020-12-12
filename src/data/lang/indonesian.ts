import { fromLotR, make } from "../utils";

const indonesian = make({ language: "ind" }, {
  230: {
    input: "0.8.3",
    name: fromLotR(),
    author: "Gita Yuliani K.",
    book: ["I-1", 171],
    content: `Tiga Cincin untuk raja-raja Peri di bawah langit,
Tujuh untuk raja-raja Kurcaci di balairung batu mereka,
Sembilan untuk Insan Manusia yang ditakdirkan mati,
Satu untuk Penguasa Kegelapan di takhtanya yang kelam
Di Negeri Mordor di mana Bayang-bayang merajalela.
Satu Cincin 'tuk menguasai mereka semua, Satu Cincin 'tuk menemukan mereka,
Satu Cincin 'tuk membawa mereka semua dan dalam kegelapan mengikat mereka
Di Negeri Mordor di mana Bayang-bayang merajalela.`
  },
});

const ind2 = make({ language: "ind", input: "0.12.0", author: [] }, {
  271: {
    book: ["I-2", 171],
    content: `Tiga cincin pada er raja es gading tinggi dalam cahaya
Tujuk pada er panguasi es orang kerdili dalam mereka dari batu
Er fana abadi er kematian kadalurwasa, sembilan
Seorang er gelap tuan atas gelap takhta
Dalam negara Mordor, dimana wayang mengancam
Suatu cincin ia guna meninda, ia segala guna menemukan
Dalam kegelapan menggusur, dan abadi mengikat
Dalam negara Mordor, dimana wayang mengancam`
  },
  272: {
    book: ["I-3", 172],
    content: `tiga cincin raja-raja gading dalam cahaya yang tinggi
tujuh penguasa orang-orang kerdil yang berada diruangan besar dari batu
yang akan meninggal, selama-lamanya jatuh dalam kematian, sembilan
seseorang laki hitam yang berada didalam kekuasaan gelap
didalam negara Mardor, dimana bayangan mengancam
satu cincin, yang ia gunakan untuk menindas, yang ia gunakan untuk menemukan
dalam kegelapan untuk mengusir dan dengan abadi untuk mengikat
didalam negara Mordor, dimana bayangan mengancam`
  },
});

export const list = [
  indonesian,
  ind2,
];
