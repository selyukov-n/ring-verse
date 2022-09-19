import React, { FC } from "react";
import { Card } from "react-bootstrap";
import cls from "classnames";

import css from "./Lines.module.css";

type Props = {
  text: React.ReactNode;
  header?: React.ReactNode;
  title?: string;
  footer?: string;
  className?: string;
  original?: boolean;
};

export const Lines: FC<Props> = (props) => <Card
  className={cls(css.poem, props.className, props.original && css.original)}
>
  {props.header && <Card.Header>{props.header}</Card.Header>}
  <Card.Body>
    {props.title && <Card.Title>{props.title}</Card.Title>}
    <Card.Text>
      {props.text}
    </Card.Text>
  </Card.Body>
  {props.footer && <Card.Footer>{props.footer}</Card.Footer>}
</Card>;
