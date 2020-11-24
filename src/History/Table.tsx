import React from "react";
import { Table as T } from "react-bootstrap";
import { useDataContext } from "../context";
import hist from "../dataHistory";
import { formatDate, StatsCounter } from "./utils";

export const Table = () => {
  const { num } = useDataContext();

  const counter = new StatsCounter();
  const rows = hist.map(h => {
    const date = h.date ? formatDate(h.date) : "?";
    counter.next(num, h.count);

    const curr = counter.getCurrent();

    return <tr key={h.ver}>
      <td>{h.ver}</td>
      <td>{date}</td>
      <td>{h.count}</td>
      <td>{curr.count}</td>
      <td>{curr.lang.current.join(", ")}</td>
      <td>{curr.sources.join(", ")}</td>
      <td>{curr.lang.total} ({curr.lang.me})</td>
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
