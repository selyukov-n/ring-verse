type Content =
  | { type?: "text", text: string, title?: string } // title - rendered as bold before if specified [don't confuse with the variant name]
  | { type: "image", image: any };
type Variant = Content & {
  author: string | string[];
  name?: string; // actual if several variants
  comment?: string;
};

export type Item = {
  language: string;
  name?: string;
  content: Variant[];
  source?: string | {
    main: string | null;
    book?: { page: number, num: string };
    other?: string[];
  };
  comments?: string[];
  credits?: string[];
};

export type ItemGroup = Record<number, Item>;
