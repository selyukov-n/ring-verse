import * as names from "./names";
import { LangGroupItem as L } from "./utils";

export * from "./arda";
export * from "./conlangs";
export * from "./encodings";
export * from "./jokes";
export * from "./languages";

export type LangGroupItem<T extends string> = L<T>;
export { names };
