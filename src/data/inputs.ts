import { Input } from "./history";
import { sources } from "./sources";

const indexed = <T extends string>(input: Record<T, Input>) => input;

export const inputs = indexed({
  "0.0.1": { date: [2002, "spring"], mainSource: null },
  "0.0.2": { date: [2002, "spring"], mainSource: null },
  "0.0.5": { date: [2002, 5], mainSource: sources.ank },
  "0.0.7": { date: [2002, "summer"], mainSource: null },
  "0.1.0": { date: [2002, 12, 25], mainSource: sources.gwaith },
  "0.1.1": { mainSource: sources.gwaith },
  "0.1.2": { date: [2003, "winter"], mainSource: "переписано с книги в магазине" },
  "0.1.5": { date: [2003, 3, 3], mainSource: sources.drops },
  "0.2.0": { date: [2003, 3, 3], mainSource: sources.kniga2001 },
  "0.2.5": { date: [2003, 5, 19], mainSource: sources.iad },
  "0.2.8": { date: [2003, 5], mainSource: null },
  "0.2.9": { date: [2003, 5], mainSource: null },

  TODO: { mainSource: "TODO" },
});

export type InputKey = keyof typeof inputs;
