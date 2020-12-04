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

  473: {
    input: "1.0.2",
    author: "Richard Jeffery",
    book: ["W-1", 145],
    content: `Tair modrwy i 'r Tylwyth Teg dan yr wybrew fry,
Saith i arglwyddi 'r Corrod yn eu hogofau,
Naw i ddynion marwol sy dan dynged angau,
Uni i 'r Arglwydd Tywyll sydd ar ei orsedd ddu
yng ngwlad Mordor lle mae 'r cysgodion yn aros.
Un am eu treisio, un am fynd ar eu holau,
un am ddod gyda hwy a'u rhwymo yn y nos
yng ngwlad Mordor lle mae 'r cysgodion yn aros.`
  },
  474: {
    input: "1.0.2",
    author: "Turtlehead",
    book: ["W-2", 145],
    content: `Tri i 'r Brenhinoedd Ellylleg is y ffurfafen,
Saith i 'r Arglwyddi Cor, yn eu neuaddau carreg nhw,
Naw i Dynion marwol, dedfrydu i farw,
Un i 'r Arglwydd Tywyll, ar ei Orsedd Dywyll fe,
Yn nhir Mordor, lle 'r cysgodau celwyddo.
Un amgarn i ddod â holl nhw, yn amgarn i gael hyd nhw,
Un amgarn i 'u lywio holl nhw, ac yn y tywyllwch eu caethiwo nhw,
Yn nhir Mordor, lle 'r cysgodau celwyddo.`
  },
});
