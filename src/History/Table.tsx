import React, { FC, useMemo } from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import { Data, formatDate, inputs } from "../data";

import "./history.css";
import { compareVersions, LangGrouping, StatHelper } from "./utils";

const concat = (separator: string, a: React.ReactNode, b: React.ReactNode) => a && b ? <>{a}{separator} {b}</> : (a || b);

const Languages: FC<{ groups: LangGrouping }> = ({ groups }) => {
  const makeString = (items: string[]) => items.length
    ? items.sort((a, b) => a.localeCompare(b)).join(", ")
    : null;
  const main = concat(",",
    groups.arda.length ? <span className="arda-lang">{makeString(groups.arda)}</span> : null,
    makeString(groups.lang));
  const other = concat(";",
    makeString(groups.conlangs),
    groups.codes.length ? <i>{makeString(groups.codes)}</i> : null);

  return <>
    {main && <p>{main}{other ? ";" : null}</p>}
    {other && <p className="secondary">{other}</p>}
  </>;
};

const makeHistoryItems = (data: Data) => {
  const acc = {
    lang: new Set<string>(),
    me: new Set<string>(),
    count: 0,
  };

  const group = <T extends { id: string }>(items: Array<T | undefined>) => {
    const map = new Map<string, T>();
    items.forEach(t => {
      if (!t) return;
      if (!map.has(t.id)) map.set(t.id, t);
    });
    return map;
  };

  const helper = new StatHelper();
  return Object.entries(inputs)
    .sort((a, b) => compareVersions(a[0], b[0]))
    .map(([ver, input]) => {
      const items = data.items.filter(t => t.input === ver);

      let cells: JSX.Element;
      if (items.length > 0) {
        acc.count += items.length;
        const sources = group([input.mainSource || undefined, ...items.map(i => i.source === "-" ? undefined : i.source)]);
        const result = helper.append(items);

        cells = <>
          <td>{items.length}</td>
          <td>{acc.count}</td>
          <td>
            <Languages groups={result.current} />
            {input.description && <div className="description">{input.description}</div>}
          </td>
          <td>
            {Array.from(sources.values()).map((s, i) => {
              const item = React.createElement(s.link ? "a" : "span", { key: s.id, href: s.link }, s.name);
              return i ? <>, {item}</> : item;
            })}
          </td>
          <td className="nobr">{result.lang}{result.conlang ? ` + ${result.conlang}` : null} ({result.me})</td>
        </>;
      } else {
        cells = <td colSpan={5} className="description">
          {input.description}
        </td>;
      }

      const date = input.date ? formatDate(input.date) : "?";
      return <tr key={ver}>
        <td>{ver}</td>
        <td>{date}</td>
        {cells}
      </tr>
    });
};

export const Table = () => {
  const data = useDataContext();
  const rows = useMemo(() => makeHistoryItems(data), [data]);

  return <T bordered className="history">
    <thead>
      <tr>
        <th>Версия</th>
        <th>Дата</th>
        <th>Добавлено</th>
        <th>Всего</th>
        <th>Новые языки</th>
        <th>Источники</th>
        <th>Языков</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </T>
};
