import { loadLocale } from "./locales";
import { msg as ru } from "./ru";

const lang = loadLocale();
const msg: typeof ru = lang === "en" ? require("./en").msg : ru;

export const messages = msg;
export const makeName = (type: "revised" | "translation" | "variant" | "similar", num: number) => `${messages.names[type]} #${num}`;
