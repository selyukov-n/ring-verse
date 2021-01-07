import { sources } from "../../sources";
import { book, make } from "../../utils";

export const gothic = make({ language: "got" }, {
  79: {
    input: "0.2.0",
    author: "David Salo",
    book: book("G-1", 187, "and G-2, p.188"),
    content: [
      {
        text: `Þrija figgragulþa faur þans albiska-þiudanans undar þana himin,
Sibun faur þans dwairga-fraujans in rohsnim seinaim stainahaim,
Niun faur mannans diwanans, domidans diwan,
Ain faur þana fraujan riqizeinan ana stola riqizeinamma seinamma
In þamma landa Maurdauris þarei þai skadjus ligand.
Ain figgragulþ waldan ija alla, ain figgragulþ finþan ija,
Ain figgragulþ briggan ija alla jah in riqiza bindan ija
In þamma landa Maurdauris þarei þai skadjus ligand.`
      },
      {
        text: `𐌸𐍂𐌹𐌾𐌰 𐍆𐌹𐌲𐌲𐍂𐌰𐌲𐌿𐌻𐌸𐌰 𐍆𐌰𐌿𐍂 𐌸𐌰𐌽𐍃 𐌰𐌻𐌱𐌹𐍃𐌺𐌰-𐌸𐌹𐌿𐌳𐌰𐌽𐌰𐌽𐍃 𐌿𐌽𐌳𐌰𐍂 𐌸𐌰𐌽𐌰 𐌷𐌹𐌼𐌹𐌽,
𐍃𐌹𐌱𐌿𐌽 𐍆𐌰𐌿𐍂 𐌸𐌰𐌽𐍃 𐌳𐍅𐌰𐌹𐍂𐌲𐌰-𐍆𐍂𐌰𐌿𐌾𐌰𐌽𐍃 𐌹𐌽 𐍂𐍉𐌷𐍃𐌽𐌹𐌼 𐍃𐌴𐌹𐌽𐌰𐌹𐌼 𐍃𐍄𐌰𐌹𐌽𐌰𐌷𐌰𐌹𐌼,
𐌽𐌹𐌿𐌽 𐍆𐌰𐌿𐍂 𐌼𐌰𐌽𐌽𐌰𐌽𐍃 𐌳𐌹𐍅𐌰𐌽𐌰𐌽𐍃, 𐌳𐍉𐌼𐌹𐌳𐌰𐌽𐍃 𐌳𐌹𐍅𐌰𐌽,
𐌰𐌹𐌽 𐍆𐌰𐌿𐍂 𐌸𐌰𐌽𐌰 𐍆𐍂𐌰𐌿𐌾𐌰𐌽 𐍂𐌹𐌵𐌹𐌶𐌴𐌹𐌽𐌰𐌽 𐌰𐌽𐌰 𐍃𐍄𐍉𐌻𐌰 𐍂𐌹𐌵𐌹𐌶𐌴𐌹𐌽𐌰𐌼𐌼𐌰 𐍃𐌴𐌹𐌽𐌰𐌼𐌼𐌰,
𐌹𐌽 𐌸𐌰𐌼𐌼𐌰 𐌻𐌰𐌽𐌳𐌰 𐌼𐌰𐌿𐍂𐌳𐌰𐌿𐍂𐌹𐍃 𐌸𐌰𐍂𐌴𐌹 𐌸𐌰𐌹 𐍃𐌺𐌰𐌳𐌾𐌿𐍃 𐌻𐌹𐌲𐌰𐌽𐌳.
𐌰𐌹𐌽 𐍆𐌹𐌲𐌲𐍂𐌰𐌲𐌿𐌻𐌸 𐍅𐌰𐌻𐌳𐌰𐌽 𐌹𐌾𐌰 𐌰𐌻𐌻𐌰, 𐌰𐌹𐌽 𐍆𐌹𐌲𐌲𐍂𐌰𐌲𐌿𐌻𐌸 𐍆𐌹𐌽𐌸𐌰𐌽 𐌹𐌾𐌰,
𐌰𐌹𐌽 𐍆𐌹𐌲𐌲𐍂𐌰𐌲𐌿𐌻𐌸 𐌱𐍂𐌹𐌲𐌲𐌰𐌽 𐌹𐌾𐌰 𐌰𐌻𐌻𐌰 𐌾𐌰𐌷 𐌹𐌽 𐍂𐌹𐌵𐌹𐌶𐌰 𐌱𐌹𐌽𐌳𐌰𐌽 𐌹𐌾𐌰.
𐌹𐌽 𐌸𐌰𐌼𐌼𐌰 𐌻𐌰𐌽𐌳𐌰 𐌼𐌰𐌿𐍂𐌳𐌰𐌿𐍂𐌹𐍃 𐌸𐌰𐍂𐌴𐌹 𐌸𐌰𐌹 𐍃𐌺𐌰𐌳𐌾𐌿𐍃 𐌻𐌹𐌲𐌰𐌽𐌳.`
      }
    ]
  },

  119: {
    input: "0.5.0",
    book: ["G-3", 189],
    author: "Matthew Carver",
    content: `Ƕa! þatei Hrigge     hausida ik
þreis þaim waurþun     Þiudanam Albe
haldan himin-       hulidaim gibanai.
Sibunuh þaim in     staina-saliþwam
Fraujam Dwairge     frumabauandam,
waila ik wait,     waurþun gibanai;
dauþnan domidai     Diwa-mannans
nauseigai Niun   afnemun   Hriggans;
iþ Ains lifniþ     ainaha þanei
fahai jah fastai     Frauja Riqizis
ana swart-sitla     sitands þarei
liuhadalausai     ligand filu
mikilskadjus     Maurdaur-landam in.
Ist Ains finþan     allans Hrigge
gawandjan, waldan     jah gawidan
in runistadam     riqizis þarei
liuhadalausai     ligand filu
mikilskadjus     Maurdaur-landam in.`
  },

  549: {
    input: "2.3.5",
    author: "Matthew Carver",
    source: sources.gutanebokahus,
    content: [
      {
        text: `Þize Hrigge waurþun, hausida waurda
þreis du haldan Þiudanam Albe
tugglahulidaim triggwaba guldanai.
Sibunuh þaim in saliþwam staine
Fraujam Dwairge frikaƕairbam,
waila witum, waurþun gibanai;
Diwa-Mans domidis dauþnan lofans
Niun nausandins afnemun Bauge;
Iþ Ains nauh ist, ainaha þanei
faha filhiþ Frauja Riqizis
in sitla swartamma sitands þarei
liuhadalausai ligand aufto
skadjus mikilai Maurdaurlandam in.
Ist Ains finþan allans Hrigge
gawandjan, waldan jah gawidan allis
ana rune stadam riqizis þarei
liuhadalausai ligand aufto
skadjus mikilai Maurdaurlandam in.`
      },
      {
        text: `𐌸𐌹𐌶𐌴 𐌷𐍂𐌹𐌲𐌲𐌴 𐍅𐌰𐌿𐍂𐌸𐌿𐌽, 𐌷𐌰𐌿𐍃𐌹𐌳𐌰 𐍅𐌰𐌿𐍂𐌳𐌰,
𐌸𐍂𐌴𐌹𐍃 𐌳𐌿 𐌷𐌰𐌻𐌳𐌰𐌽 𐌸𐌹𐌿𐌳𐌰𐌽𐌰𐌼 𐌰𐌻𐌱𐌴
𐍄𐌿𐌲𐌲𐌻𐌰𐌷𐌿𐌻𐌹𐌳𐌰𐌹𐌼 𐍄𐍂𐌹𐌲𐌲𐍅𐌰𐌱𐌰 𐌲𐌿𐌻𐌳𐌰𐌽𐌰𐌹.
𐍃𐌹𐌱𐌿𐌽𐌿𐌷 𐌸𐌰𐌹𐌼 𐌹𐌽 𐍃𐌰𐌻𐌹𐌸𐍅𐌰𐌼 𐍃𐍄𐌰𐌹𐌽𐌴
𐍆𐍂𐌰𐌿𐌾𐌰𐌼 𐌳𐍅𐌰𐌹𐍂𐌲𐌴 𐍆𐍂𐌹𐌺𐌰𐍈𐌰𐌹𐍂𐌱𐌰𐌼,
𐍅𐌰𐌹𐌻𐌰 𐍅𐌹𐍄𐌿𐌼, 𐍅𐌰𐌿𐍂𐌸𐌿𐌽 𐌲𐌹𐌱𐌰𐌽𐌰𐌹;
𐌳𐌹𐍅𐌰-𐌼𐌰𐌽𐍃 𐌳𐍉𐌼𐌹𐌳𐌹𐍃 𐌳𐌰𐌿𐌸𐌽𐌰𐌽 𐌻𐍉𐍆𐌰𐌽𐍃
𐌽𐌹𐌿𐌽 𐌽𐌰𐌿𐍃𐌰𐌽𐌳𐌹𐌽𐍃 𐌰𐍆𐌽𐌴𐌼𐌿𐌽 𐌱𐌰𐌿𐌲𐌴;
𐌹𐌸 𐌰𐌹𐌽𐍃 𐌽𐌰𐌿𐌷 𐌹𐍃𐍄, 𐌰𐌹𐌽𐌰𐌷𐌰 𐌸𐌰𐌽𐌴𐌹
𐍆𐌰𐌷𐌰 𐍆𐌹𐌻𐌷𐌹𐌸 𐍆𐍂𐌰𐌿𐌾𐌰 𐍂𐌹𐌵𐌹𐌶𐌹𐍃
𐌹𐌽 𐍃𐌹𐍄𐌻𐌰 𐍃𐍅𐌰𐍂𐍄𐌰𐌼𐌼𐌰 𐍃𐌹𐍄𐌰𐌽𐌳𐍃 𐌸𐌰𐍂𐌴𐌹
𐌻𐌹𐌿𐌷𐌰𐌳𐌰𐌻𐌰𐌿𐍃𐌰𐌹 𐌻𐌹𐌲𐌰𐌽𐌳 𐌰𐌿𐍆𐍄𐍉
𐍃𐌺𐌰𐌳𐌾𐌿𐍃 𐌼𐌹𐌺𐌹𐌻𐌰𐌹 𐌼𐌰𐌿𐍂𐌳𐌰𐌿𐍂𐌻𐌰𐌽𐌳𐌰𐌼 𐌹𐌽.
𐌹𐍃𐍄 𐌰𐌹𐌽𐍃 𐍆𐌹𐌽𐌸𐌰𐌽 𐌰𐌻𐌻𐌰𐌽𐍃 𐌷𐍂𐌹𐌲𐌲𐌴
𐌲𐌰𐍅𐌰𐌽𐌳𐌾𐌰𐌽, 𐍅𐌰𐌻𐌳𐌰𐌽 𐌾𐌰𐌷 𐌲𐌰𐍅𐌹𐌳𐌰𐌽 𐌰𐌻𐌻𐌹𐍃
𐌰𐌽𐌰 𐍂𐌿𐌽𐌴 𐍃𐍄𐌰𐌳𐌰𐌼 𐍂𐌹𐌵𐌹𐌶𐌹𐍃 𐌸𐌰𐍂𐌴𐌹
𐌻𐌹𐌿𐌷𐌰𐌳𐌰𐌻𐌰𐌿𐍃𐌰𐌹 𐌻𐌹𐌲𐌰𐌽𐌳 𐌰𐌿𐍆𐍄𐍉
𐍃𐌺𐌰𐌳𐌾𐌿𐍃 𐌼𐌹𐌺𐌹𐌻𐌰𐌹 𐌼𐌰𐌿𐍂𐌳𐌰𐌿𐍂𐌻𐌰𐌽𐌳𐌰𐌼 𐌹𐌽.`
      }
    ]
  },
});
