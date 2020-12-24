import { loadLocale } from "../../intl";
import { JokesLang } from "../jokes";
import * as n from "./names";

const loadMessages = (): typeof n => {
  const lang = loadLocale();
  switch (lang) {
    case "en": return require("./en");
    case "es": return require("./es");
    default: return n;
  }
};

export const { arda, languages, conlangs, encodings, groups } = loadMessages();

export const jokes: Record<JokesLang, string> = {
  "j.en": groups._en,
  "j.po": groups._po,
  "j.ru": groups._ru,
};
