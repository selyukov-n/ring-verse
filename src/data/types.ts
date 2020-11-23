import { ArdaLang, Lang, Conlang, EncodingLang, JokesLang } from "../languages";

type LangId = ArdaLang | Lang | Conlang | EncodingLang | JokesLang;

type Content =
  | { type?: "text", text: string | JSX.Element, title?: string } // title - rendered as bold before if specified [don't confuse with the variant name]
  | { type: "image", image: any };
export type Variant = Content & {
  author?: string[];
  name?: string; // actual if several variants
  comment?: string;
};

export type Item = {
  language: LangId;
  name?: string;
  author: string | string[];
  content: Variant[] | string;
  source?: {
    main: string | null;
    book?: { page: number, num: string };
    other?: string[];
  };
  comments?: string[];
  credits?: string[];
};

export type ItemGroup = Record<number, Item>;
