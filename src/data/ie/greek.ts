import { fromLotR, make } from "../utils";
import { sources } from "../sources";

export const ancient = make({ language: "gre" }, {
  100: {
    input: "0.3.0",
    variant: "гомеровский диалект",
    book: ["AG-2", 198],
    author: "Anthony Appleyard",
    content: [
      {
        type: "text-large",
        text: `Δακτύλιοι τρεῖς ἈλϕοϜάξιν ὑπ᾽ οὐράνῳ εἰσί.
Ἕπτα Καβειροδυνάστῃσιν μεγάροις λιθίνοις ἔν.
ἘννέϜα δ᾽ ἀνθρώποισι βροτοῖσ᾽ ὁτινέσσι θανεῖν χρῆ.
Εἵς Δνοϕερῷ Ἄρχοντι θρόνῳ αὐτοῦ στυγεροῖ ἔν
Μόρδορι ἐν χώρῃ ὁθι κακκεῖνται σκίαι αἰϜεί.
Δακτύλιος ΜόνϜος τούτων καρτῆναι ἁπάντων,
Δακτύλιος ΜόνϜος τούτους εὑρισκέμεναί γε,
Δακτύλιος ΜόνϜος σϕ᾽ ἐπάγειν ἐρέβεσσι δὲ δεῖν σϕε
Μόρδορι ἐν χώρῃ ὁθι κακκεῖνται σκίαι αἰϜεί.`
      },
      {
        name: "латиница",
        text: `Daktýlioi treîs Alphowáxin hyp' ouránö eisí.
Hépta Kabeirodunástēisin megárois lithínois én.
Ennéwa d' anthrṓpoisi brotoîs' hotinéssi thaneîn khrē̂.
Heís Dnopherō̂i Árkhonti thrónōi autoû stygerō̂i én
Mórdori en khṓrēi hothi kankeîntai skíai aiweí.
Daktýlios Mónwos toútōn kartē̂nai hapántōn,
Daktýlios Mónwos toútous heuriskémenaí ge,
Daktýlios Mónwos sph' epágein erébessi dè deîn sphe
Mórdori en khṓrēi hothi kankeîntai skíai aiweí`
      },
    ]
  },
  488: {
    input: "1.0.2",
    author: "Jakovos Vlioras",
    book: ["AG-1", 197],
    content: [{
      name: "лат. транслитерация",
      text: `Henaktōn Aimonōn aithrēgenetas kirkoi te treis peri,
Tytthōn de archōn mychonde lithō spheterōn heptamerē,
Meropōn genos Andrōn, kaddikēn brotō ennea tōn
Melanos Despotou en thrēnyos melainēs en eaton
Parchōrē Aimelaines hothe skiai epephorbei te.
Kirkos eis ephēgēsaito spheas holous,
Krikosde eis katheureto pōmōlous,
Kirkos eis pherēsige spheas holous,
Amolgō nyktos dedmēto pōmōlous,
Parchōrē Aimelaines hothe skiai epephorbei te.`
    }]
  },
});

export const greek = make({ language: "el" }, {
  350: {
    input: "0.14.0",
    name: fromLotR(),
    author: "Eugenia Hatzithanasi-Kollia",
    book: ["G-1", 152],
    content: `Τρία δαχτυλίδια έχουνε οι Ξωτικοί βασιλιάδες στο θόλο τ' ουρανού από κάτω
Εφτά οι Νάνοι άρχοντες στα πέτρινά τους τα παλάτια
Εννιά οι ανθρώποι οι θνητοί που 'χουν τη μοίρα του θανάτου
Ένα ο Μαύρος Άρχοντας που βασιλεύει στα σκοτάδια
στης Μόρντορ τη γη που ζουν οι Σκιές
Ένα, όλους να τους κυβερνά και να τους βρίσκει, Ένα
Ένα, να τους μαζεύει όλους μαζί, με μαύρα μάγια, Ένα
Στης Μόρντορ τη γη που ζουν οι Σκιές`
  },
  369: {
    input: "0.14.5",
    comments: ["похоже на #350"],
    author: [],
    content: `Τρία Δαχτυλίδια έχουνε οι Ξωτικοί οι Βασιλιάδες στο θόλο τ' ουρανού από κάτου
Εφτά οι Νάνοι Άρχοντες παλάτια που 'χουνε μες στα πέτραδια τους τα
Εννιά οι Ανθρώποι οι θνητοί π' εχουν τη μοίρα του θανάτου
Ένα ο Μαύρος Άρχοντας που βασιλεύει στα σκοτάδια
Στη γη της Μόρδορ, που ζουνε οι σκιές
Ένα, όλους να κυβερνά και να τους βρίσκει, Ένα
Ένα, να τους μαζεύει όλους μαζί, με μαύρα μάγια, Ένα
Στη γη της Μόρδορ, που ζουνε οι σκιές`
  },
  407: {
    input: "0.16.0",
    source: sources.wmigurok,
    author: [],
    content: [{
      name: "латиница",
      text: `Tria dahtlidia gia tous Xotikous Vasiliades kato apo ton Ourano
Efta gia tous Nanous Arhontes sta petrina tous domata
Ennea gia tous Thnitous Anthropous kataramenous na pethanoun
Ena gia to Skoteino Arhonta sto Skoteino tou Throno
sti gi tis Morntor pou aplonontai skies
Ena dahtylidi na ta exousiazei ola, ena dahtylidi na ta vriskei
Ena dahtylidi na ta fernei ola, kai sto skotadi na ta denei
sti gi tis Morntor pou aplonontai skies`
    }]
  },
  414: {
    input: "0.16.1",
    author: [],
    book: ["G-2", 131],
    content: `Τρία δαχτυλίδια για τα Ξωτικά που ζουν στα δάση
κι επτά για τους Νάνους κάτω από τη γη.
Εννιά για τους Θνητούς που ο θάνατος δε θ' αρπάξει,
κι ένα για τον άρχοντα του σκοταδιού εκεί,
στη χώρα της Μορντορ, που τις σκιές συνάζει.
Ένα Δαχτυλίδι για να βρίσκει τα υπόλοιπα, ένα για να τα διατάζει,
ένα για να τα διαφεντεύει πάντοτε και στο κακό να τα βουλιάζει,
στη Χώρα της Μορντορ, κάτω εκεί, που τις σκιές συνάζει.`
  },
  500: {
    input: "1.1",
    name: fromLotR("2012 ?"),
    author: [],
    content: `Τρία Δαχτυλίδια έχουνε οι Ξωτικοί οι Βασιλιάδες κάτου,
Εφτά οι Νάνοι Άρχοντες παλάτια που ’χουνε μες στα πετράδια,
Εννιά οι Άνθρωποι οι Θνητοί που ’χουν τη μοίρα του θανάτου,
Ένα ο Μαύρος Άρχοντας, που βασιλεύει στα σκοτάδια,
Στη γη της Μόρντορ, που ζούνε Σκιές.
Ένα, όλους να κυβερνά και να τους βρίσκει, Ένα.
Ένα, να τους μαζεύει όλους μαζί, με μαύρα μάγια, Ένα.
Στη γη της Μόρντορ, που ζούνε Σκιές.`
  },
});
