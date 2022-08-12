import { useCallback, useEffect, useState } from "react";
import { Data, isMine } from "../data";
import * as lng from "../languages";
import { StateProps } from "./Node";

export const getCounts = (data: Data["lang"], item: lng.LangGroupItem<any>,
                          result = { count: 0, me: 0, lang: 0 }) => {
  if (item.type === "group") {
    item.items.forEach(it => getCounts(data, it, result));
  } else {
    const translations = data[item.id] || [];
    result.count += translations.length;
    result.me += translations.filter(isMine).length;
    result.lang++;
  }
  return result;
};

export const useTreeState = (setGroupKeys = true): StateProps => {
  const [state, setState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!setGroupKeys) return;

    const ensureKeys = (item: lng.LangGroupItem<any>, path: string) => {
      if (item.type !== "group") return;

      if (!item.id) item.id = path;
      item.items.forEach((it, i) => ensureKeys(it, path + "/" + i));
    };

    langTypes.forEach(t => ensureKeys(lng[t], t));

    setState({
      arda: true,
      languages: true,
      conlangs: true,
    });
  }, [setGroupKeys]);

  const onToggle = useCallback((key: string) => setState(s => ({ ...s, [key]: !s[key] })), []);

  return { state, onToggle };
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

export const filterByName = <T extends string>(
    item: lng.LangGroupItem<T>, names: Record<T, string>, filterText: string
): boolean => {
  filterText = filterText.trim().toLocaleLowerCase();

  const checkName = (name = "") => {
    const normalized = name.normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\u0142/g, "l");
    return normalized.toLocaleLowerCase().indexOf(filterText) >= 0;
  }

  return (
      item.type === "lang" && checkName(names[item.id] ?? item.name) ||
      item.type === "group" && item.items.some(t => filterByName(t, names, filterText))
  );
}