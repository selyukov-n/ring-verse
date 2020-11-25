import { book, make } from "../../utils";

export const oe = make({ language: "oe" }, {
  86: {
    name: "мерсийский диалект",
    input: "0.2.0",
    book: book("OE-m2", 185),
    author: "Edward W. Beattie",
    content: `Þríe sindun hringe     þrymcnáwenda ylfa
Seofon dweargdryhtnum   heara dwimorseldum in
Nigen for firum     fǽgum ðorh fyrena
Bealuwalde äna     bróganseldes fréan
Scinscyppende Mordor   sceadwa meðelstede
Án hring þe hátaþ     alle hátaþ hergiaþ
Alle þe hentaþ     hæftas þe healdaþ
Mislice metudsceafte   mánfremmende Mordor.`
  },

  168: {
    name: "мерсийский диалект",
    input: "0.7.0",
    book: book("OE-m1", 183),
    source: "OE ring verse",
    author: "Carl Edlund Anderson",
    content: `Hringas þríe       þéodnum Ælfa,
allra ældestum,     ofer eormengrunde (or under eormenrodore).
Hringas seofun     innan sele stænnum
Dwergdryhtnum.     Derc heara hús.
Hringas nigon     néote Moncynn,
hláfordas méra     mégas déaðfæge.
Heolstres Hearra     hring ánne weardað
in dryhtsele dimmum   on dercan þrymmsetle
þér licgað scedwa     in londe Mordores.
Hring án gewalde,     hring án gefinde,
hring án gebringe,     hring án gebinde
þéoda swá þéowas    in þéostrum tógedere
þér licgað scedwa     in londe Mordores.`
  },

  198: {
    input: "0.8.0",
    author: "Rupert Barnes",
    book: book("OE", 182),
    content: `Þrie beas for þæm Ylfe-cyningas under heofne,
Seofon for þæm dweorg-freas in hire stænnum heallum,
Nigon for deaðfulum mannum foredemed to forþfarenne,
An for þæm Feale Frea on his heolstore stole
In Mordorlande þa þa sceade licgað.
An Beah ealla hire to rædenne, An Beah hie to fandienne
An Beah ealla hire to gebrengenne and in þæm heolstore bindenne
In Mordorlande þa þa sceade licgað.`
  },
});
