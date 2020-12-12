import { isMine, ItemNum, main } from "../data";
import { names } from "../languages";

export const compareVersions = (a: string, b: string): number => {
  const compareValue = (a: number, b: number) => isNaN(a) ? 1 : isNaN(b) ? -1 : (a - b);

  const ap = a.split(".");
  const bp = b.split(".");
  const max = Math.max(ap.length, bp.length);
  for(let i = 0; i < max; i++) {
    const ai = ap[i] || "0";
    const bi = bp[i] || "0";
    const an = parseInt(ai);
    const bn = parseInt(bi);

    const compare = isNaN(an) && isNaN(bn)
      ? ai.localeCompare(bi)
      : compareValue(an, bn);
    if (compare) return compare;
  }

  return 0;
};

type LangId = ItemNum["language"];
const groupLanguages = (set: Set<LangId>) => {
  const find = (names: Record<any, string>) => Array.from(set.keys())
    .map(k => k in names ? names[k] : "")
    .filter(Boolean);

  return {
    arda: find(names.arda),
    lang: find(names.languages),
    conlangs: find(names.conlangs),
    codes: find(names.encodings),
  };
};

export type LangGrouping = ReturnType<typeof groupLanguages>;

export class StatHelper {
  private readonly languages = new Set<LangId>();
  private readonly me = new Set<LangId>();

  append(items: Pick<ItemNum, "language" | "author">[]) {
    const current = new Set<LangId>();
    items.forEach(it => this.appendItem(it, current));

    return {
      ...this.getStats(),
      current: groupLanguages(current),
    };
  }

  private getStats() {
    const total = groupLanguages(this.languages);
    return {
      lang: total.arda.length + total.lang.length,
      conlang: total.conlangs.length,
      me: this.me.size,
    };
  }

  private appendItem(it: Pick<ItemNum, "language" | "author">, current: Set<string>) {
    if (it === main) return;

    const l = it.language;
    if (l.startsWith("j.")) return; // skip jokes for stats

    if (isMine(it)) this.me.add(l);

    if (!this.languages.has(l)) current.add(l);
    this.languages.add(l);
  }
}
