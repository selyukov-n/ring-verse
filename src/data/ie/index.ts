import * as lat from "./lat";
import { list as germanic } from "./germanic";
import { list as romance } from "./romance";

export default [
  ...require("./ru").list,
  lat.lat,

  ...germanic,
  ...romance,

  require("./bg").bg,
  ...require("./cro").list,
  require("./cz").cz,
  ...require("./pol").default,
  require("./sloven").sloven,

  require("./irish").irish,
];
