import { fromLotR, make } from "../utils";

export const ee = make({ language: "est" }, {
  78: {
    input: "0.2.0",
    author: "Alar Helstein",
    book: ["E-2", 161],
    content: `Kolm sõrmust haldjahõimust on kuningail,
seitse seal, kus kuldne päkapikukroon.
Neid üheksa on inimmail,
kuid vaid Üks, kus Musta Vürsti troon.
Seal, kus laiub Mordor, varjurahva vald.
Üks Sõrmus juhib neid ja kaugelt toob nad,
Üks Sõrmus saadab neid ja pimedusse seob nad.
Seal, kus laiub Mordor, varjurahva vald.`
  },
  421: {
    input: "0.17.0",
    name: fromLotR(),
    author: "Votele Viidemann",
    book: ["E-1", 161],
    content: `Kolm Sõrmust haldjahõimul sinitaeva all,
Seitse päkapikkudel maa külmis kivikambreis,
Üheksale ülemaks on sureliku vald,
Üks kuulub Isandale, kellevõim on kangeim
Maal, mil nimeks Mordor, musta Varju all.
Üks sõrmus juhib neid, Üks leiab üles,
Üks Sõrmus toob nad kokku pimeduse süles
Maal, mil nimeks Mordor, musta Varju all.`
  },
});
