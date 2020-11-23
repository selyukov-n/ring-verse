import { fromLotR, make, makeSource } from "../utils";
import { ME } from "../authors";

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
  }
});

export const ru2 = make({ language: "ru" }, {
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
});
