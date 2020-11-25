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
});
