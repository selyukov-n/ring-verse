import React from "react";
import original from "../data/main";
import { arda, conlangs, encodings, jokes, languages, names } from "../languages";
import { Lines } from "../Lines";

import Node from "./Node";
import { getCounts } from "./utils";

export const getTotalCount = (data: Parameters<typeof getCounts>[0]) => {
  const result = { count: 0, me: 0 };
  [
    arda,
    languages,
    conlangs,
    encodings,
    jokes,
  ].forEach(t => getCounts(data, t, result));
  return result;
};

const LangTree = () => {
  return <div>
    <Lines text={original.text} footer={"© " + original.author} className={"original"} />

    <ol>
      <Node item={arda} names={names.arda} defaultOpen />
      <Node item={languages} names={names.languages} defaultOpen />
      <Node item={conlangs} names={names.conlangs} defaultOpen />
      <Node item={encodings} names={names.encodings} />
      <Node item={jokes} names={names.jokes} />
    </ol>
  </div>;
};
export default LangTree;
