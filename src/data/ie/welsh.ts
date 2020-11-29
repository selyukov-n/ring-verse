import { sources } from "../sources";
import { book, make } from "../utils";

export const cymraeg = make({ language: "cym" }, {
  237: {
    input: "0.9.0",
    name: "Сев. Уэльс",
    book: book("W-n", 146),
    author: [],
    content: `Tri modrwy i'r brenin Ellyll o dan y wybren
Saith i'r arglwyddan Corrach yn eich neuadd maen
Naw i Dynion angheuol defrydu i marw
Un i'r Arglwydd Tywyll ar eu gorseddfainc tywyll
Yn y tir Mordor, lle'r cysgod gorwedd
Un modrwy i rheoli nhw, un modrwy i darganfod nhw
Un modrwy i cyrhu'r holl ac yn y tywyllwch rhwymo nhw
Yn y tir Mordor lle'r cysgod gorwedd.`
  },
  404: {
    input: "0.16.0",
    source: sources.tolkien_cz,
    author: [],
    book: ["W-3", 146],
    content: `Tair modrwy i'r Ellyllon Brenhinoedd dan y nef.
Saith i'r Arglwyddi Cor yn eu teiau o faen.
Naw i'r Dynion Marwol, a ânt i'r farwolaeth.
Un i'r Arglwydd Tywyll ar ei Orsedd Dywyll
yn nhir Mordor, lle mae'n gorwedd y cysgodau.
Modrwy i'w llywio pawb, modrwy i'w cael nhw,
modrwy i'w cynnull pawb a'u rhwymo nhw yn y tywyllwch,
yn nhir Mordor, lle mae'n gorwedd y cysgodau.`
  },
});
