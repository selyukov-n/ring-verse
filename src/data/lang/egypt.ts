import { IDerzhansky } from "../authors";
import { book, make } from "../utils";

export const aeg = make({ language: "egy" }, {
  90: {
    input: "0.2.5",
    book: book("AE", 204),
    author: IDerzhansky,
    comments: ["Orig. published in Tyalië Tyelelliéva #8, pp. 17-19 (with the hieroglyphic text and the intended vocalization)."],
    content: `xmt.t xtm.wt n itj.w n.w *nmr.w ntj.w m p.wt tp pr.sn,
sfx.t xtm.wt n sr.w n.w dlg.w imj.w aH.w.sn n.w inr,
psD.t n rmT.w ip.w mwt.tj.sn wn.wt ktt.t wsr.sn,
xtm.t waj.t n nb.w nj kk.w Hmssj Hr zmA.t m Tnr
m tA nj Sw.wt, m tA nj mr-dAr r D.t r nHH r dAr.sn ::
xtm.t waj.t gmt.sn r Dr.sn, xtm.t waj.t HqA.sn,
xtm.t waj.t int.sn r Dr.sn, r Dt m zm3wj mxA.sn,
m tA nj Sw.wt, m tA nj mr-dAr r D.t r nHH r dAr.sn ::`
  },
});
