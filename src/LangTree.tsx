import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { arda, conlangs, encodings, jokes, languages, names, LangGroupItem } from "./languages";
import { Lines } from "./Lines";
import original from "./data/main";

type Props<T extends string> = {
  item: LangGroupItem<T>;
  names: Record<T, string>;
  defaultOpen?: boolean;
};

const Node = <T extends string>({ item, names, defaultOpen = false }: Props<T>): JSX.Element => {
  const [open, toggle] = useState(defaultOpen);
  const onClick = useCallback(() => toggle(!open), [open]);

  if (item.type !== "group")
    return <li>
      <Link to={'/lang/' + item.id}>{names[item.id]}</Link>
    </li>;

  const className = open ? "exp expanded" : "exp collapsed";
  const children = item.type === "group" && open && <ul className="content">
    {item.items.map((it, i) => <Node item={it} names={names} key={i} />)}
  </ul>;
  return <li className={className}>
    <span onClick={onClick}>{item.name}</span>
    {children}
  </li>
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
