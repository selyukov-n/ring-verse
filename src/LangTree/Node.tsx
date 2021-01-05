import React, { FC, useCallback } from "react";
import { Badge } from "react-bootstrap";
import { useDataContext } from "../context";
import { messages } from "../intl";
import { LangGroupItem } from "../languages";
import LangName from "./LangName";
import { getCounts } from "./utils";

const Counter: FC<{ count: number, me: number, lang: number, forceCount: boolean }> = (
  { count, me, lang, forceCount }
) => {
  const cls = me ? "success" : undefined;
  const tr = count
    ? <Badge variant="light" className={cls}>{me ? `${me} / ${count}` : count}</Badge>
    : <Badge variant="danger">{count}</Badge>;
  const showCount = forceCount || lang > 1;
  return <>
    {tr}
    {showCount && <Badge variant="light" className="badge-lang" title={messages.langCount(lang)}>({lang})</Badge>}
  </>;
};

export type StateProps = {
  state: Record<string, boolean>;
  onToggle: (key: string) => any;
};

type OwnProps<T extends string> = {
  item: LangGroupItem<T>;
  names: Record<T, string>;
};
type Props<T extends string> = OwnProps<T> & StateProps;

const Node = <T extends string>({ item, ...props }: Props<T>): JSX.Element => {
  const open = props.state[item.id];
  const onClick = useCallback(() => props.onToggle(item.id), [props.onToggle, item.id]);

  const data = useDataContext();
  const counts = getCounts(data.lang, item);
  const counter = <Counter {...counts} forceCount={!open && item.type === "group"} />;

  //if (!counts.count) return <span />;

  if (item.type !== "group")
    return <li>
      <LangName lang={item} name={props.names[item.id]} link /> {counter}
    </li>;

  const className = open ? "exp expanded" : "exp collapsed";
  const children = item.type === "group" && open && <ul className="content">
    {item.items.map((it, i) => <Node {...props} item={it} key={i} />)}
  </ul>;
  return <li className={className}>
  <span onClick={onClick}>{item.name} {counter}</span>
  {children}
  </li>
};
export default Node;
