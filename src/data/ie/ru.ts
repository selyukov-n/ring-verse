import { IDerzhansky, ME } from "../authors";
import { book, fromLotR, make } from "../utils";

const ru1 = make({ language: "ru", input: "0.0.1" }, {
  2: {
    name: fromLotR("Г&Г"),
    book: book( "R-4", 128),
    author: "Илья Гриншпун",
    content:  `Три - эльфийским владыкам в подзвездный предел;
Семь - для гномов, царящих в подгорном просторе;
Девять - людям, чей выверен срок и удел.
И одно - Властелину на черном престоле
В Мордоре, где вековечная тьма:
Чтобы всех отыскать, воедино созвать
И единою черною волей сковать
В Мордоре, где вековечная тьма.`,
  },
  3: {
    name: fromLotR("К&К"),
    book: book("R-8", 132),
    author: "М.Медведев, М.Каменкович",
    content: `Три кольца - высшим Эльфам под кровом светил,
Семь - властителям Гномов под кровом земли.
Девять - людям, чей жребий - молчанье могил,
И одно - Повелителю гибельных сил
В царстве Мордора мрачном, где тени легли.
Отыскать их, собрать их, предать их ему,
Воедино сковать их и ввергнуть во тьму
В царстве Мордора мрачном, где тени легли.`
  },
  4: {
    name: fromLotR(),
    book: book("R-6", 130),
    author: "В.Г.Тихомиров [В.Воседой ??]",
    content: `Эльфам - Три Кольца - во владенья светлые.
Гномам - Семь Колец - в копи горные.
Девять - Людям-Мертвецам, ибо люди - смертные.
И Одно - Владыке Тьмы, в земли черные -
В Мордор, где таятся силы тьмы несметные.
В том одном Кольце - сила всех колец,
Приведет в конце всех в один конец -
В Мордор, где таятся силы тьмы несметные.`
  },
  5: {
    name: fromLotR("КистяМур"),
    book: book("R-2", 126),
    author: "Андрей А. Кистяковский",
    content: `Три кольца премудрым эльфам - для добра их гордого,
Семь колец пещерным гномам - для труда их горного,
Девять - людям Средиземья - для служенья черного
И бесстрашия в сраженьях смертоносно твердого,
А Одно - всесильное - Властелину Мордора,
Чтоб разъединить их всех и лишить их воли
И объединить их всех в их земной юдоли
Под владычеством всесильным Властелина Мордора.`
  },
  8: {
    book: book("R-14", 138),
    author: ME,
    content: `Три - эльфийским царям, под небесную твердь,
Семь - правителям гномов, под каменный свод,
Девять - людям, кому суждено умереть
И одно - для Владыки - на черный престол
В земле Мордора, где вечно Тени лежать.
Одно - всеми чтоб править, чтоб их отыскать,
Всех во мраке созвать и во мраке сковать
В земле Мордора, где вечно Тени лежать.`
  }
});

const ru2 = make({ language: "ru" }, {
  11: {
    name: fromLotR(),
    book: book("R-7", 131),
    input: "0.0.2",
    author: "А.В.Немирова ?",
    content: `Три кольца эльфам, под небом поющим,
Семь колец гномам, в пещерах живущим,
Девять - для смертных могучих мужей,
Одно - Властелину на черном престоле
В Мордоре мрачном, обители горя.
Свяжет Кольцо их, скует без цепей.
Три, Семь и Девять свяжет Одно,
Волю их сломит, погасит оно,
В Мордоре мрачном, жилище теней.`
  },

  34: {
    input: "0.1.2",
    author: "А.В.Застырец",
    content: `Три Кольца - Эльфам-Королям в поднебесной долине,
Семь - Гномам-Властителям в чертоге горном,
Девять - Смертным Людям, обреченным кончине,
Одно - Темному Лорду на его троне черном
В стране Мордор, где притаились Тени.
Одно - чтоб всеми управлять, Одно - чтоб все их отыскать,
Одно Кольцо - чтоб всех собрать и в темноте навек связать
В стране Мордор, где притаились Тени.`,
  },

  94: {
    input: "0.2.5",
    author: IDerzhansky,
    content: `Вот три Кольца - для знатных эльфов, ключи природы сторожить,
Да семь Колец - для гордых гномов, что к золоту питают страсть,
Да девять - смертным человекам, недолго суждено им жить,
Одно ж Кольцо - владыке Мрака, над миром всем чтоб принять власть,
Чтоб всем им вечно, вековечно престолу темному служить.
Одно Кольцо - чтоб всеми править, одно Кольцо - их разыскать,
Одно Кольцо - чтоб всех доставить и в мраке Мордора связать,
Чтоб всем им вечно, вековечно престолу темному служить.`
  },

  96: {
    input: "0.2.9",
    name: fromLotR(),
    author: "И.И.Мансуров",
    book: book("R-9", 133),
    source: "переписано из книги",
    content: `Три Кольца - для властителей эльфов под серебряным светом луны;
Семь Колец - для правителей гномов из волшебной подгорной страны;
Девять - смертным, чьи дни уж давно сочтены;
И Единое - всех их собрать,
В цепь зловещую всех их связать
Под Владычеством Мордора Черного
В царcтве мрачном, где тени легли.`
  },

  111: {
    input: "0.3.7",
    author: ME,
    book: book("R-17", 141),
    content: `Есть Три Кольца, что эльфийским владыкам под небом давались,
А еще Семь властителям гномов в их каменных залах даны,
Девять Колец смертным людям, на смерть обреченным судьбою, достались,
И Одно - для сидящего на черном троне Властителя тьмы
В стране Мордор, где тени извечно лежат и скрывается зло.
То Кольцо Одно - чтоб управлять остальными, Одно Кольцо - их разыскать,
Одно предназначено всех их собрать и во тьме их сковать
В стране Мордор, где тени извечно лежат и скрывается зло.`
  },
  112: {
    input: "0.3.8",
    author: [],
    content: `Три кольца для одиннадцати :-) королей под небом,
семь – для Гномов-лордов в их каменных покоях,
девять – для смертных бренных, обреченных погибнуть,
одно – королю Тьмы, на его черном троне
в царстве Мордор, где тени лежат.
Одно кольцо, чтобы править им всем :), одно кольцо, чтобы найти их,
одно, чтобы собрать вместе, в темноте повязать
в царстве Мордор, где тени лежат.`
  },
  114: {
    input: "0.4.1",
    author: "Айлинель [ХА]",
    content: `Три кольца - для эльфийских владык, что под небом живут.
Семь - для гномов, королей подземного народа.
Девять - людям, тем что обязательно умрут.
И Одно - для проклятого черного Лорда
В Мордоре, где вечная тьма лежит.
Одно кольцо, чтоб ими править,
Одно кольцо, чтоб их найти,
Одно кольцо, чтобы собрать их,
И чтоб связать их все в тени.
В Мордоре, где вековечная тьма.`
  },
  120: {
    input: "0.5.1",
    author: "Bete Noire [ХА]",
    content: `Есть три кольца для прекрасных эльфов,
Есть семь колец для пещерных гномов,
И девять - целых девять - колец для людей.
Но лишь одно Властелину в Мордор,
Всего одно Властелину в Мордор,
В печальный край бессчетных теней.

Одно кольцо, чтобы всех собрать их,
Одно кольцо, чтобы всех созвать их,
В печальный край - ужасный край - бессчетных теней.
Одно кольцо, чтоб лишить их воли,
Объединить в их земной юдоли,
Под властью кольца, до скончания дней`
  },
});

const ru3 = make({ language: "ru", input: "0.0.5" }, {
  13: {
    name: fromLotR(),
    book: book("R-3", 127),
    author: "В.А.М. aka Валерия А. Маторина",
    content: `Три Кольца - Владыкам Эльфов под высоким небом.
Семь - для Гномьих Королей в каменных дворцах,
Девять - Смертным, обреченным мало жить и кануть в небыль,
И Одно - для Властелина, чей престол - черных прах
В Мордоре, где залегает Мрак.
Единое, чтоб всеми править,
Единое, чтоб всех сыскать,
Единое, чтоб их собрать и в цепь сковать
В Мордоре, где залегает Мрак.`
  },
  14: {
    author: "С.Кудра",
    content: `Три кольца для Альвов королей  под неба шатер
Семь для Гномов - владык  в подгорном просторе
Девять смертным на смерть обреченным судьбой
И Одно для Владыки на Темном Троне
В землях Мордора Тени легли
Одно Кольцо - вести всех, Одно Кольцо - найти их
Одно Кольцо - призвать всех и во тьме связать их
В землях Мордора Тени легли`
  },
  15: {
    author: "А.Мазин",
    content: `Три кольца - для эльфов, в каменный чертог,
Семь - для знатных гномов в каменном дворце.
Девять - смертным, чей ведом итог,
Одно - владыке в черном венце -
В Мордоре, где сумрак вековечный лег.
Одним покорит их,
Одним найдет их,
Одним притянет
И тьмой оплетет их -
В Мордоре, где сумрак вековечный лег.`
  },
  16: {
    author: "Крутт (?)",
    book: book("R-15", 139),
    content: `Три - для Дивного народа,
Семь - для гномов из Горы,
Девять - людям Нуменора,
И Одно - для Князя Тьмы.
В темном, сумрачном Мордоре,
Чтобы вместе все собрать
И единой черной волей крепко навеки сковать.
В темном, сумрачном Мордоре.`
  },
  17: {
    author: "О.Лошманов",
    book: book("R-16", 140),
    content: `Три кольца для Эльфийских царей, что под небом,
  Семь - для Гномов - хозяев чертогов подгорных,
Девять - Смертным, чьё Время покроется снегом,
  И одно лишь Владыке престолов всех тёмных
В Чёрных Землях, от солнца закрывшихся пеплом.
  Одно Кольцо, чтобы приказывать прочим,
  Чтоб найти их, собрать их и перековать
            в Кольцо Вечной Ночи
В Чёрных Землях, от солнца закрывшихся пеплом.`
  },
  18: {
    name: fromLotR(),
    author: "В.Муравьев",
    book: book("R-1", 125),
    content: `Три Кольца - для царственных эльфов в небесных шатрах,
Семь - для властительных гномов, гранильщиков в каменном лоне,
Девять - для Девятерых, облеченных в могильный прах,
Одно наденет Владыка на черном троне
В стране по имени Мордор, где распростерся мрак.
Одно Кольцо покорит их, одно соберет их,
Одно их притянет и в черную цепь скует их
В стране по имени Мордор, где распростерся мрак.`
  },
  19: {
    author: "О.Леденев",
    content: `Три Кольца - светлейшим принцам эльфов поднебесных,
Семь - царям подгорных гномов во дворцах чудесных,
Девять - смертным людям, на погибель обреченным,
И Одно - владыке Мрака на престоле черном,
  Там, где тени прячутся, в Мордорской стране.
Одному Кольцу дано властвовать над ними,
Отыскать их, привести и объединить их
  Там, где тени прячутся, в Мордорской стране.`
  },
  20: {
    author: ["Татьяна Антонян", "Александр Кучеровский"],
    content: `Три Кольца — королям эльфов, под небом рожденным.
Семь — гномов владыкам в чертогах подземных.
Девять — людям, не вечным, на смерть обреченным
Одно — Тьмы Властелину на троне черном
В стране Мордор, где мрак царит.
Кольцо Одно, чтоб всеми править,
Кольцо Одно, чтоб всех найти,
Кольцо Одно, чтоб всех сковать и в темноте свести
В стране Мордор, где мрак царит`
  }
});

const ru4 = make({ language: "ru", input: "0.2.0" }, {
  38: {
    name: fromLotR("?"),
    author: "Юлия Баталина",
    book: book("R-5", 129),
    content: `Есть Три Кольца для Поднебесных эльфов-королей
И Семь для принцев-гномов в каменистых норах,
Да Девять для бессильных перед смертию людей,
Но Господину Тьмы на Темном Троне,
В стране Мордор, куда ложатся Тени, -
Одно Кольцо, чтоб ими управлять,
Одно Кольцо, чтобы их разыскать,
Одно Кольцо, чтоб вместе их собрать
и в этой полной темноте связать
В стране Мордор, куда ложатся Тени.`
  },
  39: {
    author: "Кирилл Злобин",
    book: book("R-13", 137),
    content: `Три Кольца - для эльфов под куполом небес,
Семь - владыкам гномов под сводами пещер,
Девять - смертным людям с гибельной судьбой,
А одно - владыке темному на троне
В Мордоре, чьи земли мрак покрыл собой.
А одно - найти их всех, а одно - созвать их,
А одно - собрать их всех и в черной тьме сковать их
В Мордоре, чьи земли мрак покрыл собой.`
  },
  40: {
    name: fromLotR("?"),
    author: "Н.Эстель",
    book: book("R-10", 134),
    content: `Три Кольца - владыкам эльфов под небесным сводом;
Семь Колец - искусным гномам во дворце подгорном;
Девять - людям Средиземья, на смерть обреченным,
А одно - владыке тьмы на престоле черном,
В Мордоре, где ночь и день суть одно и то же.
Чтобы отыскать их всех, чтоб связать их крепко,
Чтоб закабалить навек и во тьму их ввергнуть
В Мордоре, где ночь и день суть одно и то же.`
  },
  41: {
    author: "Е.Чудинова",
    content: `Три - эльфийским владыкам; семь - подгорным царям;
Девять - смертному роду; последнее - к черным вратам.
Последнее - к черным пределам;
Последнее - в черный чертог,
Чтоб сделать черное дело
Хозяин Мордора смог.
Сужден удел всеединый:
род смертных и вечный народ
Черного Властелина
проклятьем кольцо замкнет.`
  },
  42: {
    author: "Г.Виноградов",
    content: `Три кольца - эльфам, под небом рожденным,
Сем колец - гномам, в пещерах подгорных,
Девять - смертным, на смерть обреченным,
А одно - для властителя мрачного трона
В тьмой окутанном Мордоре.
Одно - чтоб править ими. Одно - чтоб их найти,
Одно - чтоб возвратить их и тьмою оплести
В тьмой окутанном Мордоре.`
  },
  43: {
    author: "Кеменкири",
    content: `На землях Мордора, где тени залегли,
Одно Кольцо единой цепью свяжет
Три, девять, семь - и общий путь укажет
На землях Мордора, где тени залегли.
Под небом - эльф, гном - в каменной пыли,
А смертный мнит - в могилу скоро ляжет...
Но в землях Мордора, где тени залегли,
Одно Кольцо их черной цепью свяжет.`
  },
  44: {
    author: "В.Авербух",
    content: `Три Кольца - прекрасным эльфам в светлой вышине,
семь - трудолюбивым гномам в каменном краю,
ровно девять - смертным людям, сильным на коне,
и одно - на троне черном черному царю
в Мордоре, стране теней, черной стороне,
чтобы править ими всеми: чтобы отыскать их,
чтобы в Мордоре собрать их и во тьме связать их,
в Мордоре, стране теней, черной стороне.`
  },
  45: {
    author: [],
    content: `Три Кольца - для эльфов в небесных шатрах.
Семь для гномов - гранильщиков в каменном лоне.
Девять для людей, облеченных в могильный прах.
Одно наденет Владыка на черном троне
В земле по имени Мордор,
Где распростерся мрак.
Одно соединит их, скует в одну цепь,
Черную Силу неразделимую
И будут знать они одну цель -
Службу Великому Властелину.`
  },
  46: {
    author: "Ю.Л.Пузис",
    content: `Три Кольца - для Эльфийских царей под небесною твердью,
Семь - для властителей-Гномов в их каменных залах,
Девять - Людям, навек обрученным со смертью,
Одно - Властелину на черном престоле ковалось
В землях Мордора, где стелятся тени...
Одно Кольцо - ими править всеми. Одно Кольцо - отыскать их,
Одно Кольцо - заманить их племя и там, во тьме, заковать их
В землях Мордора, где стелятся тени.`
  },
  47: {
    author: "И.К.Тимофеев",
    content: `Три кольца даны эльфам, сто под небом живут,
Семь - гномьим владыкам в подземных их странах,
Девять - людям, что смерти не избегут,
ОДНО - властелину на троне поганом
На Мордорской земле, там, где тени лежат.
То Одно - чтобы править, чтоб Кольца найти,
В темноте чтоб в единую цепь их свести
На Мордорской земле, там, где тени лежат.`
  },
  48: {
    author: "А.В.Щуров",
    content: `Три Кольца - эльфийским владыкам в сиянье светил,
Семь - государям карлов в каменном чреве горы,
Девять - смертным мужам, удел чей - провалы могил,
Одно - Черному Властелину на троне мглы
В стране Мордор, где черный мрак все укрыл.
Воедино созвать - Одному, воедино собрать - Одному,
Воедино сковать - Одному, чтобы их низвергнуть во тьму
В стране Мордор, где черный мрак все укрыл.`
  }
});

const ru_olmer = make({ language: "ru", input: "0.5.9" }, {
  123: {
    author: "Рыжая Nica [fanfiction.pp.ru]",
    book: book("R-18", 142),
    content: `Три - для Дивных Королей в поднебесной выси,
Семь - для Гномов из горы, Лордов каменного лона,
Девять - людям Нумерона для смертельной жизни,
Одно - для Властелина Тьмы, Лорда темного престола
В Землях Мордора, где Тени пали.
Одно Кольцо направит всех, Одно Кольцо найдет их,
Одно Кольцо притянет всех и во тьме скует их
В Землях Мордора, где Тени пали.`
  },
  124: {
    author: "Valek [tolkien.olmer.ru]",
    content: `Три Кольца для светлых Эльфов под высоким синим небом,
Семь для Гномов, что в чертогах под скалою правят гордо,
Девять - Людям, наделенным злой судьбой коротким веком,
А Одно для Властелина, что сидит на троне черном
В Мордоре, где в странном танце Тени движутся бессменно.
Для того, чтоб всеми править, всех найти, служить заставить
Чтоб на нужный путь направить и во тьме навек оставить.
В Мордоре, где в странном танце Тени движутся бессменно.`
  },
  125: {
    author: "Траин Тунеядец [tolkien.olmer.ru]",
    content: `Три Кольца - Царям Эльфийским, правителям под небесами;
Семь - Гномьим Лордам, правящим в царстве подгорном;
Девять - на смерть обречённым, что звались давно королями;
Одно - Повелителю Мрака на Троне Чёрном,
В землях Мордора, залитых тенями.
Одно Кольцо, дабы власть навеки получить.
Одно Кольцо их сможет отыскать.
Одно Кольцо, чтобы во мрак их заманить,
И там их в цепи заковать.
В землях Мордора, залитых тенями.`
  },
  126: {
    author: "The Unforgiven [АнК] aka Санделло [ХА]",
    content: `Три - эльфийскиим королям под небом,
Семь - лордам гномов в каменных залах,
Девять - людям, Смертью скованным
И Одно - Лорду Тьмы на троне,
В Мордоре, Земле Теней
Одно - найти, связать, сковать
В Мордоре, Земле Теней.`
  },
  127: {
    author: "Вотан [tolkien.olmer.ru]",
    content: `Три кольца – владыкам эльфов, чьи владенья под небом,
Семь – предводителям гномов в каменных залах,
Девять – для смертных людей, обреченных на гибель,
И Одно Князю тьмы на черном престоле,
В земле по имени Мордор, где Тени легли,
Одно Кольцо соберет их, Одно всех призовет
И в единую черную цепь их скует,
В земле по имени Мордор, где Тени легли.`
  },
  128: {
    author: "DrooiD [tolkien.olmer.ru]",
    content: `Три кольца для Эльфов - королей поднебесных,
Семь для Гномов - в их подземных чертогах чудесных,
Девять Людям Смертным на погибель обреченным,
И Одно единое Лорду Тьмы на троне его черном
Там где Тени могут врать в Землях Мордора.

Одно Кольцо чтоб их найти, Одно Кольцо чтоб править всеми,
Одно кольцо чтоб их сплести навеки в темной цепи
Там где Тени могут врать в Землях Мордора.`
  },
  130: {
    author: "Disappear [tolkien.olmer.ru]",
    content: `Три кольца королям эльфийским под небесами,
Семь владыкам гномов в залах подгорных,
Девять людям, скованым смерти цепями,
Одно повелителю тёмному на чёрном троне
В краю по имени Мордор, осаждённом тенями.
Одно кольцо всеми ими управлять,
Одно кольцо чтоб их всех отыскать,
Одно чтобы всех воедино созвать
и в темноте навсегда заковать
В краю по имени Мордор, осаждённом тенями`
  },
});

export const list = [
  ru1, ru2, ru3, ru4,
  ru_olmer,
];
