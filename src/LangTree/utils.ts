import { Data, isMine } from "../data";
import * as lng from "../languages";

export const getCounts = (data: Data["lang"], item: lng.LangGroupItem<any>,
                          result = { count: 0, me: 0 }) => {
  if (item.type === "group") {
    item.items.forEach(it => getCounts(data, it, result));
  } else {
    const translations = data[item.id] || [];
    result.count += translations.length;
    result.me += translations.filter(isMine).length;
  }
  return result;
};

export const langTypes = [ "arda", "languages", "conlangs", "encodings", "jokes" ] as const;

const findItem = (id: string, data: Record<typeof langTypes[any], any>) => {
  for(const t of langTypes) {
    const item = data[t][id];
    if (item) return item;
  }
};
const find = (id: string, items: lng.LangGroupItem<any>[]): lng.LangGroupItem<any> | undefined => {
  for (const t of items) {
    const found =
      t.type === "lang" && t.id === id && t ||
      t.type === "group" && find(id, t.items);
    if (found) return found;
  }
};

const findLang = (id: string) => {
  for(const t of langTypes) {
    const items = lng[t].items;
    const found = find(id, items);
    if (found) return found;
  }
}

export const findLanguage = (id: string, names: (typeof lng)["names"]) => {
  const lang = findLang(id);
  return lang
    ? { lang, name: findItem(id, names) }
    : undefined;
}
