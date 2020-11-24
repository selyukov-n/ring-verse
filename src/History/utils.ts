import { DataItem, isMine } from "../data";
import { HistoryDate } from "./types";

const months = [
  null,
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const formatDate = (date: HistoryDate) => {
  if (date.length === 3) return [...date].reverse().join(".");

  const part = typeof date[1] === "number" && months[date[1]] || date[1];
  return [part, date[0]].join(" ");
};

export class StatsCounter {
  private readonly sources = new Set<string>();
  private readonly langs = { total: new Set<string>(), me: new Set<string>(), current: new Set<string>() };

  private count = 0;

  next(items: Record<number, DataItem>, count: number) {
    for(let i = 0; i < count; i++) {
      const index = ++this.count;
      if (index > 1)
        this.add(items[index]);
    }
  }

  add(item: DataItem) {
    if (!item.language.startsWith("j.")) {
      if (!this.langs.total.has(item.language)) {
        this.langs.current.add(item.language);
      }
      this.langs.total.add(item.language);
      if (isMine(item))
        this.langs.me.add(item.language);
    }

    const src = item.source?.main;
    if (src) this.sources.add(src);
  }

  getCurrent() {
    const result = {
      sources: Array.from(this.sources),
      lang: {
        current: Array.from(this.langs.current),
        total: this.langs.total.size,
        me: this.langs.me.size,
      },
      count: this.count,
    };
    this.reset();
    return result;
  }

  reset() {
    this.sources.clear();
    this.langs.current.clear();
  }
}
