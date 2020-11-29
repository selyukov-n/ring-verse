import { sources } from "./sources";
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
  117: {
    input: "0.4.3",
    author: [],
    content: `Три эльфийских - вампирам, кто не сдохнет никак
Семь - для гномов, в могилах живущих,
Девять - людям, для тех, кто при жизни есть прах,
И одно - для Убийцы всех сущих.
В Мордоре, где мрак словно в склепе царит.
Чтобы всех пробудить и цепями скрепить,
А потом жутких зомбей из них сотворить
В Мордоре, где мрак словно в склепе царит.`
  },

  131: {
    input: "0.5.9",
    name: "лимерик",
    author: "Сууле и Раэне",
    content: `Саурон, любопытный агностик,
Знал загадку про кольца и гвоздик.
Вот семнадцать колец
Он собрал наконец -
Но куда же засовывать гвоздик?`
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

const ru_k = make({ language: "j.ru", input: "0.7.0", source: sources.kniga2001 }, {
  160: {
    name: "перевод #27",
    author: "А.Хитров",
    content: `Это именно кольцо сотворили эльфы,
Мать родную б заложили, чтоб его себе забрать.
Правитель всех ползающих, смертных и ракушек.
Это спящий, который готовит всем порку.
Всемогущая власть в этом Кольце,
Всеправая власть у его обладателя.
Сломанное или распиленное, восстановлению не подлежит.
Если кто найдет - отослать Сорхеду.
(Почтовый сбор оплачен)`
  },
  161: {
    name: "перевод #27",
    author: "С.Ильин",
    content: `Это Кольцо, никакое иное, выпало эльфам сковать,
Эльфы бы продали маму родную, только бы им обладать.
Спящему в нем Владыке подвластен и слон, и комар,
Будить Владыку не стоит, у Владыки боксерский удар.
Грозная Сила таится в этом Кольце Едином,
Сила сия себе на уме - сама хочет быть Господином.
При порче или поломке в ремонт Кольцо не берем.
Нашедшего просят послать Сыроеду наложенным платежом.`
  },
  162: {
    author: [],
    content: `Три пароля - для начальства,
К играм разным склонного,
Семь паролей - аспирантам
Для труда бессонного,
Девять - школярам-студентам
Для ученья долгого
И программ писания страшно монотонного.
А один пароль - всесильный -
Системщику строгому,
Чтоб разъединить их всех,
Чтоб их файлов списки
Вместе разместить навек
На рабочем диске,
Под владычеством всесильным
Системщика строгого.`
  },
  163: {
    author: [],
    content: `Три кольца - веселым эльфам, чтобы оттянулися,
Семь колец - занудным гномам, чтобы отвязалися,
Девять - банде шепелявой, чтоб боялись дети.
И одно - чтоб веселее всем жилось на свете.`
  },
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

const en2 = make({ language: "j.en" }, {
  132: {
    input: "0.5.9",
    name: "лимерик",
    author: "Сууле и Раэне",
    source: "?",
    content: `There was a Dark Lord in the Tower
Who created the One Ring of Power,
Then proceeded to hide
And then failed to find
This capricious One Ring of Power.

There was once the One Ring of Mordor
Which controlled the Nine Rings of the mortals
Plus the other ten Rings
Of Dwarf-lords and Elf-kings –
This makes twenty of them in the total.`
  },
  164: {
    input: "0.7.0",
    source: sources.kniga2001,
    author: [],
    content: [{
      title: "Lord of the OSs",
      text: `Three OSs for the Servers under the sky,
Seven for the Administrators in their halls of stone,
Hundreds for the Mortal Men doomed to die,
One for the Dark Lord on his dark throne,
In the land of Redmond where the shadows lie.
One OS to rule them all, One OS to find them,
One OS to bring them all and in the darkness bind them
In the land of Redmond where the shadows lie.`
    }]
  },
  245: {
    input: "0.9.1",
    author: `Loni [${sources.planetTolkien}]`,
    content: `Three wabs for the wab-ti-wabs under the wawab.
Seven for wabwas in their halls of wabbity.
Nine for wawabwas doomed to wabwab,
And one for the Klummwab [My wabname] on her dark wabbitywab.
One wab to invent them all, one wab to find them,
One wab to say them all until everyone goes mad.
In the land of Klummwab where the wabs lie.`
  },
});

const cm = (author: string) => ({ source: sources.captionmachine, author: `${author} [${sources.captionmachine}]` });
const en3 = make({ language: "j.en", input: "0.14.5" }, {
  366: {
    ...cm("miv"),
    content: `Three vetos for great powers under the sky,
Some votes for the dwarf lords in their halls of stone,
None for mortal men doomed to die,
One for the dark Bush on his dark throne,
In the big police state where the shadows lie,
One cash to rule them all, One to occupy them,
One cash to bring them all and in the darkness bind them!
In the big police state where the shadows lie.`
  },
  367: {
    ...cm("JK"),
    content: `Three Rings for the coalition under the sky,
Seven for the Muslim leaders in their bunkers of stone,
Nine for the Arabs doomed to die,
One for the Dark Lord on his dark throne
In the Land of the free where the Shadows lie.
One Ring to rule them all, One Ring to find them,
One Ring to bring them all and in the darkness bind them
In the U.S of A where the politicians lied.`
  },
  368: {
    source: "jihadwatch.org",
    author: "Narmer [jihadwatch.org/dhimmiwatch/]",
    content: `Three Rings for the Media-kings with cynical condescension high,
Seven for the Academics and western imperialism to bemoan,
Nine for Multiculturalism doomed to die,
One for the Islamist, with fascism cast in a religious tone
In the Land of Self-Loathing where Zionism and Racism tie.
One Ring to rule them all, One Ring to find them,
One Ring to bring them all and in political correctness blind them
In the Land of Self-Loathing where freedom and pluralism die.`
  }
});

export default [
  ru, ru_ank, ru_k,
  en, en2, en3,
];
