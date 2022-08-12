import { formatDate, Season } from "./dates";
import { makePluralize } from "./plurals";
import { msg as m } from "./ru";

const seasons: Record<Season, string> = {
  winter: "winter",
  spring: "spring",
  summer: "summer",
  autumn: "autumn",
};
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const enPlural = makePluralize<"one" | "other">("other");
const plural = (n: number, one: string, other = one + "s") => enPlural(n, { one, other });

export const msg: typeof m = {
  formatDate: date => formatDate(date, seasons, months),
  header: {
    credits: "Credits",
    history: "History",
    //sources: "Sources",
    lang: "Language",
    total: "Total",
  },
  history: {
    version: "Version",
    date: "Date",
    added: "Added",
    total: "Total",
    new: "Added languages",
    sources: "Sources",
    languages: "Languages",
  },
  langCount: num => plural(num, "language").text + " total",
  lotr_printed: "LotR translation (printed edition)",
  names: {
    literal: "literal translation",
    lotr: "from LotR translation",
    reconstruction: "reconstruction",
    revised: "revised",
    similar: "similar to",
    translation: "translated from",
    variant: "variant of",
  },
  translation: {
    source: "Source",
  },
  searchPlaceholder: "Search language",
};
