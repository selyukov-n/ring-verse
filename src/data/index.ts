import { Input as I } from "./history";
import original from "./main";
import { Item, ItemGroup, Variant as V } from "./types";
import { forEach } from "./utils";

export { formatDate } from "./history";
export { inputs } from "./inputs";
export { isMine } from "./utils";

export const main: Item = {
  language: "en",
  name: "Original",
  input: "0.0.1",
  ...original
};

export type ItemNum = Item & { index: number };
export type DataItem = Item;
export type Input = I;

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
export type ItemVariant = V;

export default mergeGroups(
  { 1: main },
  ...require("./quenya").default,
  require("./bs").default,
  ...require("./sindarin").default,

  ...require("./ie").default,
  ...require("./lang").default,
  ...require("./conlang").default,

  ...require("./jokes").default,
);
