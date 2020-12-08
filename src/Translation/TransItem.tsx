import React, { FC } from "react";
import { Alert } from "react-bootstrap";
import { sources as src } from "../data/sources";
import { formatDate, Input, inputs, ItemNum, ItemVariant } from "../data";
import { findLanguage, LangName } from "../LangTree";
import { names } from "../languages";
import { Lines } from "../Lines";
import "./trans.css";

const getContent = (variant: ItemVariant): React.ReactNode => {
  switch (variant.type) {
    case "text": return variant.text;
    case "image": return <img src={variant.image} alt="translation" />;
    default: return variant.text;
  }
};

const makeHeader = (name?: string, author?: string) => (name || author) && <>
  {name} {author && <span className="author" title="Authors"> ({author})</span>}
</>;

const Comment: FC<{ type?: "warning" | "error" }> = ({ type, children }) => type
  ? <Alert className="comment" variant={type === "error" ? "danger" : type}>{children}</Alert>
  : <p className="comment">{children}</p>;

const Variant: FC<{ item: ItemNum, variant: ItemVariant }> = ({ variant }) => {
  const author = variant.author?.filter(Boolean).join(", ");
  const header = makeHeader(variant.name, author);
  const linesHeader = header || variant.comment ? <>
    {header}
    {variant.comment && <Comment>{variant.comment}</Comment>}
  </> : null;

  const { type, ...v } = variant;
  return <Lines {...v} text={getContent(variant)} header={linesHeader} className={type} />;
};

const renderSource = ({ book: b, ...item }: ItemNum, input: Input) => {
  if (Array.isArray(b)) b = { num: b[0], page: b[1] };
  const book = b && <>
      Book {b.num}, p. {b.page}
      {b.comment && <><br />* {b.comment}</>}
  </>;

  const source = item.source || input && input.mainSource;

  const sources: JSX.Element[] = [];
  if (source === src.book && book) {
    sources.push(<p key="main">Источник: {book}</p>)
  } else {
    if (source) sources.push(<p key="main">Источник: {source}</p>);
    if (book) sources.push(<p key="book">Также {book}</p>);
  }

  return sources.length === 0 ? null : <section className="sources">
    {sources}
  </section>;
};

export const TransItem: FC<{ item: ItemNum }> = ({ item }) => {
  const info = findLanguage(item.language, names);
  const author = (Array.isArray(item.author) ? item.author : [item.author])
    .filter(Boolean)
    .join(", ");
  const content = typeof item.content === "string" ? [{ text: item.content }] : item.content;
  const input = item.input && inputs[item.input];
  const date = item.index > 1 && input.date
    && <span className="date" title="when added to the collection">{formatDate(input.date)}</span>;
  return <>
    {info && <LangName {...info} head />}
    <h6>
      #{item.index} {item.variant && `[${item.variant}] `}
      {makeHeader(item.name, author || "?")}
      {date}
    </h6>
    {item.comments?.map((c, i) => typeof c === "string"
      ? <Comment key={i}>{c}</Comment>
      : <Comment key={i} type={c.type}>{c.text}</Comment>)}

    {content.map((c, i) => <Variant key={i} item={item} variant={c} />)}

    {renderSource(item, input)}
  </>;
};
