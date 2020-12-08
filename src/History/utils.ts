import { Data, DataItem } from "../data";

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

export const getHistoryItems = (data: Data) => {
  const byVer: Record<string, DataItem[]> = {};
  Object.values(data.num).forEach(t => {
    const arr = byVer[t.input] || [];
    byVer[t.input] = [...arr, t];
  });

  return Object.values(byVer)
    .map(items => ({ input: items[0].input, items }));
};
