import { ME } from "./authors";
import original from "./main";
import { Item, ItemGroup } from "./types";
import { forEach, makeSource } from "./utils";

export { isMine } from "./utils";

export const main: Item = {
  language: "en",
  name: "Original",
  content: [original]
};

const ru1: Item = {
  language: "ru",
  name: "LotR translation G&G",
  source: makeSource("LotR translation G&G", "R-4", 128),
  content: [{
    author: "Илья Гриншпун",
    text: `Три - эльфийским владыкам в подзвездный предел;
Семь - для гномов, царящих в подгорном просторе;
Девять - людям, чей выверен срок и удел.
И одно - Властелину на черном престоле
В Мордоре, где вековечная тьма:
Чтобы всех отыскать, воедино созвать
И единою черною волей сковать
В Мордоре, где вековечная тьма.`
  }]
};
const ru2: Item = {
  language: "ru",
  name: "LotR translation K&K",
  source: makeSource("LotR translation K&K", "R-8", 132),
  content: [{
    author: "М.Медведев, М.Каменкович",
    text: `Три кольца - высшим Эльфам под кровом светил,
Семь - властителям Гномов под кровом земли.
Девять - людям, чей жребий - молчанье могил,
И одно - Повелителю гибельных сил
В царстве Мордора мрачном, где тени легли.
Отыскать их, собрать их, предать их ему,
Воедино сковать их и ввергнуть во тьму
В царстве Мордора мрачном, где тени легли.`
  }]
};

const q: Item = {
  language: "quenya",
  source: "My translation",
  content: [{
    author: ME,
    text: `Nelde Cormar Eldaranin nu ilwenna,
Otso Nauco-herin sarne hrótantassen,
Nerte Firin ambartanen firienna,
Mine Herumoren mormahalmaryasse
Morinóresse yasse Huini caitar.
Mine Corma turien te ilya, Mine Corma tuvien te,
Mine Corma tultien te ilya ar huinesse nutien te
Morinóresse yasse Huini caitar.`
  }]
};


export type ItemNum = Item & { index: number };

const mergeGroups = (...groups: ItemGroup[]) => {
  const result = {
    lang: {} as Record<string, ItemNum[]>,
    num: {} as ItemGroup,
  };
  const keys = new Set<number>();
  groups.forEach(g => forEach(g, (item, index) => {
    if (!item) return;

    if (keys.has(index))
      console.error("Duplicate index " + index);

    keys.add(index);
    result.num[index] = item;

    const rec = result.lang[item.language] || [];
    rec.push({ ...item, index });
    result.lang[item.language] = rec;
  }));
  return result;
};

export type Data = ReturnType<typeof mergeGroups>;

export default mergeGroups(
  { 1: main, 2: ru1, 3: ru2 },
  { 6: q },
  require("./bs").default,
);
