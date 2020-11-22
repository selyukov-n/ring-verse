import React, { FC } from "react";
import { Card } from "react-bootstrap";
import "./Lines.css";

type Props = {
  text: string;
  header?: string;
  footer?: string;
  className?: string;
};

export const Lines: FC<Props> = (props) => <Card className={"poem " + props.className}>
  <Card.Body>
    {props.header && <Card.Title>{props.header}</Card.Title>}
    <Card.Text>
      {props.text}
    </Card.Text>
    {props.footer && <Card.Footer>{props.footer}</Card.Footer>}
  </Card.Body>
</Card>;
