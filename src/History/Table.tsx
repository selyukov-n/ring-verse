import React, { useMemo } from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import { Data, formatDate, inputs, isMine, main } from "../data";

import "./history.css";
import { compareVersions, getHistoryItems } from "./utils";

const fromSet = (set: Set<string>) => Array.from(set.keys()).join(", ");

const makeHistoryItems = (data: Data) => {
  const acc = {
    lang: new Set<string>(),
    me: new Set<string>(),
    count: 0,
  };
  const map = new Map<string, JSX.Element>(getHistoryItems(data).map(t => {
    const curr = new Set<string>();
    t.items.filter(it => it !== main).forEach(it => {
      const l = it.language;
      if (l.startsWith("j.")) return; // skip jokes for stats

      if (isMine(it)) acc.me.add(l);

      if (!acc.lang.has(l)) curr.add(l);
      acc.lang.add(l);
    });

    acc.count += t.items.length;

    const input = inputs[t.input];
    const desc = input.description;
    const date = input?.date ? formatDate(input.date) : "?";
    const sources = new Set([
      input.mainSource || "",
      ...t.items.map(i => i.source || "")
    ].filter(Boolean));
    const row = <tr key={t.input}>
      <td>{t.input}</td>
      <td>{date}</td>
      <td>{t.items.length}</td>
      <td>{acc.count}</td>
      <td>
        {fromSet(curr)}
        {desc && <div className="description">{desc}</div>}
      </td>
      <td>{fromSet(sources)}</td>
      <td>{acc.lang.size} ({acc.me.size})</td>
    </tr>;
    return [t.input, row];
  }));

  const inputMap = new Map(Object.entries(inputs));

  return Object.keys(inputs)
    .sort(compareVersions)
    .map(t => {
      const row = map.get(t);
      if (row) return row;

      const input = inputMap.get(t);
      if (!input) return null;

      const date = input?.date ? formatDate(input.date) : "?";
      return <tr key={t}>
        <td>{t}</td>
        <td>{date}</td>
        <td colSpan={5} className="description">
          {input.description}
        </td>
      </tr>
    })
    .filter(Boolean);
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
