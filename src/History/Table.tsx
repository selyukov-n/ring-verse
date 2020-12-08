import React, { useMemo } from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import { Data, formatDate, inputs, isMine, main } from "../data";

import "./history.css";
import { compareVersions } from "./utils";

const fromSet = (set: Set<string>) => Array.from(set.keys()).join(", ");

const makeHistoryItems = (data: Data) => {
  const acc = {
    lang: new Set<string>(),
    me: new Set<string>(),
    count: 0,
  };

  return Object.entries(inputs)
    .sort((a, b) => compareVersions(a[0], b[0]))
    .map(([ver, input]) => {
      const items = data.items.filter(t => t.input === ver);

      acc.count += items.length;
      const curr = new Set<string>();
      items.forEach(it => {
        const l = it.language;
        if (l.startsWith("j.")) return; // skip jokes for stats

        if (isMine(it)) acc.me.add(l);

        if (it !== main) {
          if (!acc.lang.has(l)) curr.add(l);
          acc.lang.add(l);
        }
      });

      let cells: JSX.Element;
      if (items.length > 0) {
        const sources = new Set([
          input.mainSource || "",
          ...items.map(i => i.source || "")
        ].filter(Boolean));

        cells = <>
          <td>{items.length}</td>
          <td>{acc.count}</td>
          <td>
            {fromSet(curr)}
            <div className="description">{input.description}</div>
          </td>
          <td>{fromSet(sources)}</td>
          <td>{acc.lang.size} ({acc.me.size})</td>
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
