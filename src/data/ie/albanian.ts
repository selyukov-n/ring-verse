import { sources } from "../sources";
import { fromLotR, make } from "../utils";

export const alb = make({ language: "alb" }, {
  477: {
    input: "1.0.2",
    name: fromLotR(),
    author: [],
    book: ["A-1", 151],
    content: `Tri Unaza për Elfët-mbretër,
Shtatë për mjeshtërit xhuxhë në shtëpitë prej guri,
Nëntë për njerëzit e vdekshëm që balta i pret,
Një për Kryezotin e Zi në fronin e tij të errët,
Në Tokën e Mordorit, ku hija bie.
Një Unazë e Vetme i sundon, Një Unazë Vetme e gjen,
Një Unazë e Vetme i bashkon dhe në errësirë i ngërthen,
Në Tokën e Mordorit, ku hija bie.`
  },
  478: {
    input: "1.0.2",
    author: "Erumahtar",
    book: ["A-2", 151],
    content: `Tri unaza për Elfët-mbretër nën qiell,
Shtatë për Kryezotët e Xhuxhave në pallatet e tyre prej guri,
Nëntë për Njerëzit e vdekshëm të mallkuar të vdesin,
Një Unazë për Kryezotin e Zi në fronin e tij të errët,
Në Tokën e Mordorës ku banojnë Hijet.
Një Unazë t'i mbizotërojë të gjitha, Një Unazë t'i gjejë,
Një Unazë t'i sjellë të gjitha dhe në errësirë t'i lidhë,
Në Tokën e Mordorës ku banojnë Hijet.`
  },

  535: {
    input: "2.3.0",
    author: sources.lyricstranslate.makeAuthor("Scquiper"),
    content: `Tre unaza për mbretërit elf nën qiell,
Shtatë për lordët xhuxh në sallat e tyre të gurit,
Nëntë për Njerëzit e Vdekshëm të ndëshkuar që të vdesin.
Një për Lordin e Errët në fronin e tij të errët,
Në Tokën e Mordorit ku hijet shtrihen.
Një Unazë t'i sundojë ata të gjithë. Një Unazë t'i gjejë ata,
Një Unazë t'i sjellë ata të gjithë dhe në errësirë t'i lidhë ata
Në Tokën e Mordorit ku hijet shtrihen.`
  },

  556: {
    input: "2.3.5",
    author: [],
    source: sources.decormilaikina,
    content: `Tre unaza për sundimtarët e kukudhëve nën harqet e qiellit,
Shtatë unaza për zotërit e xhuxhave nën harqet e gurit,
Nëntë për njerëzit e vdekshëm të dënuar të zhduken
Një për zotin e errësirës, në fronin e errët,
Një unazë e plotfuqisë,
për t’i mbledhur të gjitha që iu dha
Dhe ata janë të destinuar t'i pushtojnë nga errësira,
Në tokën e Mordor, ku mbretëron errësira...`
  },
});
