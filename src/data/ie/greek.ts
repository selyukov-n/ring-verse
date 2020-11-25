import { book, make } from "../utils";

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
