import { ArdaLang, Lang, Conlang, EncodingLang, JokesLang } from "../languages";
import { InputKey } from "./inputs";
import { Source } from "./sources";

type LangId = ArdaLang | Lang | Conlang | EncodingLang | JokesLang;

type TextualContent = {
  type?: "text" | "text-large" | "braille" | "mono" | "morse" | "translit" | "translit hgn" | "cuneiform-assur" | "cuneiform-na" | "rtl";
  text: string | JSX.Element;
  title?: string;
};
type Content =
  | TextualContent
  | { type: "image", image: any };
export type Variant = Content & {
  author?: string[];
  name?: string; // actual if several variants
  comment?: string;
};

export type Item = {
  language: LangId;
  variant?: string; // for lang variants, dialects etc.
  name?: string;
  author: string | string[];
  content: Variant[] | string;
  input: InputKey;
  source?: Source | "-"; // if differ from input.mainSource
  book?: { page: number, num: string, comment?: string } | [string, number];
  comments?: Array<string | { text: string, type?: "error" | "warning" }>;
};

export type ItemGroup = Record<number, Item>;
