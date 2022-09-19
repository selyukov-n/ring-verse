import React, { FC, Fragment, useCallback } from "react";
import { Badge } from "react-bootstrap";
import classnames from "classnames";

import { useDataContext } from "../context";
import { messages } from "../intl";
import { LangGroupItem } from "../languages";

import css from "./LangTree.module.css";
import LangName from "./LangName";
import { filterByName, getCounts } from "./utils";

const Counter: FC<{ count: number, me: number, lang: number, forceCount: boolean }> = (
  { count, me, lang, forceCount }
) => {
  const cls = me ? css.success : undefined;
  const tr = count
    ? <Badge variant="light" className={cls}>{me ? `${me} / ${count}` : count}</Badge>
    : <Badge variant="danger">{count}</Badge>;
  const showCount = forceCount || lang > 1;
  return <>
    {tr}
    {showCount && <Badge variant="light" className={css.badgeLang} title={messages.langCount(lang)}>({lang})</Badge>}
  </>;
};

export type StateProps = {
  state: Record<string, boolean>;
  onToggle: (key: string) => any;
};

type OwnProps<T extends string> = {
  item: LangGroupItem<T>;
  names: Record<T, string>;
  filterText: string;
};
type Props<T extends string> = OwnProps<T> & StateProps;

const Node = <T extends string>({ item, ...props }: Props<T>): JSX.Element => {
  const open = props.state[item.id];

  const { onToggle, names, filterText } = props;
  const onClick = useCallback(() => onToggle(item.id), [onToggle, item.id]);

  const data = useDataContext();
  const counts = getCounts(data.lang, item);
  const counter = <Counter {...counts} forceCount={!open && item.type === "group"} />;

  const isVisible = (it: LangGroupItem<T>) => !filterText || filterByName(it, names, filterText);

  if (item.type !== "group") {
    if (!isVisible(item))
      return <Fragment />;

    return <li>
      <LangName lang={item} name={names[item.id]} link/> {counter}
    </li>;
  }

  const childItems = item.items
      .filter(isVisible)
      .map(it => <Node {...props} item={it} key={it.id} />);

  const className = classnames({
    [css.exp]: childItems.length,
    [css.expanded]: childItems.length && open,
    [css.collapsed]: childItems.length && !open,
  });
  return <li className={className}>
    <span onClick={onClick}>{item.name} {counter}</span>
    {open && childItems.length ? (
        <ul>
          {childItems}
        </ul>
    ) : null}
  </li>;
};
export default Node;
