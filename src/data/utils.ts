import { Item } from "./types";
import { ME } from "./authors";

export const isMine = (item: Pick<Item, "author">) => Array.isArray(item.author) ? item.author.includes(ME) : item.author === ME;

export const book = (num: string, page: number, comment?: string) => ({ num, page, comment });

export const fromLotR = (name?: string) => "из перевода ВК" + (name ? `, ${name}` : "");

export const forEach = <T>(input: Record<number, T>, func: (t: T, num: number) => any) => {
  Object.keys(input).forEach(k => {
    const num = parseInt(k);
    if (!num) console.error('cannot parse number from ' + k);
    func(input[num], num);
  });
};

export const map = <T>(input: Record<number, T>, func: (t: T) => Item): Record<number, Item> => {
  const result: Record<number, Item> = {};
  forEach(input, (item, num) => {
    result[num] = func(item);
  });
  return result;
};

export const make = <K extends keyof Item>(common: Pick<Item, K>, items: Record<number, Omit<Item, K>>) => map(items, it => ({
  ...common,
  ...it,
}) as Item);

export const tonal = (text: string, subscript = false) => {
  const str = subscript
    ? "₀₁₂₃₄₅₆₇₈₉"
    : "⁰¹²³⁴⁵⁶⁷⁸⁹";
  return text.replace(/[0-9]/g, v => str[parseInt(v)]);
};
