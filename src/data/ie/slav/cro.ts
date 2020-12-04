import { sources } from "../../sources";
import { book, make } from "../../utils";

const cro = make({ language: "cro", input: "0.2.0" }, {
  67: {
    book: book("S", 114, "and C-1, p. 114"),
    author: "Berislav Lopac",
    content: `Prstena Tri za vilin-kralje za koje zvijezde siju,
I Sedam za patuljke-vladare kamenih dvora moċi;
I Devet za ljude, usuda kletog što zarana mriju,
Al Prsten Jedan za Cara Mraka na prijestolju noczi
U zemlji Mordor gdje sjene se kriju.
Prsten Jedan da zavlada svima, Prsten Jedan što trażi i seże
Prsten Jedan da spoji se s njima i u tami ih sveże
U zemlji Mordor gdje sjene se kriju.`
  },
  68: {
    name: 'from "Stilos" edition (офиц. перевод)',
    book: book("SC", 113),
    author: "Zlatko Crnković",
    content: `Tri Prstena za prste Kraljeva vilin-vrste pod nebesima što sjaju,
Sedam za vladare Patuljaka u dvoru njihovom kamnom,
Devet za Smrtne Ljude koje smrt čeka na kraju,
Jedan za Mračnog Gospodara na njegovom prestolu tamnom
U Zemlji Mordor gde Senke traju.
Jedan Prsten da svima gospodari, jedan za svima seže,
Jedan Prsten da sve okupi i u tami ih sveže
U Zemlji Mordor gde Senke traju.`
  },
});

const cro2 = make({ language: "cro" }, {
  240: {
    input: "0.9.0",
    author: `Etharion [${sources.planetTolkien}]`,
    content: `Tri prstena za vilenjaèke kraljeve ispod nebesa,
Sedam za patuljke u njihovim hodnicima kamenim,
Devet za smrtne ljude osuðene da umru,
Jedan za tamnog Gospodara na tamnom prjestolju
U zemlji Mordora gdje sjene leže.
Jedan Prsten da vlada svima, Jedan Prsten da ih naðe,
Jedan prsten da ih sve okupi i u tami da ih sveže
U zemlji Mordor gdje sjene leže.`
  },
  371: {
    input: "0.14.5",
    source: sources.jrrt_memorial,
    author: [],
    content: `Tri prstena za kraljeve vilovnjaka pod nebom
Sedam za gospodare patuljaka u njihovim halama od kamena
Devet za smrtnog coveka prokletog da umre
Jedan za Tamnog Gospodara na njegovom tamnom tronu
U zemlji Mordor gde senke leze
Jedan prsten da im svima gospodari
Jedan prsten da ih sve nadje
Jedan prsten da ih sve donese i u tami veze
U zemlji Mordor gde senke leze`
  },
  467: {
    input: "1.0.1",
    author: [],
    book: ["C-2", 115],
    content: `Tri prstena za vilen-kraljeve ispod neba,
Sedam za patuljke u kamen dvorima,
Devet za smrtne ljude osudene na smrt,
Jedan za gospodara tame na svom prijestolju,
Prsten jedan da vlada svima, Prsten jedan da ih nade,
Prsten jedan da ih dovede sve i u tami poveze.
U zemlji mordor gdje leze sjenke.`
  },
});

export const list = [
  cro,
  cro2,
];
