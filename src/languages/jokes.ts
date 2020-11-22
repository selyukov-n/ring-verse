import { group } from "./utils";
import { groups as g } from "./names";

export const jokes = group(g.jokes, "j.en", "j.ru", "j.po");
export type JokesLang = (typeof jokes)["id"];
