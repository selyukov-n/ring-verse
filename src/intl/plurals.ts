import { loadLocale } from "./locales";

type R = Intl.LDMLPluralRule;

export const makePluralize = <K extends R>(fallback: K, defaultFormat = "{0} {1}") =>
  (n: number, plurals: Record<K, string>, format = defaultFormat) => {
    const pl = new Intl.PluralRules(loadLocale()).select(n);
    const form = pl in plurals ? (plurals as any)[pl] : plurals[fallback];
    const replaces: Record<string, string> = { 0: n.toString(), 1: form };
    const text = format.replace(/{([01])}/g, (_, n) => replaces[n]);
    return { form, text };
  };
