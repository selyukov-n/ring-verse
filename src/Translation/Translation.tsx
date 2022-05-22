import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Alert } from "react-bootstrap";
import { useDataContext } from "../context";
import { TransItem } from "./TransItem";

export const Translation: FC<RouteComponentProps<{ id: string }>> = ({ match: { params } }) => {
  const { num } = useDataContext();

  const keys = params.id === "last"
      ? Object.keys(num)
      : [params.id];
  const id = Math.max(...keys.map(i => parseInt(i)).filter(Number.isFinite));
  const item = id && num[id];

  return item
    ? <TransItem item={{ ...item, index: id }} linkToLang />
    : <Alert variant="danger">Not found #{id}</Alert>;
};
