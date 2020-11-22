import React, { FC, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useDataContext } from "../context";
import { LangGroupItem } from "../languages";
import { getCounts } from "./utils";

const Counter: FC<{ count: number, me: number }> = ({ count, me }) => {
  const cls = me ? "success" : undefined;
  return count
    ? <Badge variant="light" className={cls}>{me} / {count}</Badge>
    : <Badge variant="danger">{count}</Badge>;
};

type Props<T extends string> = {
  item: LangGroupItem<T>;
  names: Record<T, string>;
  defaultOpen?: boolean;
};

const Node = <T extends string>({ item, names, defaultOpen = false }: Props<T>): JSX.Element => {
  const [open, toggle] = useState(defaultOpen);
  const onClick = useCallback(() => toggle(!open), [open]);

  const data = useDataContext();
  const counts = getCounts(data.lang, item);
  const counter = <Counter {...counts} />;

  if (item.type !== "group")
    return <li>
      <Link to={'/lang/' + item.id}>{names[item.id]}</Link> {counter}
      </li>;

  const className = open ? "exp expanded" : "exp collapsed";
  const children = item.type === "group" && open && <ul className="content">
    {item.items.map((it, i) => <Node item={it} names={names} key={i} />)}
  </ul>;
  return <li className={className}>
  <span onClick={onClick}>{item.name} {counter}</span>
  {children}
  </li>
};
export default Node;
