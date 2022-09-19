import React, { FC, useState } from "react";
import { Form } from "react-bootstrap";

import original from "../data/main";
import { messages } from "../intl";
import * as lng from "../languages";
import { Lines } from "../Lines";

import css from "./LangTree.module.css";
import Node, { StateProps } from "./Node";
import { getCounts, langTypes } from "./utils";

export const getTotalCount = (data: Parameters<typeof getCounts>[0]) => {
  const result = { count: 0, me: 0, lang: 0 };
  langTypes.forEach(t => getCounts(data, lng[t], result));
  return result;
};

const LangTree: FC<StateProps> = (p) => {
  const [filterText, setFilterText] = useState("");

  const props = { ...p, filterText };

  const names = lng.names;
  return <div>
    <Lines text={original.content} footer={"© " + original.author} original />

    <Form.Control placeholder={messages.searchPlaceholder}
                  value={filterText}
                  onChange={e => setFilterText(e.target.value)}
                  className={css.searchField} />

    <ol>
      <Node {...props} item={lng.arda} names={names.arda} />
      <Node {...props} item={lng.languages} names={names.languages} />
      <Node {...props} item={lng.conlangs} names={names.conlangs} />
      <Node {...props} item={lng.encodings} names={names.encodings} />
      <Node {...props} item={lng.jokes} names={names.jokes} />
    </ol>
  </div>;
};
export default LangTree;
