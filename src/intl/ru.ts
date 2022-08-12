import { DateParts, formatDate, Season } from "./dates";
import { makePluralize } from "./plurals";

const seasons: Record<Season, string> = {
  winter: "зима",
  spring: "весна",
  summer: "лето",
  autumn: "осень",
};
const months = [
  "январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];

const ruPlural = makePluralize<"one" | "few" | "many">("many");
const plural = (n: number, one: string, few: string, many: string) => ruPlural(n, { one, few, many });

export const msg = {
  formatDate: (date: DateParts) => formatDate(date, seasons, months),
  header: {
    credits: "Ресурсы",
    history: "История",
    //sources: "Источники",
    lang: "Язык",
    total: "Всего",
  },
  history: {
    version: "Версия",
    date: "Дата",
    added: "Добавлено",
    total: "Всего",
    new: "Новые языки",
    sources: "Источники",
    languages: "Языков",
  },
  langCount: (num: number) => plural(num, "язык", "языка", "языков").text,
  lotr_printed: "перевод ВК (печатное издание)",
  names: {
    literal: "дословный перевод",
    lotr: "из перевода ВК",
    reconstruction: "реконструкция",
    revised: "модификация",
    similar: "похоже на",
    translation: "перевод",
    variant: "вариант",
  },
  translation: {
    source: "Источник",
  },
  searchPlaceholder: "Поиск",
};
