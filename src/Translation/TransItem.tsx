import React, { FC } from "react";
import { Alert } from "react-bootstrap";
import classnames from "classnames";

import { sources as src } from "../data/sources";
import { Input, inputs, ItemNum, ItemVariant } from "../data";
import { messages } from "../intl";
import { findLanguage, LangName } from "../LangTree";
import { names } from "../languages";
import { Lines } from "../Lines";
import cssLines from "../Lines.module.css";

import css from "./trans.module.css";

type ItemVariantType = ItemVariant['type'] & string;
const customClassNames: Partial<Record<ItemVariantType, string>> = {
  "cuneiform-assur": cssLines.cuneiformAssur,
  "cuneiform-na": cssLines.cuneiformNA,
  "text-large": cssLines.textLarge,
  "translit hgn": classnames(cssLines.translit, cssLines.hgn),
};

const getContent = (variant: ItemVariant): React.ReactNode => {
  switch (variant.type) {
    case "text": return variant.text;
    case "image": return <img src={variant.image} alt="translation" />;
    default: return variant.text;
  }
};

const makeHeader = (name?: string, author?: string) => (name || author) && <>
  {name} {author && <span className={css.author} title="Authors"> ({author})</span>}
</>;

const Comment: FC<{ type?: "warning" | "error" }> = ({ type, children }) => type
  ? <Alert className={css.comment} variant={type === "error" ? "danger" : type}>{children}</Alert>
  : <p className={css.comment}>{children}</p>;

const Variant: FC<{ item: ItemNum, variant: ItemVariant }> = ({ variant }) => {
  const author = variant.author?.filter(Boolean).join(", ");
  const header = makeHeader(variant.name, author);
  const linesHeader = header || variant.comment ? <>
    {header}
    {variant.comment && <Comment>{variant.comment}</Comment>}
  </> : null;

  const { type, ...v } = variant;
  const cls = type && customClassNames[type] || type;
  return <Lines {...v} text={getContent(variant)} header={linesHeader} className={cls} />;
};

const renderSource = ({ book: b, ...item }: ItemNum, input: Input) => {
  if (Array.isArray(b)) b = { num: b[0], page: b[1] };
  const book = b && <>
      Book {b.num}, p. {b.page}
      {b.comment && <i> [{b.comment}]</i>}
  </>;

  const source = item.source || input && input.mainSource;

  const sources: JSX.Element[] = [];
  const fromBook = typeof source === "object" && source?.id === src.book.id;
  const { source: str } = messages.translation;
  if (fromBook && book) {
    sources.push(<p key="main">{str}: {book}</p>)
  } else {
    if (source && source !== "-") {
      const src = source.link
        ? <a href={source.link}>{source.name}</a>
        : source.name;
      sources.push(<p key="main">{str}: {src}</p>);
    }
    if (book) sources.push(<p key="book">{book}</p>);
  }

  return sources.length === 0 ? null : <section className={css.sources}>
    {sources}
  </section>;
};

export const TransItem: FC<{ item: ItemNum, linkToLang?: boolean }> = ({ item, linkToLang }) => {
  const info = findLanguage(item.language, names);
  const author = (Array.isArray(item.author) ? item.author : [item.author])
    .filter(Boolean)
    .join(", ");
  const content = typeof item.content === "string" ? [{ text: item.content }] : item.content;
  const input = item.input && inputs[item.input];
  const date = item.index > 1 && input.date
    && <span className={css.date} title="added to the collection">{messages.formatDate(input.date)}</span>;
  return <>
    {info && <LangName {...info} head link={linkToLang} />}
    <h6>
      #{item.index} {item.variant && `[${item.variant}] `}
      {makeHeader(item.name, author || "?")}
      {date}
    </h6>
    {item.comments?.map((c, i) => typeof c === "string"
      ? <Comment key={i}>{c}</Comment>
      : <Comment key={i} type={c.type}>{c.text}</Comment>)}

    <div className={css.translationContent}>
      {content.map((c, i) => <Variant key={i} item={item} variant={c} />)}
    </div>

    {renderSource(item, input)}
  </>;
};
