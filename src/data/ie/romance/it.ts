import { messages } from "../../../intl";
import { JAvidan } from "../../authors";
import { sources } from "../../sources";
import { fromLotR, make } from "../../utils";

const eld = (name: string) => `${name} [${sources.eldalie}]`;

const it = make({ language: "it" }, {
  82: {
    input: "0.2.0",
    name: fromLotR(),
    book: ["I-1", 90],
    author: "Vicky Alliata di Villafranca",
    content: `Tre Anelli ai re degli Elfi sotto il cielo che risplende,
Sette ai Principi dei Nani nelle loro rocche di pietra
Nove agli Uomini Mortali che la triste morte attende,
Uno per l'Oscuro Sire chiuso nella reggia tetra
Nella Terra di Mordor, dove l'Ombra nera scende.
Un Anello per domarli, Un anello per trovarli,
Un Anello per ghermirli e nel buio incatenarli,
Nella Terra di Mordor, dove l'Ombra cupa scende.`
  },

  147: {
    input: "0.7.0",
    book: ["I-2", 91],
    author: JAvidan,
    content: `Tres anellos per los Elfos-res sotto le cielo,
Sette per los Signores-Nanos in loros salones di pietra,
Noves per los Uomos-Mortales condannatos a morire,
Uno per le Scuro-Signore su suo scuro-trono
In la terra de Mordor dove las ombras coricanne.
Uno anello a gubernare li tutti, uno anello a riscontrare li,
Uno anello a recare li tutti e in la tenebra rilegare li
In la terra de Mordor dove las ombras coricanne.`
  },

  266: {
    input: "0.11.3",
    author: `Berúthiêl [${sources.elbenwald}]`,
    content: `Tre anelli per i Elven-re sotto il cielo,
sette per i Nano-signori nei loro corridoi della pietra,
nove per gli uomini mortali hanno condannato morire,
uno per il signore scuro sul suo throne scuro
nella terra di Mordor in cui le ombre si trovano.
Un anello per regolarlo tutti, un anello per trovarli,
un anello per portarli tutti e nella nerezza li legano
nella terra di Mordor in cui le ombre si trovano.`
  },

  403: {
    input: "0.16.0",
    source: sources.tolkien_cz,
    name: fromLotR(),
    author: "Elémire Zolla",
    content: `Tre anelli per i re degli Elfi sotto il cielo,
Sette per i signori dei Nani nelle aule di pietra,
Nove per gli uomini votati alla morte,
Uno per il Signore tenebroso sul cupo trono
Nella terra di Mordor dove posano le ombre.
Un unico anello per reggerli tutti e trovarli
E adunarli e legarli nel buio,
Nella terra di Mordor dove posano le ombre`
  },

  512: {
    input: "2.1.0",
    name: fromLotR("2019"),
    author: "Ottavia Fatica",
    content: `Tre Anelli ai Re degli Elfi sotto il cielo,
Sette ai Principi dei Nani nell'Aule di pietra,
Nove agli Uomini Mortali dal fato crudele,
Uno al Nero Sire sul suo trono tetro
Nella Terra di Mordor dove le Ombre si celano.
Un Anello per trovarli, Uno per vincerli,
Uno per radunarli e al buio avvincerli
Nella Terra di Mordor dove le Ombre si celano.`
  },

  605: {
    input: "2.4.5",
    author: sources.lyricstranslate.makeAuthor("Ser_Flakky"),
    content: `Tre Anelli per gli Elfi-re sotto il firmamento,
Sette per i Nani-signori nei loro saloni di granito,
Nove per gli Uomini Mortali, sui quali la morte ha sopravvento
Uno per il Signore Oscuro nel suo trono di nero scolpito
Nella Terra di Mordor, dove le Ombre han stanziamento
Un Anello per dominarli tutti, Un Anello per trovarli
Un Anello per ghermirli tutti e nel buio incatenarli
Nella Terra di Mordor, dove le Ombre han stanziamento`
  },
});

const rob = make({ author: "robocap", input: "0.8.0" }, {
  192: {
    language: "it",
    name: messages.names.literal,
    book: ["I-3", 91],
    content: `Tre Anelli per i Re degli Elfi sotto il cielo,
Sette per i Signori dei Nani nelle loro aule di pietra,
Nove per gli uomini mortali destinati a morire,
Uno per l'Oscuro Signore sul suo oscuro trono
Nella Terra di Mordor ove si stendono le Ombre.
Un Anello per dominarli tutti, Un Anello per trovarli,
Un Anello per ghermirli tutti e nel buio incatenarli
Nella Terra di Mordor ove si stendono le Ombre.`
  },
  194: {
    language: "egl",
    variant: "феррарский диалект",
    book: ["I-fe", 95],
    content: `Tri anèl par i re di Èlf sòt al zzèl,
Sèt par i Sgniòr di Nan in t'lór camra ad prèda,
Nóv par i òm mortàl destinà a murìr,
Ún par al Scùr Sgnòr sul ssò scùr tròn
In tla tèr ad Mòrdor dóv li Ómbar a'szténd.
Ún Anèl par cuntrullàral tòt, ún Anèl par truvàral,
Ún Anèl par ciapàral tòt e 'ntal scùr ligàral
In tla tèr ad Mòrdor dóv li Ómbar a'szténd.`
  },
})

const it2 = make({ language: "it", input: "2.3.0", author: sources.lyricstranslate.makeAuthor("doctorJoJo") }, {
  530: {
    content: `Tre Anelli agli Elfici Sovrani sotto la volta celeste,
Sette ai Nanici Signori ognun nella sua petrosa reggia,
Nove ai Miseri Mortali dalle sorti funeste,
Uno al Sire Tenebroso che in tenebra troneggia,
Nella Terra di Mordor che l’Ombra riveste.
Un Anello per domarli, un Anello per trovarli,
Un Anello per ghermirli e nella tenebra incatenarli
Nella Terra di Mordor che l’Ombra riveste.`
  },
  531: {
    content: `Tre Anelli agli Elfici Sovrani sotto il cielo nell'eternità
Sette ai Nanici Signori nelle lor rocciose aule sono,
Nove per i Miseri Uomini destinati alla mortalità,
Uno all'Oscuro Sire seduto sul suo oscuro trono,
Nella Landa di Mordor dove l'ombra si cela.
Un Anello per domarli, Un anello per trovarli,
Un Anello per ghermirli e nell'oscurità incatenarli,
Nella Landa di Mordor dove l'ombra si cela.`
  },
  532: {
    content: `Tre Anelli agli Elfici Sovrani sotto il cielo stanno,
Sette ai Nanici Signori nelle lor petrose aule sono,
Nove agli Uomini Mortali che a morte vanno,
Uno all'Oscuro Sire sul suo oscuro trono,
Nella Terra di Mordor ove l’ombre giacciono.
Un Anello per domarli, Un anello per trovarli,
Un Anello per ghermirli e nell'oscurità incatenarli,
Nella Terra di Mordor ove l’ombre giacciono.`
  },
});

const dialects1 = make({ input: "0.13.0" }, {
  282: {
    language: "vec",
    variant: "трентинский диалект, зона Роверето",
    author: eld("Naerfindel"),
    content: `Tre anei ai re dei elfi   sotto el zel che risplende
Sete ai prinzipi dei nani   nei so forti de prea
Nove ai omeni mortali   che la triste morte i speta
Uno per el sior scur   serà nela so' regia tetra.

N'anel per domarli,   n'anel per trovarli,
n'anel per embroiarli   e 'n te 'l strof encadenarli
nela tera de Mordor   e do che l'ombra strova la vem zo!`
  },
  283: {
    language: "lmo",
    variant: "вальтеллинский диалект (valtellinese), зона Тирано",
    author: eld("Erumer"),
    book: ["I-v", 93],
    content: `Tri anei ai re da'i elfi sut'al ciel ch'al sbarlugina
set a i principi d'i nan 'ndai sò ca' de sas
nöf a 'i om murtai ca la triste morte 'i specia
ün par al Sciur Scür serà ne la scüra ca'
'nda la terra de Mordor 'ndua l'umbra la ve' giù
'n anel par badentai 'n anel par truvai
'n anel par ciapai e al scür ligai
na la terra de Mordor 'ndua l'umbra la ve' gi`
  },
  284: {
    language: "it-center",
    variant: "римский (romanesco)",
    author: eld("SirGatsu"),
    book: ["I-r", 98],
    content: `Tre brillocchi a li capoccia dell'erfi
Sotto er celo che sbrilluccica
Sette a li capoccia de li nani
Ne'e'loro rocche de pietra
Nove a li ommini che hanno da mori
Che na triste morte je spetta
Uno pe l'oscuro capoccia
Chiuso ner suo palazzaccio

N'brillocco pe domalli
N'brillocco pe trovalli
N'brillocco pe ghermilli
E ner buio incatenalli
Na tera de Mordor
N'dove a ombra nera scenne.`
  },
  285: {
    language: "it-center",
    variant: "sabino / Reatino",
    author: eld("Astrid"),
    content: `Tre anelli a li re dell'Elfi
Sotto lu cielo che resplenne
Sette a li principi dei Nani
Ne li loro castelli de pietra
Nove all'omini che morirao
Uno pe' 'l signore oscuru
Renchiusu nello seo palazzacciu

'N anello pe' domalli
'N anello pe' trovalli
'N anello pe' pijalli
E nel buio incatenalli
Nea tera de Mordor
'Ndo' l'ombra oscura scenne.`
  },
  286: {
    language: "lmo",
    variant: "беллинцонский диалект",
    author: eld("Fíriel Tindómerel"),
    book: ["I-tic2", 94],
    content: `Tri anei pal re dai elfi sut'al ciel che brila
Sett pai principi dii nan int'ai so stanz de sass
Nöf pai oman murtai chi la mort i specia
vun par el scior scür inta la so regia scüra

Un anel par duminai
Un anel par truvai
un anel par ciapai
e in tel bui incadenai
nala tera da Mordor do cal bui al vegn giò`
  },
  287: {
    language: "it-center",
    variant: "тосканский / сиенский (Senese)",
    author: eld("Talman"),
    book: ["I-s", 97],
    content: `þre anell'a' re dell'elfi sotto 'l cielo 'he risplende
sette a' principi de' nani ne' loro pʰalazzi ði pʰietra
nove all'omini mortali che devano stiantà
uno all'oscuro signore 'hiuso nel su' pʰalazzo þeþro
nella þerra ði Mordore ðove ci fa parecchio buio.
'n'anello pe' domalli
'n'anello pe' trovalli
'n'anello pe' chiappalli
e nel buio 'ncaþenalli
nella þerra ði Mordore ðove ci fa parecchio buio`
  },
  288: {
    language: "vec",
    variant: "бизиакко (bisiacco), между Тимаво и Изонцо",
    author: eld("Pièveloce Mezzoelfo"),
    book: ["I-b", 95],
    content: `tre anei pai re dei elfi sot al ciel illuminà
Set ai sprinzipi dei nani dentro ale roche de piera
nove ai omeni mortai che la trista morte i speta
Un par al sior scur serà in tal scur castel

un anel per domerli un anel per trovarli
un anel per ciaparli e in tal scur incadenarli
in ta la tera de Mordor andove che l'ombra scura vien xò`
  },
  289: {
    language: "vec",
    variant: "трентинский диалект, зона Валь-ди-Кембра",
    author: eld("MistayA"),
    content: `Tre anei ai re dei elfi sotto el zel che risplende
Sete ai prinzipi dei nani nele lor casote de sas
Nove ai omeni mortali che la triste morte i speta
Uno per el sior scur serà nela so' casa tetra.
N'anel per domarli, n'anel per trovarli,
n'anel per ghemirli e nel strof encandenarli`
  },
  292: {
    language: "vec",
    variant: "диалект Градо (gradese)",
    author: eld("rosieposie"),
    content: `Tre aneli ai re dei Elfi soto il sielo che riluse
Sete ai principi dei Nani in te le loro roche de piera,
Nove ai Omoni Mortali che la triste morte speta,
Un pel Oscuro Sior serao intel palasso nero.
Intela tera de Mordor, indola l'ombra nera vien zò.
Un anelo per domali, un anelo per catali,
un anelo per grampali e intel scuro incatenali,
intela tera de Mordor, indola l'ombra scura vien zò.`
  },
  293: {
    language: "it-south",
    variant: "калабрийский",
    author: eld("Falby"),
    book: ["I-c", 101],
    content: `Tri anialli alli re di Elfi sutta u cielu chi risplendadi
Sette alli principi di Nani intra i loru rocche e petra,
Nove all'uomini mortali ca a triste morte aspettadi,
Unu all'uscuru Sire chusu intra a reggia scura.
Intra a terra e Mordor, du l'umbra nivura scindadi.
Na niallu pe li dumare, na niallu pe li truvare.
Na niallu pe li ghermire e allu scuru incatenarli.
Intra a terra de Mordor su l'umbra scura scindadi.`
  },
  294: {
    language: "scn",
    variant: "zona di Agrigento",
    author: eld("Síladelin & Claudio"),
    content: `Tri Aneddi a lu Re di li Elfi sutta lu cielu ca luci,
Setti a lu Principi di li Nani ni so casteddi di petra,
Novi all'omini mortali ca la morti stannu aspettannu
Uno pi lu Scuru Zi' chiusu nu palazzu niguru
Nilla Terra di Mordor unni l'Ummíra nigura scinni.
N' Aneddu pi cumannarli, N' Aneddu pi truvalli,
N' Aneddu pi piglialli e nu scuru attacalli.
Nilla Terra di Mordor unni l'Ummíra nigura scinni.`
  },
  295: {
    language: "lmo",
    variant: "варезийский (basso varesotto) диалект",
    author: eld("Omorzo_Cactaceo"),
    content: `Trii aneij al re d'i Elf suta 'l cèl c'al splend,
Set ai princip d'i nanett in d'i lur stans de sass,
Nef ai oman murtaij ch'la trista mort ai speta,
Vun par el sciur scur serà sù 'ndela vila scura,
'Ndela tera d'Mordor 'ndua l'umbra negra la vegna giò.
N'anell par dumaij, n'anell par truvaij,
n'anell par ciapaij e 'ndel buij incadenaij,
'Ndela tera d'Mordor 'ndua l'umbra cùva la vegna giò.`
  },
  296: {
    language: "it-south",
    variant: "монополитанский",
    author: eld("Anacarnil di Lond Rhynin"),
    book: ["I-m", 100],
    content: `Tra Enèddere pe i R-ré Elfi sòtte u cile che rèsplenne,
Sètte pe i Prengepè di Nène j-ìnde i lòre ròcche de piscke,
Nòve a l’Omene Murtèle che a trèste mòrte aspettè,
J-ùne pe u R-ré Scùre echjùse j-ìnde u tètre castidde
J-inde a Tèrre de Mordor, addò a Murescène gnùre s-scènne.
N’Enidde pe dumalle, N’Enidde p’acchjalle,
N’Enidde p’auuandalle i allu scùre ‘ngatenalle,
J-ìnde a Tèrre de Mordor, addò a Murescène cùpe s-scènne.`
  },
  297: {
    language: "lmo",
    variant: "бергамский диалект (bergamasco)",
    author: eld("Ramses II"),
    content: `Tri anei ai re di Elfi sota al ciel che l risplent
set ai principi di Nani and i so roche de preda
nöf ai om murtai che la triste mort la ia speta
v&uoml; per al scür Sciur serat an de la reggia scura.
An anel per dumai, an anel per truai
an anel per ghermii e an del fosch incatenai
An de la tera de Mordor anduè l'umbrea fosca la cala.`
  },
  298: {
    language: "it-center",
    variant: "ассизский, versante del Subasio",
    author: eld("frasiabella"),
    book: ["I-a", 98],
    content: `tre annelli pei re de j elfi sott'al cielo ch' arisplenne
7 pei principi dei nani 'nto le rocche de pietra loro
9 ai cristiani che onno da crepa' che andronno a fa' la terra pi ceci
uno pe lo scuro sire archiuso 'nto la reggia tetra
'n anello p' apparalli
'n anello p' artovalli
'n anello pe chiappalli
e 'nto 'l bujo 'ncatenalli
'nto la terra de Mordor do che la murigge scura scenne`
  },
  299: {
    language: "lmo",
    variant: "диалект Брешиа",
    author: eld("Elendiltheking"),
    content: `tre anei ai sior dei elfi sota al ciel ce l'è luminous
set ai principi dei nani 'ndele lor baite de preda
nöf ai om che i ga de mori
giù per el sior nero sèrat en de la so' nera ca'
'ndela tèra de mordor 'ndoe l'umbra la ve' scûra
en anel per domai, en anel per truai
en anel per ciapai e en de l'ombra 'ngabbiai
'ndela tèra de mordor 'ndoe l'ombra la ve' scûra`
  },
  300: {
    language: "it-center",
    variant: "marchigiano (юж. Марке и сев. Асколи)",
    author: eld("tac74"),
    book: ["I-m", 96],
    content: `Tre anelli pe li re dell'Elfi sotto lu cielu che 'lluppica
Sette a li capi de li nani 'rrentro le case de pietra
Nove all'omini mortali che li spetta la morte
Unu pe lu Re niru, 'rchiusu 'rrentro la casa scura
'lla la terra de Mordor, 'ddo ce sta l'ombra scura che cala
N'anellu 'ppe 'ddomalli, n'anellu 'ppe stroalli
N'anellu 'ppe 'cchiappalli e 'ttaccalli su lo scuro
'lla la terra de Mordor, 'ddo cala l'ombra cupa`
  },
  301: {
    language: "lmo",
    variant: "Locarnese",
    author: eld("elfo_femmina"),
    content: `Trii anei pai Re dai elfi
Sot al ciel c'al riscplend
Sett pai principi dii nan
dint'pai lor roc da sass
Nöf pai om mortai
Chi la trisct mort i specia
Vün par al Signür negro,
seraa da'n la so regia scüra.
'Nda la Tera de Mordor, ndova l'ombra negra la scend.
Vün anell pa' domai,
Vün anell pa' truvai,
Vün anell pa' ghermii
e 'ndal scür incatenai,
'Nda la Tera de Mordor, ndova l'ombra negra la scend`
  },
  302: {
    language: "it-center",
    variant: "перуджийский (perugino)",
    author: eld("Elentari"),
    content: `Tre Anelli pì re dì Elfe sott'al cielo che sbrilluc'ca,
Sette pì Principe dì Nane n'le loro rocche d' pietra
Nove aj'omi Mortali ch'la triste morte 'spetta,
Uno pe l'Oscuro Sire turato n'tla reggia tetra
N'tla Terra de Mordore, dua l'Ombra nera vien giue.
n'Anello pe domalli, n'anello pe trovalli,
Un Anello pe chiappalli e n'tol bujo 'ncatenalli,
N'tla Terra de Mordore, dua l'Ombra cupa vien giue`
  },
  303: {
    language: "pms",
    variant: "Pianalto Astigiano",
    author: eld("Anacarnil di Laurelindórenan"),
    book: ["I-p", 92],
    content: `Tre anei ai Re d'j Elfi, suta u ciel ca splènd
Set ai prinse d'i Nani ant' i lur tabui ad pera
Nëuv aj'Om murtai ca a mort trista j'atènd
Ün per lo Scur Sur sarà an sa regia umbrusa
Ant'a tera d'Mordor, anté l'Umbra neira a cala
N'Anel per dumeje, N'Anel per truveje,
N'Anel per ambrancheje e ant'ù Scur ancad'neje.
Ant'a tera d'Mordor, anté l'Umbra scur-a a cala`
  },
  304: {
    language: "egl",
    variant: "болонский диалект",
    author: "Sergio Calzolari",
    book: ["I-b", 94],
    content: `Tri anei ai Re di Elf sott' e ziel che r'lus
Set ai Princip di Nan in t'al lor ca' ad preda
Nov ai omen murtel che la trist mort l'aspetta
Un per e Scur Re serré in t'la furtezza Bura
in t'la Tera ad Mordor duv l'Ombra Negra la cala
un Anel per dumei, un Anel per truvei,
un Anel per ciapei e in te Bur incat'nei
in t'la Tera ad Mordor duv l'Ombra Negra la cala`
  },
  305: {
    language: "nap",
    variant: "zona di Caserta",
    author: eld("Frodo_Ba"),
    content: `Tre aniell 'e rre 'i'll'elf sott'o ciel'ca rsplenn
Sett'e'princp're nan rint'e'llor'castiell'i pret
Nov all'uommn murtal ca'a mort trist aspett
Un sul pu'Scur'Signò chius 'nta furtezza nera,
Rint'a'terr 'e Mordòr, arò l'ombra scura s'acal.
N'Aniell p'ì'sciancà
N'Aniell p'ì'ttruà
N'Aniell p'ì'chiappà
E 'nto scur'ncatnà.
Rint'a'terr 'e Mord\`r, arò l'ombra scura s'acal.`
  },
  306: {
    language: "nap",
    variant: "zona di Napoli (or corr. #305 ?)",
    author: eld("Dott. Elminster^85"),
    book: ["I-n", 99],
    content: `Tre aniell 'e rre 'i'll'elf sott'o ciel'ca rsplenn
Sett'e'princp'ri nan rint'e'llor'castiell'i pret
Nov all'uommn murtal ca'a trist mort aspett
Un sul pu'Scur'Signor chius 'int a furtezza nera,
Rint'a'terr 'e Mordòr, arò l'ombra scura scenn.
N'Aniell p'ì'sciancà
N'Aniell p'ì'ttruà
N'Aniell p'ì'chiappà
E 'nto scur'ncatnà.
Rint'a'terr 'e Mord\`r, arò l'ombra scura scenn.`
  },
  307: {
    language: "rgn",
    //variant: "зона Апеннин",
    author: eld("Tinùviel"),
    content: `Tri anei par gli elf sot me ciel cu risplend.
Set mai princp di nan tal lor rocc ad pietra.
Nov magli uomni murtal cu la trist mort atend.
Un par l'oscur sgnor chius tla su regia scura,
intla tera ad Mordor dov l'ombra nera la scend.
Un anel par dumai, un anel par truvai,
un anel par ghermirl e inte bui incatenai,
intla tera ad Mordor, dov l'ombra cupa la scend.`
  },
  308: {
    language: "scn",
    author: eld("Otaritton"),
    book: ["I-s", 101],
    content: `Tri aneddi pi re dill'effi sutta u cielu chi brillìa
Setti pi signuri di li nani nta li sò conc' i petra
Novi pi l'omini murtali chi spettunu i moriri
Unu pu niru signuri nto so scuru locu.

N'aneddu pi cummanalli
n'aneddu pi truvalli
n'aneddu pi pigghialli
e nto scuru ttaccalli
nta tera i Mordor
unni l'umbra cala.`
  },
  313: {
    language: "lmo",
    variant: "диалект Комо",
    author: eld("Lonolf"),
    book: ["I-c", 96],
    content: `Tri anei ai re degli elf suta al ciel che risplent
Set para i princip dei nani nele loro stanz de rocia
Noef agli omen murtal che la trista sort ei speta
Un para el sciur scur nela tera de Mordor
Duvé l'ombra negra scend

Un anel per dumaij
Un anel per truvaij
Un anel per cataij
e nel scur incatenai
nela tera de Mordor
Duvé l'ombra negra scend`
  },
  314: {
    language: "it-center",
    variant: "тосканский / флорентийский",
    author: eld("Eliadelin Tindómiel"),
    book: ["I-f", 97],
    content: `Tre Anelli a' Re degli Elfi sotto i' cielo 'he risplende,
Sette a' Pʰrincipi ðe' Nani nelle su' cʰaverne ði pʰieþra,
Nove agl'Omini Mortali 'he deano morire,
Uno a i' Signore Scuro nella su' reggia þeþra
Ni' regno di Mordore, in do' gli'è buio.
Un Anello pʰe' domarli, Un Anello pʰe' trovarli,
Un Anello pʰe' pigliarli e legarli ni' buio,
Ni' regno di Mordore, in do' gli'è buio.`
  },
  315: {
    language: "it-center",
    variant: "тосканский / Ливорно",
    author: eld("Eliadelin Tindómiel"),
    content: `Tre Anèlli a' Re dell'Erfi sotto 'r cièlo che risplènde,
Sètte a' Principi de' Nani nelle su' 'averne di piètra,
Nove all'Omini Mortali che devano morì, Uno a 'r Signore Nero nella su' règgia tèþra
Nella terra di Mordore, in do' un si vede da qui a lì.
Un Anèllo phe' domalli, un Anèllo phe' trovalli,
Un Anèllo phe' piglialli e mètterli a i' buio,
Nella terra di Mordore, in do' un si vede da qui a lì.`
  },
  316: {
    language: "it-center",
    variant: "чочарский",
    author: eld("yaya"),
    book: ["I-c", 99],
    content: `Tre aniegl agl re degl'elf sott agl ciel ch'è chiar
sett agl princ'p'gl'nan dent al urutt d'preta
nou agl'crestian ca c'tocca la mort
un a gl'om scur dent'alla terra sia scura

n'aniegl pe c'mandaglie
n'aniegl pe truaglie
n'aniegl p'acchiappaglie
i all scur attaccaglie
dapied a Mordor addò cala l'ombra scura!`
  },
  317: {
    language: "it-south",
    variant: "апулийский / Бриндизи",
    author: eld("TurinMormegil79"),
    content: `Treti alli Re dilli Elfi sottu lu cieli luciscenti
Setti pi lli RRei dilli Nani ntra li casi di petra
Novi agli uemmini ca 'nvecchiunu e morunu
Unu pi lu signori Scuru 'ntra la malitetta Torri
Alla terra di Mordor, do scendi l'ombra niura
N'anieddu cu li domu
N'anieddu cu li trovu
N'anieddu cu li ssuggettu
e allu scuru cu li 'ncatenu
'Ntra li terri di Mordor do l'ombra cupa scendi`
  },
  318: {
    language: "vec",
    variant: "диалект Тревизо",
    author: eld("Farëa Brandibuck"),
    content: `Tre anei pai re dei elfi soto al cieo che bria,
sete ai prinsipi dei nani nee so case de piera,
nove ai omani mortai che a trista morte ghe speta,
uno pal sior moro sarà nel paeaso tristo
Nea Tera de Mordor, dove a ombria mora caie.
Un aneo par domarli, Un aneo par catarli,
Un aneo par ciaparli e al scuro incaenarli,
Nea Tera de Mordor, onde a ombria mora caie.`
  },
  320: {
    language: "scn",
    variant: "диалект Липарских (Эолийских) островов",
    author: eld("Borgil"),
    book: ["I-e", 102],
    content: `Tri anieddi ai re dill'elfi sutta u cielu ca risplenni
Setti ai signuri d'i nani ntà li sò rocch' i petra
Novi all'omini murtali chi la murti si li pigghia
Unu p'u signuri nìuru nta la soi scura casa.
Un anieddu pi ccercàrili
Un anieddu pi truvàrili
Un anieddu pi pigghiàrili
e ntu scuru iettàrili
nta terr' i Mordor unni l'umbra nìura scinni`
  },
  321: {
    language: "scn",
    variant: "палермский диалект",
    author: eld("Utumno"),
    book: ["I-p", 102],
    content: `Tri anieddi ai re di l'elfi sutta u cielu,
Siette ai signuri d'i nani nta li sal'i petra,
Novi all'omini mortali c'hann'a mòrere,
Unu p'u Signuri Nìuru supra u so tronu nìuru
Nta la tierr'i Mordor unni sta l'umbra.

N'anieddu pi cumannall'a tutti, N'anieddu p'attruvalli,
N'anieddu pi purtarisill'a tutti e nnu scuru 'ncatinalli
Nta la tierr'i Mordor unni sta l'umbra.`
  },
  322: {
    language: "egl",
    variant: "редджанский диалект, зона Редджоло",
    author: eld("Aramil"),
    content: `Tri Anei al Re ad gl’Elfi sota al sel cal risplend,
Set ai Principi a di Nan in lor rochi ad preda,
Nöf agl’Om Mortal cha la triste mort agl’attend,
Vön par al Sir Scur sarà in dla regia scura
In dla Tera ad Mordor, indua l’Ombra negra la vè sö
N’Anel par domaral, n’Anel par cataral,
N’Anel par ciaparal e in dal scur incatnaral,
In dla Tera ad Mordor, indua l’Ombra negra la vè sö.`
  },
  325: {
    language: "nap",
    variant: "тарантский диалект",
    author: eld("Beren85"),
    book: ["I-t", 100],
    content: `Tré Anidde a le réje de l'Elfe, sott'u ciele ca sblende.
Sitte a le Pringepe de le Curte, jndrâ le lore case de pétre.
Nove a le Cristiane Mortale c'a méste morte l'aspétte.
Une p'u gnure Signore acchiùse jndr'ô scurisciute ccastidde,
jndr'â terre de Mordòr, addò 'a malombre avéne.
'N Anidde p'accucciarle, 'N Anidde p'acchiarle,
'N Anidde p'arrubbarle, e jndr'ô buije acciuppenarle.
Jndr'â terre de Mordòr, addò 'a malombre avéne.`
  },
  326: {
    language: "lmo",
    variant: "тичинский диалект",
    author: eld("Numenor"),
    book: ["I-t", 93],
    content: `Trii aneei al Re dii Elfi sot'al ciel che brila
Sett ai principi dii nan dent'ai so stanz da sass
Nüf pai oman murtai chi la mort i specia
un par ul scior scür identa la so regia scüra
Un anel par duminai
Un anel par truvai
un anel par ciapai
e in dal bui incadenai
nala tera da Mordor do cal bui al vegn giò`
  },
});

const dialects2 = make({ input: "2.3.0" }, {
  533: {
    language: "nap",
    author: "Pietro Lignola",
    content: `Tre aniélle p’e rre ‘e ll’èlfe sótt’o ciélo,
sètte p’e signure d’e nane ‘int’e salune llòro ‘e prèta,
nòve pe ll’uómmene murtale cundannate a mmurì,
uno p‘o Signóre scuro ‘ncòpp’o tròno sujo scuro,
int’a tèrra ‘e Mordòr, addó stanno ll’ómbre.
N’aniéllo sulo p’e ddumà, p’e ttruvà,
pe ll’acchiappà e ll’attaccà int’o scuróre
int’a tèrra ‘e Mordòr, addó stanno ll’ómbre.`
  },
  534: {
    language: "vec",
    author: "Viola Ortes",
    content: `Tre anèi pai Elfi sóto e stée,
Sète pai nani nee so stanse de pièra,
Nove pai òmeni Mortai destinai a morir,
Uno pal Re dee tenebre, sul so scagno nero,
Nel regno de Mordor dove che sta 'e Ombre.
Un anèo pa comandarli tuti quanti
Un anèo par trovarli,
Un anèo pa ciaparli e legarli nel oscurità
Nel regno de Mordor dove che sta 'e Ombre.`
  },
});

const dialects = make({}, {
  560: {
    input: "2.4.0",
    language: "nap",
    author: "langsandlit [Tumblr]",
    content: `Tre anielle pe ‘e Re Elfe sotto ô cïelo
Sette pe ‘e Signure dê Nane dinto ‘e salune lloro ‘e preta
Nove pe ll’uómmene murtale che ‘a trista morte attenneno
Unu pe ‘o Scuro Signore ‘n coppa ‘o trono scuro
Dinto ‘a terra ‘e Mordòr addó ll’Ommra scura scenne

N’Aniello pe ‘e cumannà, n’Aniello pe ‘e truvà
N’Aniello pe ll’abbrancà e dinto ‘o scuro ‘ncatenà
Dinto ‘a Terra ‘e Mordòr addó ll’Ommra scura scenne`
  },

  603: {
    input: "2.4.5",
    language: "scn",
    author: "Alessio Mistretta",
    content: `Tri aniḍḍi pî re di l'Elfi sutta i stiḍḍi
setti pî signura Nani ntê càmmari di petra
pî supranijati murtali, mmeci, novi aniḍḍi,
unu ô Signuri Scuru ntâ reggia tetra,
ntâ Terra di Mòrdor cu l'òmmiri çiuschiḍḍi*.
N'aniḍḍu pi cumannalli, unu pi truvalli,6
n'aniḍḍu pi pigghialli e ntô scuru purtalli
ntâ Terra di Mòrdor cu l'òmmiri çiuschiḍḍi.`
  },

  604: {
    input: "2.4.5",
    language: "nap",
    author: "Pietro Ligniola",
    content: `Tre aniélle sótt’o ciélo p’e rre ‘e ll’èlfe affatate1
sètte p’e rre d’e nane dint’e salune ‘e prèta,
ati nnòve pe ll’uómmene a mmurì cundannate,
uno ô Signóre scuro dint’a reggia secreta
sott’a tèrra ‘e Mordòr, sott’a ll’ombre ‘nchiummate.
N’aniéllo sulo abbasta p’e ttruvà, p’e ddumà,
pe ll’acchiappà ‘int’o scuro e llà ssótto attaccà
sott’a tèrra ‘e Mordòr, sott’a ll’ombre ‘nchiummate.`
  },
});

export const list = [
  it, it2,
  dialects1,
  dialects2,
  dialects,
  rob,
];
