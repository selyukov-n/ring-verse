import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { Alert } from "react-bootstrap";
import { useDataContext } from "../context";
import { TransItem } from "./TransItem";

export const Translation: FC<RouteComponentProps<{ id: string }>> = props => {
  const { num } = useDataContext();
  const id = parseInt(props.match.params.id);
  const item = num[id];

  return item
    ? <TransItem item={{ ...item, index: id }} linkToLang />
    : <Alert variant="danger">Not found #{id}</Alert>;
};
