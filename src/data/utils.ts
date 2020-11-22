import { Item } from "./types";
import { ME } from "./authors";

export const isMine = (item: Item) => item.content.some(c => c.author.includes(ME));
