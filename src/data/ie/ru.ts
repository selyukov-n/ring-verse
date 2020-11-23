import { ME } from "../authors";
import { fromLotR, make, makeSource, map } from "../utils";
import { sources } from "../sources";

export const ru1 = make({ language: "ru" }, {
  2: {
    name: fromLotR("Г&Г"),
    source: makeSource( "R-4", 128),
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
    source: makeSource("R-8", 132),
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
    source: makeSource("R-6", 130),
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
    source: makeSource("R-2", 126),
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
    source: makeSource("R-14", 138),
    author: ME,
    content: `Три - эльфийским царям, под небесную твердь,
Семь - правителям гномов, под каменный свод,
Девять - людям, кому суждено умереть
И одно - для Владыки - на черный престол
В земле Мордора, где вечно Тени лежать.
Одно - всеми чтоб править, чтоб их отыскать,
Всех во мраке созвать и во мраке сковать
В земле Мордора, где вечно Тени лежать.`
  },

  11: {
    name: fromLotR(),
    source: makeSource("R-7", 131),
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
    author: "А.В.Застырец",
    content: `Три Кольца - Эльфам-Королям в поднебесной долине,
Семь - Гномам-Властителям в чертоге горном,
Девять - Смертным Людям, обреченным кончине,
Одно - Темному Лорду на его троне черном
В стране Мордор, где притаились Тени.
Одно - чтоб всеми управлять, Одно - чтоб все их отыскать,
Одно Кольцо - чтоб всех собрать и в темноте навек связать
В стране Мордор, где притаились Тени.`,
    source: {
      main: "переписано с книги в магазине",
    },
  },
});

export const ru2 = map(make({ language: "ru" }, {
  13: {
    name: fromLotR(),
    source: makeSource("R-3", 127),
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
    source: makeSource("R-15", 139),
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
    source: makeSource("R-16", 140),
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
    source: makeSource("R-1", 125),
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
}), t => ({ ...t, source: { ...t.source, main: sources.ank } }));
