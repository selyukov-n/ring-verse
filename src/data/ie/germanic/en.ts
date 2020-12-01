import { ME } from "../../authors";
import { sources } from "../../sources";
import { book, make } from "../../utils";

const planet = (name: string, nickPart: string, page?: number) => ({
  name,
  book: page ? book("E-dial", page) : undefined,
  author: `${nickPart} [${sources.planetTolkien}]`,
});

const dialects1 = make({ language: "en", input: "0.9.0" }, {
  233: {
    ...planet("Коннектикут ?", "Arcormacolindóva", 52),
    content: `Three Reengz fer Elvin-keengz unduh th' sky
Sevin fer th' Dwarf-lordz in th'r hawlls a'stohn
Nain fer Mort'l Men, doomd ta dy
Wun fer th' Dark Lord, on 'iz dark throhn
In th' land a' Mordor wer th' Shadohz ly
Wun Reeng ta rool them all, Wun Reeng ta fynd them,
Wun Reeng ta breeng them all and in th' darknis bynd them
In th' land a' Mordor wer th' Shadohz ly.`
  },
  234: {
    ...planet("Техас", "DragonReach", 53),
    content: `Tree rings fer da elbin kings under da sky,
Sebin fer dorf lords in der halls ub stone,
Nine fer mordel men doomed ta die,
One fer the Dark lard on his dark throne,
In de Land ub Mordor where da shaders lie.
One Ring ta rule dem all, One Ring ta find em,
One Ring to bring em all, and in da darkness bind em,
In da land of Mordor where da Shaders lie.`
  },
  236: {
    ...planet("Estuary English (Luton accent)", "Peredhil", 51),
    content: `Free rings fuh tha elven kings unduh tha sky,
Seven for tha Dwarf Lords in 'eir 'alls of stone,
Nine fuh mor'al men doomed to die,
One fuh tha Dark Lord on 'is dark frone,
In 'a land of Mordor where tha shadows lie.
One ring to rule 'em all, one ring to find 'em,
One ring to rule 'em all an' in 'a darkness bind 'em,
In 'a land of Mordor where tha shaows lie.`
  },
  238: {
    ...planet("Сев. Ирландия", "Darous", 52),
    content: `Tree rings for de elven-kings under de sky,
seven for dwarf-lords in their 'alls av cossie,
nine for mortal tren doomed ter die,
one for de dark lord on 'is dark throne
in de lan' av mordor wha de shadows fib.
one rin' ter rule dem al', wan rin' ter fend dem,
one rin' ter brin' dem al' an' in de darkness bind dem
in de lan' av mordor wha de shadows fib.`
  },
  244: {
    ...planet("Аризона, Дакота", "Galenhir"),
    content: `Three Rings fer Elven-kings under the sky,
Seven fer the Dwarf-Lords in ther' halls o' stone,
Nine fer Mortal Men doomed ta die,
One fer the Dark Lord on his dark throne
In the Land of Mordor where the Shadows lie.
One Ring ta rule them all, One Ring ta find them,
One Ring ta bring them all in the darkness bind them
In the Land of Mordor where the Shadows lie.`
  },
});

const dialects2 = make({ language: "en" }, {
  347: {
    input: "0.14.0",
    name: "Ali G's jargon",
    author: "Cirion_12thRulingSteward",
    content: `Trey rings fa da elvun-kings unda da sky,
sevun fa da dwarf-lords in their alls of stone,
nine fa mortal bruvers doomed to die,
one fa da dark lord on is dark throne
in da turf of mordor where da shadows lie.
one rin to rule them all, one rin to check them,
one rin to brin them all and in da darkness bind them
in da turf of mordor where da shadows lie.`
  },
  374: {
    input: "0.15.0",
    name: '"Swedish chef!", Bork, bork, bork!',
    author: ME,
    content: `Three-a Reengs fur ze Ilfee Keengs under ze sky,
Sefee fur ze Dverff Lurds in zeeur hells ooff stune-a,
Neene-a fur Murtel Mee, duumed tu deee-a,
Oone-a fur ze Derk Lurd aon hees derk thrune-a,
In ze lund ooff Murdur, vhere-a ze shedoos leee-a,
Oone-a Reeng tu roole-a zeem ell, Oone-a Reeng tu feend zeem,
Oone-a Reeng tu breeng zeem ell und in ze derkness beend zeem
In ze lund ooff Murdur, vhere-a ze shedoos leee-a.`
  },
  448: {
    input: "1.0",
    name: "Redneck",
    author: "Kevrathorn the Silver",
    book: ["E-r", 53],
    content: `Three rings for them pointed ear people under up yonder,
Sevn for them Short axemen people up in der places of rock
Nine for normal folks who goin to kick the bucket,
One for that black armored sum bitch in the bad place.
In the country of Modor where it's like a bad subdivision.
One bad boy to be the big hoss, One of em to fetch em,
One rang to haul em up and in the hood, tie em up
In the place with bad heathens where it the dark up in the death.`
  },
});

const dialects3 = make({ language: "en", input: "0.16.5", author: ME }, {
  416: {
    name: "(Ниж.) Шотландия",
    content: `Three rings for the Elfin-kings unner the sky,
Seeven for the Dwarf-lords in their ha's o stone.
Nine for Mortal Men, doomed tae dee,
Ane for the Dark Lord on his dark throne
In the land o Mordor where the Shaidaes lie.
Ane Ring tae rule thaim a', Ane Ring to fin thaim,
Ane Ring tae bring thaim a' an in the darkness bind thaim
In the land o Mordor where the Shaidaes lie.`
  },
  417: {
    name: "Frenglish",
    content: `A triad of Circles for the Elven-governors under the blue,
A heptad for the Gnome-princes in their subterranean caverns,
An ennead for Mortal Humans, destined to depart,
Single for the Obscure Commander on his obscure throne
In the country of Mordor that the phantoms inhabit.
Single Circle to govern them all, Single Circle to search them,
Single Circle to collect them all and in the obscurity chain them
In the country of Mordor that the phantoms inhabit.`
  },
  418: {
    name: "Anglish",
    content: `Three Rings for the Elven-kings under the sky,
Seven for the Dwarf-lords in their halls of stone,
Nine for short-living Men doomed to die,
One for the Dark Lord in his dark land,
In the land of Mordor where the Shadows lie.
One Ring to rule them all, One Ring to find them,
One Ring to bring them all and in the darkness bind them
In the land of Mordor where the Shadows lie.`
  },
});

export const dialects = [
  dialects1,
  dialects2,
  dialects3,
];
