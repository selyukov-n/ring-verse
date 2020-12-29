import { formatDate, Season } from "./dates";
import { msg as m } from "./ru";

const seasons: Record<Season, string> = {
  winter: "invierno",
  spring: "primavera",
  summer: "verano",
  autumn: "otoño",
};
const months = [
  "ene.", "feb.", "mar.", "apr.", "may.", "jun.", "jul.", "ago.", "sept.", "oct.", "nov.", "dic."
];

export const msg: typeof m = {
  formatDate: date => formatDate(date, seasons, months),
  header: {
    credits: "Recursos",
    history: "Historia",
    lang: "Idioma",
    total: "Total",
  },
  history: {
    version: "Versión",
    date: "Fecha",
    added: "Agregado",
    total: "Total",
    new: "Nuevas lenguas",
    sources: "Orígenes",
    languages: "Lenguas",
  },
  lotr_printed: "traducción del SdA (edición impresa)",
  names: {
    literal: "traducción literal",
    lotr: "de la traducción del SdA",
    reconstruction: "reconstrucción",
    revised: "modificación de",
    similar: "similar a",
    translation: "traducción de",
    variant: "variante de",
  },
  translation: {
    source: "Origen",
  },
};
