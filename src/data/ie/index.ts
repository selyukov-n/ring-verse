import * as ru from "./ru";
import * as lat from "./lat";

export default [
  ru.ru1,
  ru.ru2,
  ru.ru3,
  lat.lat,

  ...require("./pol").default,
];
