import { JRRT, ME } from "./authors";
import original from "./main";
import { Item, ItemGroup } from "./types";

export { isMine } from "./utils";

export const main: Item = {
  language: "en",
  name: "Original",
  content: [original]
};

const makeSource = (main: string, num: string, page: number) => ({
  main,
  book: { page, num },
});

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

const bs: ItemGroup = { // TODO use tsx for bold parts ??
  7: {
    language: "black-speech",
    source: makeSource("", "BS-1", 33), // TODO
    content: [{
      author: [JRRT, "Julian Bradfield"],
      text: `Gakh nazgi Golug/Alboi/Ilid - durub-ûri lata-nût,
Udu takob-ishiz gund-ob Gazat-shakh-ûri,
Krith Shara-ûri matûrz matat dûmpuga,
Ash tug Shakhbûrz-ûr Ulîma-tab-ishi za
Uzg-Mordor-ishi amal fauthut burgûli.
Ash nazg durbatulûk, ash nazg gimbatul,
Ash nazg thrakatulûk agh burzum-ishi krimpatul
Uzg-Mordor-ishi amal fauthut burgûli.`
    }],
    comments: ["Duplicated in the Book (BS-5, p.35)"],
  },
  109: {
    language: "black-speech",
    source: makeSource("modification of #7", "BS-4", 34), // TODO link ?
    content: [{
      author: [JRRT, "Ennorion"],
      text: `Gakh Nazg Golug-durub-ûr nût-lata,
Udu Gazat-durub-ûr gundru-ulub-ishi,
Krith Shara matûrz-ûr dûmpuga matat,
Ash Bûrz-durub-ûr ulîma-tab-ishi
Uzbûrz-ishi amal burgûl fauthut.
Ash Nazg durbatulûk, Ash Nazg gimbatul,
Ash Nazg thrakatulûk agh burzum-ishi krimpatul
Uzbûrz-ishi amal burgûl fauthut.`
    }]
  },
};


export type ItemNum = Item & { index: number };

const mergeGroups = (...groups: ItemGroup[]) => {
  const result = {
    lang: {} as Record<string, ItemNum[]>,
    num: {} as ItemGroup,
  };
  const keys = new Set<number>();
  groups.forEach(g => {
    Object.keys(g).forEach(k => {
      const index = parseInt(k);
      const item = g[index];
      if (!item) return;

      if (keys.has(index))
        console.error("Duplicate index " + index);

      keys.add(index);
      result.num[index] = item;

      const rec = result.lang[item.language] || [];
      rec.push({ ...item, index });
      result.lang[item.language] = rec;
    });
  });
  return result;
};

export type Data = ReturnType<typeof mergeGroups>;

export default mergeGroups(
  { 1: main, 2: ru1, 3: ru2 },
  { 6: q },
  bs,
);
