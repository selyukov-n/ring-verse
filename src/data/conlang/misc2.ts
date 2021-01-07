import { sources } from "../sources";
import { make } from "../utils";
import pic594 from "../pic/594weeblang.png";

const makeItem = <L extends string>(language: L, author: string, content: string) => ({
  language,
  author: author + " [reddit]",
  content,
  source: sources.reddit_conlang,
});

const weeblang = makeItem("c.weeb", "ZetDudeG", `ura jedasu ji erufo tago pi to hottsu
mui ji shijonno atooto pi to noji ruha ra
ronoi ji toshisho koto pi go joto ha
tsoni ji anno atoo fuma pi to annu gattsu ra
Morodoro sane ri, sene jige go noto
tsotso jedasu wo chiide go kato
tsotso jedasu wo chiide go inite
tsotso wo chide go gayumewu di amme go ikeroni
Morodoro sane ri, sene jige go noto`);

const tertrih = "tertrih";

export const reddit = make({ input: "2.4.0" }, {
  566: makeItem("c.kire", "HolyBonobos",
    `Iježne šatl góšà Óqótasjažice Svátedi bužà vuži,
Fká góšà Irvóqóžice Camcirvadi stà dăcnydi gacʼešóžice tožedádi,
Áše góšà mokandažice esfĕ; lurasj dăcnydi nyt se,
Zdó góšà Irvóqóži Ktrsjadi là óqómaraži ktrsjadi
Stà Tážeži Mordoradi šqóqá ktruqáce se.
Iježnă Zdó kópjà dăcnydzo ngoq óqácesku, Iježnă Zdó kópjà dăcnydzo šáckasku,
Iježnă Zdó kópjà dăcnydzo ngoq trotesku ci stà ktrsjaži dăcnydzo fecasku,
Stà Tážeži Mordoradi šqóqá ktruqáce se.`),
  567: makeItem("c.jod", "Oj742", `Saora trisi mo po emaijao Elfi la spi eklaoda,
Sena mo po ediskao Dwaafi la spa pan keimam vadao,
Kina mo po eladao kyuki vi viko wo moroiz,
Waca mo po ediskao maki la spu pan joma maki
La Moaadoaam yugi vi la ebelaon roro.
Saora waci mo fo yagox wo aopao, Saora waci mo fo skubox wo pao,
Saora waci mo fo qagox wo aopao zo ozwai nisko la spa mala wo pao
La Moaadoaam yugi vi la ebelaon roro.`),
  568: makeItem("c.tuo", "SVEN_THE_DUCK", `xälz yinä upula ilvhölixic ximiizku
ukla yinä twaavhölixac mal bijiyokivxkicoc
juoc yinä miyixonvanaxic tiböjoliikimä
axa yinä vhölizotuix nal buotayëmünzotuico
vhanzi yinä motoc ti'yähü txotzi wäjikcimä
axa upula uxitaahu maxëco
axa upula tviyahu max zotuico vaa ziijithu max
vhanzi yinä motoc ti'yähü txotzi wäjikcimä`),
  569: makeItem("c.san", "Leshunen", `Fasa mired aadas Elvan Erunan beina aluvran
Disa aadas Duarf ituvanar na arudem duv kavran
Tesa aadas Men ruloen tahan idiil ensanan
Ansa aadas sa-Erunan dezanashi fal sa-eruyaz
Na navkanta duv Mordor alkan rulinan denuse
Ansa mired erushen runav naluer, ansa mired devrushen runav
Ansa mired kavoshen runav naluer tashtiri na dezan azose runav
Na navkanta duv Mordor alkan rulinan denuse`),
  570: makeItem("c.nlb", "SqrtTwo", `Tez righoz ku Elfu Rigziz bash celli.
Sif ku Manshen Sinhaz in zez ish shutan koridorez.
Kyun ku mattali menez, jen sa kondeni mattaw.
Wan ku Krai Sinha in hish krai trone.
In Mordor jemya, jon senkoz yaka.
Wan righo rigzaw eqayn zez, wan righo lokaw zez.
Wan righo jetimaw zez ku ton en in kraitaz taya zez.
In Mordor jemya, jon senkoz yaka.`),
  571: makeItem("c.goi", "EliiLarez", `Tea Kuogāʻei, e vhosoro ai Łʼuoakūoiwani,
Tsue Kuogāʻei, lēriakʼiaʻemaiqʼo ai Ṣūhniekūoiwani,
Kū Kuogāʻei, thei hmoaqʼaqha Theiāhraesdaþʻaiwani,
Xai Kuogāʻei, eathoe kʼetʻerepa Eathoe Kūoiʻawani
E nGeig eithotē E Wordor Qhiroq.

Xai Kuogāʻei, eo maikʼa iphaoheða,
Xai Kuogāʻei, maikʼa qʼiokheða,
Xai Kuogāʻei, eo maik þiurheðaqʼa e teathoeoeqo rīłheða
E nGeig eithotē e Wordor Qhiroq.`),
  572: makeItem("c.tauraj", "Hjuldahr", `Vyrae Ilastyrx ishar isas Elven Kaejarix andaj isas esqiar,
Vyäē ishar isas Dwarf kaejarix nira kajas hāstax qar stayr,
Vywne ishar Mortai Maja har̄kaq qor darsata,
Vyren̈ilastyr ishar Dakaj Kaejari onai majari dakajx-khoroni,
Niraïisas Lakaj qar Mordor kioraïisas Dakaj lyajra.
Vyre Ilastyr qor qhora kejas āej, Vyre Ilastyr qor sojau kejas,
Vyre Ilastyr qor heraqis kejas āej alo nira isas dakajex faeyir kejas,
Nira isas Lakaj qar Mordor kiora isas dakajx lyajrax.`),
  573: makeItem("c.drak", "mantisinmypantis", `Drahg krahnz faar Eylven Draag fahr uundohs faar logvind,
Sev faar Duuwahrf-Draag thahr bahst ahn myuur ain,
Nohrd dey’doom Maan nekroz,
En Faar Zuurog-Draag zey’uz zuurog draagstuul gohf
Faar Lohris deh Mourdour hur liizuurog fohn.
En krahnz thur ahl rehl, en krahnz thur lohkah,
En krahnz thur ahl yezat end zuurog ain thur deyn
Faar Lohris deh Mourdour hur liizuurog fohn.`),
  574: makeItem("c.man", "nenwe", `nled kor-ma na li se: mnel nu: ji lʔed rʔan
tʔos-ma li nuk kund se: teh gnod mpan mi
nter-ma na li phir mbra:t ji nder-do
er-ma na mor da:h khund rʔo ji mor kund
se: ma: lo mor-dor se:-j lum dub
er kor-ma na vrəds mʔo te
er kor-ma na khir te
er kor-ma na tuk mʔo te
ja se: du mi wed te`),
  575: makeItem("c.van", "dragonsteel33", `imum mu hoinku le-dáya ghimy-emeta
imum koi hoinku le-gaz-diñalya dware-nakta
imum cazh hoinku le-izoya ei-ojta
imum va hoinku koya-auraya koya nakta
koitku yudineyaj mordor-emyosha
junsin mazhumoi va hoin, junsin ceusumoi va hoin
junsin mamumoi va hoin, junsin koiya noloimúmoi va hoin
koitku yudineyaj mordor-emyosha`),
  576: makeItem("c.unirom", "alizo_", `Ttrex anilyos pa’les’ reyes-elffox tebaxo dil’çēlo.
Sēte pa’les’ signiores inanos n’sus corrittores di’pētra..
Nōve pa’ les fombres morttalis testinaus a morï,
Umo pal’ signiore scuro n’su ttrono’scuro
N’ le’Ttērra di’Mordor tonte les sombras ‘tan.
Um anilyo qi’governäa’ttoto, Um Anilyo qi’lus incontträa,
Um Anilyo qi’lus traëa’ttotos ét combinälox n’le’scuritat.
N’ le’Ttērra di’Mordor tonte les sombras ‘tan.`),
  577: makeItem("c.rod", "MihailiusRex", `Chi drari dle Elvikpotri zu syorh,
Shid dle Netikgarhi në lökonri peadik,
Nä dle färik virher srut mrupni,
Ël dle är Dzyurgar be syën dzyukawt,
Në är Tar Mordor kwe Fawditri zemle.
Ër Drar at toju gokni, Ër Drar at dzen lashni,
Ër Drar at'eydzen rötni e në dzyugyurh dzen mlochni.
Në är Tar Mordor kwe Fawditri zemle.`),
  578: makeItem("c.breg", "PikabuOppresser228", `Сан - эльф но ванн фор, дар соръ під да,
Счi - ґном фор, дар iщi раш хол ни та сум,
Кюу - смерть раш нінґэн ніє, дар еен най
І іч - Ак Лорхд фор, єохън трон на,
Нан вечън тма раш Мордор ні.
Ан іч рхинн іх ві рул, іх саґъс фор да,
Субэт до ся кол і асэр сеедэ
вечън тма раш Мордор ні.`),
  579: makeItem("c.salp", "Salpingia", `irsu rankylys Pantynama imi nehuis
hąnau Tūrama ardena sēnyšu
endeša Šneitama Draghma murago šneinama
emus Sēri Isiavonu sērā klõō
muē rankylē vise rāšylavyrės
muē rankylē adhrērės
muē rankylē vise rāšylavyrės
a sērāty sukrērės
Mordor plõnā ku ašeām pomenēno`),
  580: makeItem("c.sors", "Achsenmacht_", `Sest fe nōġiq ri fe mōrdi mar leg fefašq fe pujr žlo nōgriro,
Sest fe nōneng ġiq ri fe neng mar leg ne bo gre nōpog ri e harzas,
Sest tōdem nōnerb tōǧomli ri dem e,
Sest fe ōft neng ġiq me ma ōft nōqahto
ne fe nōn ri mordor korō feriv fe nōdea eġ.

Fem ōhr bo ga eġ griro, fem ʾuʾo bo eġ griro,
Fem pošq bo ga žmu mō čōzev bo ne fe hōft,
Ne fe nōn ri mordor korō fe nōdea feriv eġ griro.`),
  581: makeItem("c.nubve", "caitikoi", `Ban ruc milyn elv-bacuia dzoro cha
Inicia milyn du’orf-bacuia côvt ce’gret tuvri
Gata milyn dasvra ecu’r maôt myžada
Yu milyn vi mavt hyru côvt ba’mavt lĭxu
Bësin mavü dal côvt bë lo Mordor
Yu ruc yan yuāa, yu ruc ce’t siro
Yu ruc côvt vi mavt’am ce’t hrāta tö ce’t dro
Bësin mavü dal côvt bë lo Mordor`),
  582: makeItem("c.shortswede", "shortswede", `Drie ringer fër d'albkeninger ënner den hemel,
ziwen fër d'dwèrgherscher in sien stenhaler,
nien fër d'steirblige manner dumda til at dâi,
En fër den mëyrke herschere â sien mëyrka troon
in den land af Mordor hôr d'schieter leie.
En ring fër at règeere iwer déi al,
en ring fër at finna déi,
en ring fër at tilbringa déi al on binda déi in d'mëyrker.
In den land af Mordor hôr d'schieter leie.`),
  583: makeItem("c.sho", "Schnitzelinski", `Shó anyeka ta-ilvenir alkána kalma iyu,
Ká koi ta-nirua wakána no-pakya rava,
irek koi ta-samáa thíndés thoru,
Djín koi ta-sharu wakán a-sharu yáatera;
A-Mordor hera iká sharek egu.

Djín anyek kánés ti-kana, djin anyek lié-ferás ti-kene,
Djín anyek feniás ti-kana, a-sharkú istés ti-kene,
A-Mordor hera iká sharek egu.`),
  584: makeItem("c.alef", "Crown6", `tòi àtini eligànī ōkei zàn shìkō,
zèt hī pòskei yurònī hakàbio lànae,
nàe zimùdrī kànī, turèrī zimuxèrī,
hè-tto onùtoi yurònoi hùl èisoe nùtō otùllao
làdō Mordòr-ttoe àkō Ònube tunèsan.
hè àtin ìna ottàen mèles ìles, hè àtin ìna navēn ìles,
hè àtin ìna fèren mèles ìles kè nòddao nalàen ìles
làdō Mordòr-ttoe àkō Ònube tunèsan.`),
  585: makeItem("c.nyev", "Dr_Chair", `Lo Toykösü zi Elfxtra Obabasü kolva eryejxtra,
Buca zi Dwarfxtra Myarsü kolva joaxtra,
Bulo zi Haxtra lö xöbrö zoy hitel üvsü,
Ca zi Myarxtra Hfetsü dyen yawkrixtra hisü
Dyen Diveteyxtra Mordor, dyen löxtra Hi zabrej.
Ca Toykösü zvo lö ce kwarö, Ca Toykösü zvo lö thoyna,
Ca Toykösü zvo l’apreke kwarö qe dyen hixtra zvo l’yamca
Dyen Diveteyxtra Mordor, dyen löxtra Hi zabrej.`),
  586: makeItem("c.lal", "ItsAPandaGirl", `Ni pata lema hera ki rirupu.
Ni papa lema hera gigi.
Ni gura tuna hera giki.
Lu lema me heja herupapu hera gi,
Me lu ve.
Gi rirupu lemaran ka.
Gi rirupu leleruran ka.
Gi rirupu neparan ka,
Ha neran ka me lu.
Me lu ve.`),
  587: makeItem("c.santah", "phairat", `Su ılli Añajraohuli Nentili tey ıl savanfa, sem vimli hayayıkli,
Su ılli Pañajaoli Xazadli nıyi zihichechili, zet vimli hayayıkli,
Su ılli Mañushyali Mantayali tey kocheyiyik cockcad, ngao vimli hayayıkli,
Su ıl Pañajaohu Sıl neu cubanglong marna, nen vim hayayık,
Nıyi ıl ralesh Mordor uchu gep ılli ngaomeuli bichlıngıkli.
Nen vim añajr manli, nen vim jıpr tamot,
Nen vim zenamr tamot le nıyi kıneu zezincr.
Nıyi ıl ralesh Mordor uchu gep ılli ngaomeuli bichlıngıkli.`),
  588: makeItem("c.thak", "romain122", `Naru T'in xe an p'un k'a sink'i lanti Pam-elufem,
Naru Tenu xe sutem fita k'a sink'i lanti Pam-aset'am,
Naru Fa Se k'a sink'i lanti xe kunu k'a tixi p'ufi p'isa Watanim,
Naru Fa xe shuta pam isut'u k'a sink'i lanti Pam Isut'u,
Ine miti tipe mit'eni wixa xe Mut'a Murudu,
Xan naru fa k'a sink'i pam tipe, xan naru fa k'a sink'i hank'e,
Xan naru fa k'a sink'i fata nu xe isut'u fusu tipe,
Inem miti tipe mit'eni wixa xe Mut'a Murudu.`),
  589: makeItem("c.dellek", "Imuybemovoko", `San-ge miljamey nay yulä Elfai-Zaduneyõ
Łe-san-ge miljamu Dwarfai-Zaduneyõ takai nerlekanahej
Kaz-ge miljamu zoladjmayõ samayõ zoladjma-vetanay Deyuyejõ
Ge Avun Zaduyõ avun nerzigam
Mordor nertak cu yiSõkijayej mal
Ge Miljam sema zaranmayõ, ge Miljam sesau yisema
Ge Miljam sema vemanmayõ zidj nerhime talenma yisema
Mordor nertak cu yiSõkijayej mal`),
  590: makeItem("c.horg", "HaloedBane", `Mir kanrikins tran lasvuilins kui gashaul.
Shenshen tran dilkarvaulans u pitokrionis nu uns.
Shenmir tran hiomanis felanglaiglari tuk felam tranasham.
Shen tran zishjaune main tanarrony zishter.
U Mordore, ti has sospelins jum.
Shen kanri tran naupom vutuns, shen kanri tran mailom uns.
Shen kanri tran mijem vutuns, nolkum uns u zish.
U Mordore, ti has sospelins jum.`),
  591: makeItem("c.luth", "OfficialHelpK", `Þrak Reigar kla Alfkínugarn iþ hejlum,
Sjú kla Dvarfherurn irn zimna steinaholar,
Örg kla öurdliga menskur ðejmakka ky öur,
Ón kla agh Myrle Heran ja zimn myrne þrún
Irn Mordor znal Skykuna læak.
Ón Reig kla ky rejúr nuþra hael,
Ón Reig kla ky fynd nuþra,
Ón Reig kla ky nuþra hael irn myrlin þæm.
Irn Mordor znal Skykuna læak.`),
  592: makeItem("c.vis", "Splendidissimus", `łEŧϵMlaţâsalDa ûrMaraƧolnâƨѮlandhomeDora ûmBarlenêŢiş
łVeƨeûuDa ûrMaraMlϵcrazVisochiDora ûmFϵndosέsâЄomunDôdDoţ
łMϵlûuDa ûrѮlandeDora ûmSasϵleramimoYňarani
łIleûuDa ûrIlMϵcrazHariraDora ûmIlŞêboraśHariraDraţDoţ
ṿIlŚiƨrôtMordorDoţ ûmIlSualôt ṿNinHarirani
łIleMaţâsalDa ṿGaramDra Gerdereno - łIleMaţâsalDa ṿGaramDil Ruananono
łIleMaţâsalDa ṿGaramDil Neroco ûolo łGaramDil ṿIlHaruiDoţ Ƨalamomo
ṿIlŚiƨrôtMordorDoţ ûmIlSualôt ṿNinHarirani`),
  593: makeItem("c.puskat", "linksfan", `Tipa̋ ameźi̋ tif Pa̋źta siff staźta tasri bihźi̋r,
Akwi̋ tif tapra̋ta siff hswűa̋ hpih pasapi̋ pi̋ket siff mwűs,
Tif tispű tispwara, klamri̋r hka̋ Ke aserzka pasa, serf,
Si̋ tif Tapra̋a siff Drakű er kű Zena̋ siff Drakű
Hpih Daďir siff Murdur sa drakűm yűr.
Si̋ ameź miź kla̋ar kezwasi̋, si̋ ameź miź plisi̋,
Si̋ ameź miź kla̋ar plii̋r źaa̋, hpih Drakű, miź kestrazi
Hpih Daďir siff Murdur sa drakűm yűr.`),
  594: {
    ...weeblang,
    content: [
      { text: weeblang.content },
      {
        type: "image",
        image: pic594,
      }
    ]
  },
  595: makeItem("c.atlaans", tertrih, `Dree Ringen for de Elfen Kooningen onder de himel
Sieb for de Dwarf Heren in esser hall fon steen
Neen for stervlicha manen unken su sterven
Een for de Dunkela Her ouf haar dunkela tron
In de land fon Mordor wo de shaten ar
Een Ring essech all su behersh, een ring essech su find,
Een Ring essech su bring, en in de dunkel essech bind
In de land fon Mordor wo de shaten ar`),
  596: makeItem("c.tohan", tertrih, `Tree rings for thash Elfin Kongs onder ther ski
Sev for thash Dwarf Lords in theys Hall ov Ston
Ni for mordal mensh doom'ed tu tood
On for ther darker Lord on hish darkie thron
In thee land ov Mordor wher thee shadows ar
On ring them all too control, on ring them too find
On ring them too bring, an in thash darkhid bind
In thee land ov Mordor where thee shadows ar`),
  597: makeItem("c.tunsk", tertrih, `Drie ringe for de Elben koninge onder de hemel
Seben for de Dwarg Harre in der halle fram staan
Nien for Dødleg Manne doomd ad douwen
Aan for de Dark Harr an hes dark troon
In de Land fram Mordor wer de skadouwe leg
Aan ring harrsken dem alle, aan ring finden dem
Aan ring bringen dem alle and aan ring in de darknass bind dem
In de Land fram Mordor wer skadouwe leg`),
  598: makeItem("c.honal", tertrih, `Tri rini fo dano elvena konini undo dano ski
Sivo fo dano dwarfa lordi in arono halla vono stona
Nino fo mordala mani unchi sterbare
Ono fo dano Dunca Herro ofo hiono dunca trono
Ina dano lando vono mordoro vo dani shati lighi
Ono rina behershare arin alli, ono rina findare arin alli
Ono rina bringare arin alli, ano bindare ina dino darchida
Ina dano lando vono morodoro, vo dani shati lighi`),
  599: makeItem("c.atlan_as", tertrih, `þli lingu fal þe Alfun Konungu onþul þe Himun
Fiö fal þe þvalgu Helal in þefel hal fan Fein
Nien fal Fauþlea maþul unæn aþ fleiven
Einn fal þe þögen hela af þögen hlan
In þe lanþi fal Molþol þo þe Fatun bel
Einn lingu effel all aþ Behelf, einn lingu effel aþ finn
Einn lingu effel aþ brina, einn in þe þögen effel binn
In þe lanþi fal Moldol þo þe faten bel`),
  600: makeItem("c.atlan_md", tertrih, `Droi rini na hon elvo konina undo hilovinonon
Zeba na hon dwarfo konina sona kamalon
Noin na sufa unha subare
Oino na dar tuna xharan tuna dunonon
Dul mordoro londulupu luga dul dila
Oino rina bahaara ara oila, oino rina vinda ara oila
Oino rina branga ara oila, anno dul dunilupu buna ara
Dul mordoro londulupu luga dul dila`),
  601: makeItem("c.atlan_hi", tertrih, `tro rini na ilfo hononinanun unto danelofenopun
sipa rini na dwarbo danaharana shonu hamanan
non rini na shubi uni neninun shubare
ono rina na thuna danaharana thuno thalatrunopun
mordoro thululondulupu thuni thuludilopuli
ono rina pahaara arana ola, finda ono rina arana ola
ono rina essabanga arana ola, anno essapuna thuluthunilineli
mordoro luga thululondulupu thuni thuludilopuli`),
});
