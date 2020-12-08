import React from "react";
import original from "../data/main";
import * as lng from "../languages";
import { Lines } from "../Lines";

import Node from "./Node";
import { getCounts, langTypes } from "./utils";

export const getTotalCount = (data: Parameters<typeof getCounts>[0]) => {
  const result = { count: 0, me: 0 };
  langTypes.forEach(t => getCounts(data, lng[t], result));
  return result;
};

const LangTree = () => {
  const names = lng.names;
  return <div>
    <Lines text={original.content} footer={"© " + original.author} className={"original"} />

    <ol>
      <Node item={lng.arda} names={names.arda} defaultOpen />
      <Node item={lng.languages} names={names.languages} defaultOpen />
      <Node item={lng.conlangs} names={names.conlangs} defaultOpen />
      <Node item={lng.encodings} names={names.encodings} />
      <Node item={lng.jokes} names={names.jokes} />
    </ol>
  </div>;
};
export default LangTree;
