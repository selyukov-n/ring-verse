import { sources } from "../sources";
import { book, fromLotR, make } from "../utils";

const lit = make({ language: "lit" }, {
  311: {
    input: "0.13.0",
    name: fromLotR(),
    author: ["Andrius Tapinas", "Jonas Strelkunas"],
    book: book("L-1", 147),
    content: [{
      title: "Taip Žiedai padalinti pasauly:",
      text: `Trys - Elfų Karaliams po saule,
Septyni - Nykštukams akmens salių erdvėse,
Devyni - Žmonėms, myriop pasmerktiesiems,
Vienas - Mordoro Lordui Juodajam,
Kuris soste tamsos viešpatauja.
Šitas Žiedas yra Visagalis,
Jis Žiedus išsisklaidžiusius gali
Surasti, sukviest ir juodąja valia
Sukaustęs, sujungti tamsiam Mordore.`
    }]
  },
  475: {
    input: "1.0.2",
    author: "Laiqualasse",
    book: ["L-6", 149],
    content: `Trys žiedai - elfų karaliams pasauly
Septyni - dvorfų valdovams menėse akmenų
Devyni - žmonėms mirtingiems, mirčiai pasmerktiems
Vienas tamsos valdovui žemių juodų
Mordore, kur šešėliai pastoja kelią visiems
Vienas Žiedas valdo visus, Vienas Žiedas juos randa
Vienas Žiedas sukviečia visus, ir tamsoje juos sujungia
Mordore, kur šešėliai pastoja kelią visiems`
  },
  494: {
    input: "1.1",
    author: [],
    content: `Trys žiedai elfų karaliams, po dangaus skliautu,
Septyni - nykštukų valdovams, jų akmeninėse menėse,
Devyni - žmonių mirtingų, žūčiai pasmerktų,
Vienas tik - Tamsos Valdovui soste sutemų,
Žemėje Mordoro, kur šešėliai driekias.
Vienas žiedas visiems valdyti, Vienas žiedas visiems surasti,
Vienas žiedas visiems sukviesti ir tamsybėse amžiams užsklęsti.
Žemėje Mordoro, kur šešėliai driekias.`
  },
});

const lit2 = make({ language: "lit", input: "0.14.0" }, {
  341: {
    author: "Indraja [tolkien.balt.net] ?",
    book: ["L-3", 148],
    content: `Trys žiedai – elfų karaliams po aukštu dangumi,
Septyni – kilniems dvarfams iš menių akmeninių,
Devyni – žmonėms, mirčiai kurie pasmerkti,
Vienas – Tamsiam Valdovui soste tamsybių,
Mordoro šalyje, Šešėliai kurioj telkiami.
Vienas Žiedas – visus valdyti, Vienas Žiedas – juos rasti,
Vienas Žiedas – visus surinkti ir tamsybėse juos surakinti
Mordoro šalyje, Šešėliai kurioj telkiami.`
  },
  342: {
    author: `starlin [${sources.theonering}]`,
    book: ["L-4", 148],
    content: `Trys Žiedai elfų karaliams po dangumi,
Septyni dvarfų valdovams menėse uolų,
Devyni Mirtingiesiems žmonėms su savo lemtimi,
Vienas Tamsos Viešpačiui soste juodumų
Mordoro šaly, po šešėlių dangstimi.
Vienas Žiedas jiems valdyti, Vienas Žiedas jiems surasti,
Vienas Žiedas jiems sukviesti ir sujungti tamsoje,
Mordoro šaly, po šešėlių dangstimi.`
  },
  343: {
    author: [],
    book: ["L-5", 149],
    content: `Trys žiedai - elfų karaliams po dangaus žvaigždėm.
Septyni - dvorfų valdovams menėse akmenų.
Devyni - žmonėms mirtingiems, mirčiai pasmerktiems.
Vienas tamsos valdovui žemių juodų
Mordore, kur šešėliai pastoja kelią visiems
Vienas Žiedas valdo visus, Vienas Žiedas juos randa
Vienas Žiedas sukviečia visus, ir tamsoje juos sujungia
Mordore, kur šešėliai pastoja kelią visiems`
  },
  344: {
    author: [],
    book: ["L-2", 147],
    content: `Trys Žiedai Elfų karaliams po dangaus skliautu,
Septyni - Dvorfų valdovams rümuose uolų,
Devyni - Žmonių mirtingų, žüčiai pasmerktų,
Vienas tik - Tamsos Valdovui soste sutemų,
Žemėje Mordoro, kur šešėliai driekias.
Vienas Žiedas valdyti visiems, Vienas Žiedas - visiems jiems surasti,
Vienas Žiedas sukviesti visiems ir tamsybėse amžiams užsklęsti.
Žemėje Mordoro, kur šešėliai driekias.`
  },
});

export const list = [
  lit,
  lit2,
];
