import React, { FC } from "react";
import { ItemNum, ItemVariant } from "../data";
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

const Comment: FC<{}> = ({ children }) => <p className="comment">{children}</p>;

const Variant: FC<{ item: ItemNum, variant: ItemVariant }> = ({ variant }) => {
  const author = variant.author?.filter(Boolean).join(", ");
  const header = makeHeader(variant.name, author);
  const linesHeader = header || variant.comment ? <>
    {header}
    {variant.comment && <Comment>{variant.comment}</Comment>}
  </> : null;

  return <Lines {...variant} text={getContent(variant)} header={linesHeader} />;
};

export const TransItem: FC<{ item: ItemNum }> = ({ item }) => {
  const author = (Array.isArray(item.author) ? item.author : [item.author])
    .filter(Boolean)
    .join(", ");
  const content = typeof item.content === "string" ? [{ text: item.content }] : item.content;
  return <>
    <h6>
      #{item.index} {makeHeader(item.name, author || "?")}
    </h6>
    {item.comments?.map((c, i) => <Comment key={i}>{c}</Comment>)}

    {content.map((c, i) => <Variant key={i} item={item} variant={c} />)}

    {item.source && "TODO source"}
  </>;
};
