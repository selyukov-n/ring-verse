import React, { useMemo } from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import { Data, formatDate, inputs, isMine, main } from "../data";
import { getHistoryItems } from "./utils";

const fromSet = (set: Set<string>) => Array.from(set.keys()).join(", ");

const makeHistoryItems = (data: Data) => {
  const acc = {
    lang: new Set<string>(),
    me: new Set<string>(),
    count: 0,
  };
  return getHistoryItems(data).map(t => {
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
    const date = input?.date ? formatDate(input.date) : "?";
    const sources = new Set([
      input.mainSource || "",
      ...t.items.map(i => i.source || "")
    ].filter(Boolean));
    return <tr key={t.input}>
      <td>{t.input}</td>
      <td>{date}</td>
      <td>{t.items.length}</td>
      <td>{acc.count}</td>
      <td>{fromSet(curr)}</td>
      <td>{fromSet(sources)}</td>
      <td>{acc.lang.size} ({acc.me.size})</td>
    </tr>;
  });
};

export const Table = () => {
  const data = useDataContext();
  const rows = useMemo(() => makeHistoryItems(data), [data]);

  return <T bordered>
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
