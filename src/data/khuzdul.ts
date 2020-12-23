import { messages } from "../intl";
import { make } from "./utils";
import { sources } from "./sources";

export const kh = make({ language: "khuzdul" }, {
  496: {
    input: "1.1",
    source: sources.wikia,
    name: messages.names.reconstruction,
    author: [],
    content: `Gem ruthukhmuzûm khuthûzhmulhûkh undu mingal,
Hadud khazâdzubûdul ni aban-dumizd,
Tegur amradulûnh kigh maradî,
Ze dushelzabadul ayazabadogimhu.
Ni Nargûnzdin, uznîn binaganagî.
Ze ruthukhmizim nazurîzdel,
Ze ruthukhmizim umkhûhîzd,
Ze ruthukhmizim tashfabîzdel ra ni narag balhîzd
Ni Nargûnzdin, uznîn binaganagî.`
  },
});
