import React, { FC } from "react";
import { Card } from "react-bootstrap";
import "./Lines.css";

type Props = {
  text: React.ReactNode;
  header?: React.ReactNode;
  title?: string;
  footer?: string;
  className?: string;
};

export const Lines: FC<Props> = (props) => <Card className={"poem " + props.className}>
  {props.header && <Card.Header>{props.header}</Card.Header>}
  <Card.Body>
    {props.title && <Card.Title>{props.title}</Card.Title>}
    <Card.Text>
      {props.text}
    </Card.Text>
  </Card.Body>
  {props.footer && <Card.Footer>{props.footer}</Card.Footer>}
</Card>;
