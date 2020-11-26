import { book, make, tonal } from "../utils";
import pic219 from "../pic/219hon.jpg";
import pic186 from "../pic/186gac.gif";
import pic225 from "../pic/225ave.jpg";

const lang1 = make({ input: "0.7.0" }, {
  154: {
    language: "c.aul",
    author: "Andre Steffens",
    content: `Angá ós ring aúis Ging Elflóch eu sgy ágngu,
ós alúchie aus Lort Twarflóch halláchlóch stónglóchlóch,
ós aloiech aus Man lifnguliepoeálóch, etó lifgulópoie a,
O até aut Lort tarklóch tróngáglóch tarklóchlóch
Eu langt Mordor áchfó, eteu áchfó ós zjadó lyoie.
até ó Ring etó ys al eroelloerf a, até o Ring etó ys el efingtoie a,
até ó Ring etó ys all epringoerf pfúázj ys el epingtoie eu tarku áchfó
Eu langt Mordor áchfó, eteu áchfó ós zjadó lyoie.`
  },
  156: {
    language: "c.des",
    author: "Justin Rotramel",
    content: `T'sru cor Tha pori z' Vlena Kina ro suna zo kiso,
cor Vrina pori z' Dwari Pora ro tusa hali ra po stoka,
cor Nenwi pori Manu ro se motra, dume tha dixo,
Newi pori Pora Kuxo tuso tha thora kuxo
Tuso Modro Ladna, tuso he Shadwu bi.
Newi T'sru pori z' rulo la, Newi T'sru pori z' desk'ro la,
Newi T'sru pori zo koqua la he ro dana ni z' duxoni fixa tema
Tuso Modro Ladna, tuso he Shadwu bi.`
  },
  157: {
    language: "c.lei",
    author: "Exu Yangi",
    content: `ilnisi ifsana eniktiki ifikpeti ifelhelli
ilnisi ifsiti eniklei ifikkibaja etenikiristjeppa iskinnei
ilnisi ifrafi eniktiko ifikpevi jati ishmaratti afrafi
ilnisi ifhekani enlei ifgaru, upebuntoro ifgaru
iletenmodor jati ifjaffani
ilnisi ifhekani enni ifirtiki, ilnisi ifhekani enni ifarkuuran
ilnisi ifhekani enni ifirbarina, enartaito etengaru enni
iletenmodor jati ifjaffani`
  },
  167: {
    language: "c.kel",
    source: "Sylvia Sotomayor's site of Kélen",
    author: "Sylvia Sotomayor",
    content: `la jawáel wijté to máróni anéltárien sú jakéié tá
la jónne to máróni anakkásátien sú ansúni ankíTa
la járíw to mámáñi ma pa annára annóña
la ján to márón maxé sú jaténar jaxé
sú jekién mórtór la jaxéwi

la ján to ñi jannaren á jatéNNíhen
la ján to ñi á japóññíhen
la ján to ñi jannaren á jawíríhen
aT to ñi rá'nxél'mé á jáontíkíhen
sú jekién mórtór la jaxéwi`
  },
  219: {
    language: "c.hon",
    author: "Dotan Brom",
    content: [
      {
        text: `dun tharuzh thiwulis to miranazis del ilafis bidh del washun,
dun vatum tor sumus del kizatis bidh zhaturasamun ao kirat weh shayad',
dun navon tor amoun zhen with idamtha, senes del dum',
sun ud tor sum del mohur ofs aomu muhorum githurad'
bidh sun mordor - dal shayud.
sun ud thiwul tor marenin tolamun, sun ud thiwul tor drekin amun,
sun ud thiwul tor fahedin tolamun weh bidh del mohur bagedin amun
bidh sun mordor - dal shayud.`
      },
      {
        type: "image",
        image: pic219,
      }
    ]
  },
  220: {
    language: "c.tre",
    author: "Mogy aka Beorn - Tomer Bärmann",
    content: `Ren talmar li rainer aldir randa lu bin,
Ban li laober dinandor ruin lu maldar bi fera,
Ves li vandor bater ne raifano sebin,
Yar li lu patfo mane tor taimasi lera,
Ruin tibana mordor gin lu vair khadin.
Yar talma shapedi ros, yar talma fareni,
Yar talma kadefi ros de ruin lu manor almateni,
Ruin tibana mordor gin lu vair khadin.`
  },
});

const lang2 = make({ input: "0.8.0" }, {
  179: {
    language: "c.atl",
    author: "Richard A.Antonius",
    content: `Tri ringoy por la Elfoy sube la syel'
Sem por la Dworfoy in lur petra sal',
Nin por la homo febla - kay morteba tel,
Un por la Darka Soro sur trongo di mal'
In Mordora lando - qan ne tokta hel'.
Un Ringo por can regi, Un por cun posesis
Un Ringo por cun ligis kay per cu ordesis
In Mordora lando - qan ne tokta hel'.`
  },
  184: {
    language: "c.var",
    author: "Uncle Davey",
    content: `qriy ringiz for de elffi kingiz anda de skay,
sevn for de dwarffi lordiz in deyaz halliz ov stown,
nayn for deqpron maniz domaddi naday,
wan for de darkki lord on hiaz darkki qrown
in de land ov mordor, wer de xadowiz lay.
wan ring tu narul dem ol, wan ring nafawn dem
wan ring tu nabring dem ol an in de darknis nabawn dem
in de land ov mordor, wer de xadowiz lay.`
  },
  185: {
    language: "c.rom",
    author: "David Crandall",
    content: `Tres anelos par los reies de los Elfos so el sielo,
Sete par los seniores de los Nanos en loras salas di piedra,
Nove par los omes mortales, condenados a morer,
Uno par el senior Oscuro sobra sua sedia regal oscura,
En la terra de Mordor, donde las ombras se estende.
Un Anelo par governar les todos, Un Anelo par trovar les.
Un Anelo par aportar les todos i ligar les en la oscurida'
En la terra de Mordor, donde las ombras se estende.`
  },
  186: {
    language: "c.gac",
    author: "Theodore Kloba",
    content: [
      {
        text: `ir yëj birmada birzuçmëm alvëduram begyanax ërje,
ir giçoy azboyom dorvëduram gamburadax rugudurax,
ir albu zimirmadam gimnëgëm, bol ajlazimir
ir yo azbom veçnom, veçnox cirbazax jën,
mordordurax bezajax, ublaguji verduju omji.
yo birmav uju viz ajlazbanir, yo birmav uju viz ajlanibor,
yo birmav uju viz ajlagilmanar, o uju ajlazeder veçnoyëx,
mordordurax bezajax, ublaguji verduju omji.`
      },
      {
        name: "письменность Gaciça",
        type: "image",
        image: pic186,
      }
    ]
  },
  187: {
    language: "c.alm",
    author: "Don Traxler",
    content: `Tri Ringar for elvar under de blo,
Sjo for dvergar i dejs salar av sten,
Nio for Manar som til död moste go,
Men for de Mörk Lord, en enkelt en,
I Mordorland, ver skigar altid sto.
En Ring att regjera dem, En Ring att fina dem.
En Ring att bringa dem o i mörk att binda dem
I Mordorland, ver skigar altid sto`
  },
  191: {
    language: "c.hal",
    author: "Prai Jei",
    content: `Taran lemasha vul Eldarem mat-ushe suna,
Vifim u Casada rulat em sor' vad'udum,
Mem u beobara Nom shu tioda ji u na,
Umu da Tolasha Rulat um tolash' dalum
Em romat Mordora shil usotus.
Uma lemasha vul lara si ora, uma lemash' vul dos vemat,
Uma lemasha vul dos oru si mo dil em tolasha ji pemat
Em romat Mordora shil usotus.`
  },
  195: {
    language: "c.int",
    author: ["robocap", "испр. Ensjo"],
    book: book("I", 210),
    content: `Tres anellos pro le reges Elfes sub le celo,
Septe pro le seniores Nanos in lor salas de petra,
Novem pro le Homines Mortal destinate a morir,
Un pro le Senior Obscur super su throno obscur
In le terra de Mordor ubi le Umbras jace.
Un Anello pro governar los totes, un Anello pro trovar los,
Un Anello pro apportar los totes, e in le tenebras ligar los
In le terra de Mordor ubi le Umbras jace.`
  },
  196: {
    language: "c.n-eo",
    author: "robocap",
    book: book("NE", 209),
    content: `Tri ringoy por Elfoy rejoy sub chelo,
Sep por Nanoy mastroy en ilia shtona haloy,
Naw por mortema homoy al morto destinata
Un pro Malluma Lordo sur lia malluma trono
En Mordora lando kie Ombroy sternas.
Un Ringo por regi chioma ili, un Ringo por trovi ili,
Un Ringo por preni chioma ili kay en mallumo kateni ili
En Mordora lando kie Ombroy sternas.`
  },
  201: {
    language: "c.ena",
    author: "Gunnar Creutz",
    content: `Rag smidi gon *elvan bordoy sov seldau,
Mogol gon *dvarvan bayerdoy ad fy sadoy,
Momil gon renan askandoy fi sena danazhyagas,
Sin gon Ladan Bayerdau san fa ladan doshonau
Ad Onodoy Mordora ad foy foyti qeka.
Sin Smido boyren yamey, Sin Smido teyden mey,
Sin Smido foygen yamey ah ad ladau adra mey
Ad Onodoy Mordora ad foy foyti qeka.`
  },
  202: {
    language: "c.lis",
    author: "Ygor Coelho",
    content: `Dar sende kie falky merret kie winde,
Dundy mietet nor tile, brieky mailat,
Nuiti esankey mitry hele fawe tile,
Sinhti mietet him tile, sinhty swimat,
Mordor ligat, kale slupes dew sïke.
Sie merrit him de winde, tile alivit him de winde,
Sie dey frenit him de winde le sinhtelat dekievie,
Mordor ligat, kale slupes dew sïke.`
  },
  203: {
    language: "c.gwa",
    author: "Count Menelvagor",
    content: `Tri modrou de dechernien Eirev dan oebl,
seit te ríezh ar gorrien'n á lizó mein,
naw de'n denien verwel, an anko á shonked -
un de'r Chun Deover war i orsezh heb olou
en Tir Vordor, va wrowezh a' skewdó:
un Modrou zhe's kwledigov holl,
un Modrou zhe's kevel,
un Modrou zhe's kludov holl,
'g en teovalizien de's kelmev
en Tir Vordor, va wrowezh a' skewdó.`
  },
  204: {
    language: "c.deb",
    author: "Hans Straub",
    content: `alêph tritê phiõ Ykuèndiph throphil ilåkh påi tithåa
troti phiõ Ykhasadyph thlupil èåôkh påi ythypyph óióph tuåthrl
tèuti phiõ èuékhöphoõph thysyp uåö bli khöphoõ
tltur phiõ åroph thlpuil påi ythypyph åroph luilph tltièå
påi tåthrl Mordor, påi tuthri thrikuo kathlé.
lurph trtiê bli klthuil py thåipó, lurph trtiê bli khaphiê py thysyp
lurph trtiê bli khithêu py thåipó mou bli èåõkh påi dågro
khuthåö py thysyp
påi tåthrl Mordor, påi tuthri thrikuo kathlé.`
  },
  206: {
    language: "c.shem",
    author: "Josh aka jh",
    content: `Ruisa thre cujimid     Ijifima scijimindr
Sifin dwajfe lowdimid     stojne hajlimun or
Nijn minid mowtil     dijudhid tidoumjedh
Jan Deorce Lowdumid     deorce throjnudhoun us
Londudhod Mordora     Sjodowimouj mudlijod
Ruj Jan ajla rejljid     Ruj Jan ouma fijndjid
Ruj Jan ajla brujid     deorclux ouma bijdjid
Londudhod Mordora     Sjodowimouj mudlijod`
  },
  208: {
    language: "c.vli",
    author: "Viktoro 9",
    content: tonal(`gliag5 gio2 uog1 nuing1-tsiun2 hium1 bluo2,
gi5 uog1 txuek1-ngiu2 zuak1 niad5 nguim2 vleid5,
moi5 uog1 vlueng5 txiog2 kluong1-fue5,
xua5 uog1 dleid5 ngiu2 iop1 mion5 djuak2 dleid5
zuak1 pek2 tu1 mo1-do5 gop1 a1 flon2 dein3.
xua5 gio2 uog1 flio3 o1 xuag5 niad2, xua5 gio2 uog1 tliat3,
xua5 gio2 uog1 djai3 o1 xuag5 niad2 iam1 dleid4 siep3,
zuak1 pek2 tu1 mo1-do5 gop1 a1 flon2 dein3.`)
  },
  209: {
    language: "c.wen",
    author: "Jan van Steenbergen",
    book: book("W", 213),
    content: `Trzej andły pro rzedżu elfór set kłar czał,
Siecę pro duczu naninór ję kębrar saszeju,
Nów pro ludziu mrotału żudkatu a mroć,
Un pro doniu ciembierzy serz swej oskur tron,
Ję pąszy Mordoru wądź wąbry siej kiebtą.
Un andeł a rdżer łosz tote, Un andeł a łosz jęwnier,
Un andeł a tote łosz kolżer, I a ciembartać algar,
Ję pąszy Mordoru wądź wąbry siej kiebtą.`
  },
  210: {
    language: "c.ser",
    author: "Logan Kearsley",
    content: `Diu eren ketec hrai Elvenekec nuiec eta,
Uslin ketec hrai Dwarfek vec hgom hsutuec konac,
Usler ketec hOreb Dilamec praitepecki kwisec,
In ketec Rai Marepec castec pyatai su'katuec marepec
Ve Kata Mordora, hRakis korohwecki diwac.
Diuevya inen raikec kruisut, Diuevya inen ulohwec hsut,
Diuevya inen vachwec kruisut ko mornksi vec mar hsut
Ve Kata Mordora, hRakis korohwecki diwac.`
  },
  225: {
    language: "c.ave",
    author: "Harold Ensle",
    content: [
      {
        text: `Daktashri tas afenyo karv nelthorma
Redi avokanyo nerb samyarekya derk
Sodi akanyo nefant ronárvil nefro
Nosi avokano wal vobáltarak wal
Avetare Mordorhe melilara waltya
Daktashi nos fekro iakre, daktashi nos ponro kre,
Daktashi nos nenro iakre var suthro kre awalware
Avetare Mordorhe melilara waltya`
      },
      {
        name: "письменность Avesta",
        type: "image",
        image: pic225,
      }
    ]
  },
});

export const list = [
  lang1,
  lang2,
];