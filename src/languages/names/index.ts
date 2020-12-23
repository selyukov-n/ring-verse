import { loadLocale } from "../../intl";
import { JokesLang } from "../jokes";
import * as n from "./names";

const lang = loadLocale();

export const { arda, languages, conlangs, encodings, groups } = lang === "en" ? require("./en") : n;

export const jokes: Record<JokesLang, string> = {
  "j.en": groups._en,
  "j.po": groups._po,
  "j.ru": groups._ru,
};
