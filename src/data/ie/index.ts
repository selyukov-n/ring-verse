import { list as germanic } from "./germanic";
import { list as romance } from "./romance";

export default [
  ...require("./ru").list,
  ...require("./lat").list,

  ...germanic,
  ...romance,

  require("./bg").bg,
  ...require("./cro").list,
  require("./cz").cz,
  ...require("./pol").default,
  require("./slovak").slovak,
  require("./sloven").sloven,
  require("./ukr").ukr,

  require("./greek").ancient,
  require("./irish").irish,
  require("./romani").rom,
];
