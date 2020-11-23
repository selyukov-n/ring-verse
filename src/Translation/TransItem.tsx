import React, { FC } from "react";
import { ItemNum } from "../data";
import { Lines } from "../Lines";

const Variant: FC<{ item: ItemNum, variant: ItemNum["content"][0] }> = ({ variant }) => {
  const author = (Array.isArray(variant.author) ? variant.author : [variant.author])
    .filter(Boolean)
    .join(", ");

  return <>
    {variant.name && <p>{variant.name}</p>}
    {author && <p>by {author}</p>}

    {(variant.type === "text" || !variant.type) && <Lines text={variant.text} header={variant.title} />}
    {/* TODO if type == image */}
    {variant.comment}
  </>;
};

export const TransItem: FC<{ item: ItemNum }> = ({ item }) => {
  return <>
    #{item.index}
    {item.content.map((c, i) => <Variant key={i} item={item} variant={c} />)}
  </>;
};
