import React from "react";
import { Link } from "react-router-dom";
import { arda, conlangs, encodings, jokes, languages, names, LangGroupItem } from "./languages";
import { Lines } from "./Lines";
import original from "./data/main";

type Props<T extends string> = {
  item: LangGroupItem<T>;
  names: Record<T, string>;
};

const Node = <T extends string>({ item, names }: Props<T>): JSX.Element => {
  const children = item.type === "group" && <ul>
    {item.items.map((it, i) => <Node item={it} names={names} key={i} />)}
  </ul>;
  return <li>
    {item.type === "group"
      ? item.name
      : <Link to={'/lang/' + item.id}>{names[item.id]}</Link>}

    {children}
  </li>
};

const LangTree = () => {
  return <div>
    <Lines text={original.text} footer={"© " + original.author} className={"original"} />

    <ol>
      <Node item={arda} names={names.arda} />
      <Node item={languages} names={names.languages} />
      <Node item={conlangs} names={names.conlangs} />
      <Node item={encodings} names={names.encodings} />
      <Node item={jokes} names={names.jokes} />
    </ol>
  </div>;
};
export default LangTree;
