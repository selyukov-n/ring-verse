import React from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import hist from "../dataHistory";
import { formatDate } from "./utils";

export const Table = () => {
  const { num } = useDataContext();

  let total = 0;
  const langs = new Set<string>();
  const rows = hist.map(h => {
    const date = h.date ? formatDate(h.date) : "?";

    const iter = {
      langs: new Set<string>(),
      sources: new Set<string>(),
    };

    for(let t = 1; t <= h.count; t++, total++) {
      const { language: l, source } = num[total + 1];
      if (!langs.has(l)) {
        langs.add(l);
        iter.langs.add(l);
      }
      if (source?.main)
        iter.sources.add(source.main);
    }

    return <tr key={h.ver}>
      <td>{h.ver}</td>
      <td>{date}</td>
      <td>{h.count}</td>
      <td>{total}</td>
      <td>{Array.from(iter.langs).join(", ")}</td>
      <td>{Array.from(iter.sources).join(", ")}</td>
      <td>TODO total</td>
    </tr>;
  });

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
