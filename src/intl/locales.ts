export const locales = {
  ru: "Русский",
  en: "English",
  es: "Español",
};

export type Locale = keyof typeof locales;

export const isLocale = (str: string | null): str is Locale => (str as any) in locales;

export const loadLocale = (): Locale => {
  const locale = localStorage.getItem("locale");
  return isLocale(locale) ? locale : "ru";
};

export const switchLocale = (locale: Locale) => {
  localStorage.setItem("locale", locale);
  window.location.reload();
};
