import { make, map } from "./utils";

const ru = make({ language: "j.ru" }, {
  9: {
    author: "Реактопласт Ультрафиолетовый",
    input: "0.0.2",
    content: `Три стакана наливаю эльфам из графина,
Гномам - семь, пускай ужрутся, серые дубины.
Своим людям девять ставлю,
  Чтоб создать веселье,
А потом канистру всю я себе оставлю
  На пьянку и похмелье.`
  },

  52: {
    author: "Элрун",
    input: "0.2.0",
    content: `Три звонка - для эльфийских владык с чердака,
Семь - для гномов, царящих в подвальном просторе,
Девять - смертным, что пьянствуют наверняка,
И один - бабе Нюре, что спит в коридоре:
Чтобы всех разыскать, воедино собрать,
За собою заставить бутылки сдавать
В коридоре, где вековечная тьма...`
  },
  53: {
    input: "0.2.0",
    name: "лимерик",
    author: "С.О.Рокдевятый",
    content: `Клубы дыма над Мрачной Горою...
Кольца нонече дешево стоят:
Девять, три или пять -
Саурону плевать.
У него есть одно, золотое...`
  },

  115: {
    input: "0.4.2",
    author: ["Vasya Gondorsky [ХА]", "Radio Weiss [ХА]"],
    content: `Три пароля - для фан-клубов - ради свуна полного,
Семь паролей - тем, кто флудит - для общенья спорного,
Девять - зрелым - для дискуссий взрослого подфорума,
Для участия в созданьи треда аматерного.
А один - всесильный - супер-модераторам,
Чтоб зарегистрить их всех, чтоб лишить паролей
И объединить навек в форумской юдоли
Под владычеством всесильным супер-модераторов.`
  },
});

const ru_ank = make({ language: "j.ru", input: "0.0.5" }, {
  21: {
    author: "Ю. и В.Казаковы",
    content: `Три для эльфов-разгильдяев,
  шибко благородных.
Семь для гномов-скупердяев
  в погребах холодных.
Девять - жмурикам отдам
  для житья за гробом.
И одно надену сам -
  просто так, для стеба.`
  },
  22: {
    author: [],
    content: `Три бублика пудрой посыплю,
    трех эльфов на них подманю.
И жадные лакомки эльфы
    сейчас же устроят резню.
Семь каменных бубликов гномам,
    чтоб зубы о них поломали,
А людям - из теста сырого,
    чтоб тысячу лет их жевали.
Тогда без помех остальное
    я съем и воссяду на трон...
На все Средиземье готовит
    сластей кулинар Саурон`
  },
  24: {
    author: [],
    content: `Три файла - для системы
Семь - для NC,
Девять текстовушек,
И Один - autoexec!
Чтоб создать из них account,
Чтоб внести их в списки,
И объединить навек на системном диске
Под владычеством всесильным программиста стpогого.`
  },
  28: {
    author: "Крутт",
    content: `Эльфам - три косяка
Гномам - семь "порошков" для прикола
Людям - девять колес
Властелину же - шприц плюс игла
В темном Мордоре - там, где выключен свет
Где готовит из эльфов Шелоб обед.
Чтоб Арду заглючить и на шприц посадить,
В темный Мордор чтоб всех навсегда заманить.
И чтоб Шелоб сварила Владыке обед
В темном Мордоре - там, где выключен свет.`
  }
});

export const en = map({
  23: {
    content: `Nine megs for the secretaries fair,
Seven megs for the hackers scarce,
Five megs for the grads in smoky lairs,
Three megs for system source;
One disk to rule them all,
One disk to bind them,
One disk to hold the files
And in the darkness grind 'em`
  },
  25: {
    content: `Three Nets for the Stanford Nethax under the Quad,
Seven for the MIT Hackers in their halls of stone,
Nine for Crays doomed to die,
One for NIC on its dark DECSYSTEM-2060
In the LANs of SRI where the shadows lie.
One Internet to rule them all, One Internet to find them,
One Internet to bring them all and in the ether bind them
In the LANs of SRI where the shadows lie.`
  },
  26: {
    content: `Three servers for Athena, which now runs MIT,
Nine for BARRNet, doomed to plunge into the Sea
Seven for Rutgers & JvNCNet, always a luse,
One for the NIC, to do whatever they choose.
One server to rule them, one server to find them,
One server to run them all, and with %HOSTADDR bind them,
In the land of Mordor where the shadows lie.`
  },
  27: {
    author: ["Henry N. Beard", "Douglas C. Kenney"],
    content: `This ring, no other, is made by the elves,
Who'd pawn their own mother to grab it themselves.
Ruler of creeper, mortal, and scallop,
This is the sleeper that packs quite a wallop.
The Power almighty rests in this Lone Ring.
The Power, alrighty, for doing your Own Thing.
If brocken or busted, it cannot be remade.
If found, send to Sorhed (the postage is prepaid).`,
  },
  29: {
    content: `Three rings for the Assembly-kings under the sky,
Seven for the C++-lords in their halls of stone,
Nine for Basic Users doomed to die,
One for Bill Gates on his blue-sky throne.
In the Land of Redmond where the Bugs lie,
One Ring to rule them all, one Ring to find them,
One Ring to bring them all, and the GPF will bind them,
In the Land of Redmond, where the Bugs lie.`
  }
}, t => ({ language: "j.en", input: "0.0.5", author: [], ...t }));

export default [
  ru,
  ru_ank,
  en,
];
