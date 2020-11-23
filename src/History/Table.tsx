import React from "react";
import { Table as T } from "react-bootstrap";
import hist from "../dataHistory";
import { formatDate } from "./utils";

export const Table = () => {
  let total = 0;
  const rows = hist.map(h => {
    const date = h.date ? formatDate(h.date) : "?";
    total += h.count;
    return <tr key={h.ver}>
      <td>{h.ver}</td>
      <td>{date}</td>
      <td>{h.count}</td>
      <td>{total}</td>
      <td>TODO get new langs</td>
      <td>TODO get sources</td>
      <td>TODO count distinct langs (total)</td>
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
