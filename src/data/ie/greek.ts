import { book, fromLotR, make } from "../utils";

export const ancient = make({ language: "gre" }, {
  100: {
    input: "0.3.0",
    name: "гомеровский диалект",
    book: book("AG-2", 198),
    author: "Anthony Appleyard",
    content: [
      {
        name: "греческое письмо",
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
});
