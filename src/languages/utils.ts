type LangInfo<T extends string> = { type: "lang", id: T, name: string, author?: string };
type LangGroup<T extends string> = {
  type: "group";
  id: T;
  name: string;
  items: LangGroupItem<T>[];
};

export type LangGroupItem<T extends string> = LangInfo<T> | LangGroup<T>;

export const lang = <T extends string>(id: T, author?: string): LangInfo<T> => ({ type: "lang", id, name: id, author });
//export const langs = <T extends string>(...ids: T[]): LangInfo<T>[] => ids.map(id => lang(id));

export const group = <T extends string>(name: string, ...items: Array<LangGroupItem<T> | T>): LangGroup<T> => {
  const groupItems = items.map(it => typeof it === "string" ? lang(it) : it);
  return { type: "group", id: "" as T, name, items: groupItems };
};
