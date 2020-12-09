import { IDerzhansky } from "../authors";
import { make } from "../utils";
import pic90 from "../pic/90egy.png";

const translit = (text: string) => ({
  type: "translit hgn" as const,
  text: text.replace(/i/g, "ꞽ").replace(/ʿ/g, "ꜥ").replace(/3/g, "ꜣ").replace(/\./g, "·"),
});

export const aeg = make({ language: "egy" }, {
  90: {
    input: "0.2.5",
    book: ["AE", 204],
    author: IDerzhansky,
    comments: ["Orig. published in Tyalië Tyelelliéva #8, pp. 17-19 (with the hieroglyphic text and the intended vocalization)."],
    content: [
      {
        type: "image",
        image: pic90,
        /*
        WikiHiero: http://aoineko.free.fr/index.php
x*t:M-t:xtm Z2s n i-ti-i-i-A23-A23-A23 nw:Z1 nm-n:m-r-A1s*B1s:Z2 .. n:t-G4-Z3 m p:t-N1:N1:N1-D1:Z1s-pr:Z1-s-n::Z2-!
x*t:M-t:xtm Z1s*Z1s*Z1s*Z1s:Z2s n s-r-A21-A21-A21 nw:Z1 d-G1-n:g-A1s*B1s:Z2 .. i-Z11-m-w-Z3 aH-a:O1-Z3-s-n::Z2 nw:Z1 i-n::r-O39-!
Z1s*Z1s*Z1s*Z1s*Z1s:Z1s*Z1s*Z1s*Z1s n r:T-A1s*B1s:Z2 i-p-w m:t-A14-ti-s-n::Z2 .. wn:n-nw:t-N14 k:t*t-t:G37 wsr-s-r:D40-s-n::Z2-!
x*t:M-t:S20 wa:a-t:Z1 n nb-A40 n k:k-w-N2 .. N41-s-s-i-i-A1 Hr:Z1 zmA-t:O1 m T:n:Z2ss-r:Z1-D40-!
m tA:n S-w:t-A14-Z3 m tA:n mr:r-V1:D40-Ar-A24-N25 .. r D:t:N17 r nH-H-H r T12-A24-s-n::Z2-!
x*t:M-t:S20 wa:a-t:Z1 gm-m-t-s-n::Z2 r Dr:r-s-n::Z2 .. x*t:M-t:S20 wa:a-t:Z1 HqA-q-A-Y1V-s-n::Z2-!
x*t:M-t:S20 wa:a-t:Z1 ini:n-t-s-n::Z2 r Dr:r-s-n::Z2 .. r D:t:N17 m zmA-w-y G20-xA-A-Z7-Z9-A24-s-n::Z2-!
m tA:n S-w:t-A14-Z3 m tA:n mr:r-V1:D40-Ar-A24-N25 .. r D:t:N17 r nH-H-H r T12-A24-s-n::Z2
         */
      },
      translit(`ḫmt.t ḫtm.wt ity.w n.w *nmr.w nty.w m p.wt tp pr⸗sn,
sfḫ.t ḫtm.wt n sr.w n.w dng.w imy.w ʿḥ.w⸗sn n.w inr,
psḏ.t n rmṯ.w ip.w mwt.ty⸗sn wn.wt ktt.t wsr⸗sn,
ḫtm.t wʿy.t n nb.w ny kk.w ḥmssy ḥr zm3.t m ṯnr
m t3 ny šw.wt, m t3 Mr-d3r r ḏ.t r nḥḥ r d3r⸗sn ::
ḫtm.t wʿy.t gmt⸗sn r ḏr⸗sn, ḫtm.t wʿy.t ḥḳ3⸗sn,
ḫtm.t wʿy.t int⸗sn r ḏr⸗sn, r ḏt m zm3wy mḫ3⸗sn
m t3 ny šw.wt, m t3 Mr-d3r r ḏ.t r nḥḥ r d3r⸗sn ::`),
    ]
  },
});
