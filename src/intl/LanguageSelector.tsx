import React, { FC, useMemo } from "react";
import { NavDropdown } from "react-bootstrap";
import { isLocale, Locale, locales, switchLocale } from "./locales";

const onSelect = (key: string | null) => isLocale(key) && switchLocale(key);

const Selector: FC<{ current: Locale }> = ({ current }) => {
  const items = useMemo(() => Object.entries(locales).map(([key, name]) => (
    <NavDropdown.Item key={key} eventKey={key} active={current === key}>{name}</NavDropdown.Item>
  )), [current]);

  return <NavDropdown id="lang-selector" title="Language" onSelect={onSelect}>
    {items}
  </NavDropdown>;
};
export default Selector;
