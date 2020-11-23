import { Item } from "./types";
import { ME } from "./authors";

export const isMine = (item: Item) => item.content.some(c => c.author.includes(ME));

export const makeSource = (main: string, num: string, page: number) => ({
  main,
  book: { page, num },
});

export const forEach = <T>(input: Record<number, T>, func: (t: T, num: number) => any) => {
  Object.keys(input).forEach(k => {
    const num = parseInt(k);
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
