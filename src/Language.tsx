import React from "react";
import { RouteComponentProps } from "react-router";
import { ListGroup } from "react-bootstrap";
import { useDataContext } from "./context";
import { isMine } from "./data";
import { findLanguage, LangName } from "./LangTree";
import { names } from "./languages";
import RouterLink from "./RouterLink";
import { TransItem } from "./Translation";

const Language = (props: RouteComponentProps<{ id: string }>) => {
  const { lang } = useDataContext();

  const id = props.match.params.id;
  const items = lang[id];
  if (items.length === 1) {
    return <TransItem item={items[0]} />;
  }

  const main = items.filter(t => !t.variant).sort((a, b) => a.index - b.index);
  const variants = items.filter(t => t.variant).sort((a, b) => a.index - b.index);

  const info = findLanguage(id, names);
  return <>
    {info && <LangName {...info} head />}
    <ListGroup>
      {main.concat(variants)
        .map(it => <ListGroup.Item key={it.index} action as={RouterLink} href={'/show/' + it.index}>
          #{it.index} {it.variant && <i>{it.variant}</i>} {!it.name && isMine(it) ? "[my translation]" : it.name}
        </ListGroup.Item>)}
    </ListGroup>
  </>
};
export default Language;
