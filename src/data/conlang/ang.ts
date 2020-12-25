import { JAvidan } from "../authors";
import { make } from "../utils";

const common = { input: "0.7.0" as const, author: JAvidan };

const angur = make({ language: "c.ang", ...common }, {
  151: {
    content: `Gonthín can Reiníntal-Elfier nore ir nwel,
Zan Choríntal-Dwarfier paltínenet fadh cêana,
Gan Tocín-Yasier quunwed crochta,
Dan Chortal-Lescéare ochon Curt-Lescéare cêna
Ir Tôrenwa Mordor qua ir rachâin mandárin.
Gonth dan cinta cean tul, gonth dan tinya cean,
Gonth dan tolta cean tul ar ir Lescen pronta cean
Ir Tôrenwa Mordor qua ir rachâin mandárin.`
  },
  152: {
    variant: "old-type Angúr",
    content: `Onjwín can Reintal-Elfier ir nwelsút,
Zan Chortal-Dwarfier palt?nenet fadh cêana,
Gan Churtal Iyásier quunwed cazdúth,
Jan Chortal Lescéarë ochon Pwomth Lescéarë cêna
Dordalet Mordor qua ir rachâin mandárin.
Ojwo Dan rothúth cëan tul, Ojwo Dan lintolúth cëan,
Ojwo Dan etolúth cëan tul ar lescéaen clapúth cëan
Dordalet Mordor qua ir rachâin mandárin.`
  },
});

const arielur = make({ language: "c.ari", ...common }, {
  216: {
    content: `Gañ oñžunūn Ntōlkunʲōn-tāl-Élfim īř-Ñʷélī-sūt,
Dzañ Kkhōrunʲōn-tāl-Dwárfe barthúnīn-ēñ kīnāj phāddhāj,
Kañ Ntthōkunʲōn-tāl-Jāţim pūsumātthīnúkh krūkhanúţ,
žañ Kkhōrʲō-tāl-Lheskim Kortī-okh-Lheskim kānāj.
Tōřī-ēñ wa Mórdor kʷa jēř-Gřakhūnūn kʲembāţi.
žañ óñžū kīnʲaţ akíñ tūlh, žañ óñžū tīnʲaţ,
žañ óñžū ntóltaţ akíñ tūlh āř īř Lhéskī-ēñ-prōñtaţ.
Tōřī-ēñ wa Mórdor kʷa jēř-Gřakhūnūn kʲembāţi.`
  },
});

const arathur = make({ language: "c.ara", ...common }, {
  153: {
    content: `Chae ýnth am i Elfe-Ndýlg noer i-Nuel,
Lae am i-Dhwarfe-Chýr é' mbalthithwa fadh,
Gae am Iáse-Ndhóg gwanael 'ruchadh,
Al am i-Lhesce-Chor och Lhesce-Gortig
Én i-Dhorwa Vordor cae iem Réch ivandath.
Al 'wuth giniaeth dul, Al 'wuth diniaeth,
Al 'wuth dolthaeth dul a én i-Lhesc bronthaeth
Én i-Dhorwa Vordor cae iem Réch ivandath.`
  },
});

export const list = [
  arielur,
  angur,
  arathur,
];
