import { loadLocale } from "./locales";

export type Season = "spring" | "summer" | "autumn" | "winter";
export type DateParts = [number, number, number?] | [number, Season];

export const formatDate = (date: DateParts | Date, seasons: Record<Season, string>, months: string[]) => {
  if (Array.isArray(date)) {
    const [y, m, d] = date;
    if (typeof m === "string") {
      return `${seasons[m]} ${y}`;
    } else if (d === undefined) {
      return `${months[m - 1]} ${y}`;
    }

    date = new Date(y, m - 1, d || 1);
  }

  const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formatter = new Intl.DateTimeFormat(loadLocale(), options);
  return formatter.format(date);
};
