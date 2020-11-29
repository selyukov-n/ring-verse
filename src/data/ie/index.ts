import { list as germanic } from "./germanic";
import { ancient, greek } from "./greek";
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

  ancient,
  greek,
  require("./irish").irish,
  ...require("./lith").list,
  require("./pers").persian,
  require("./romani").rom,
  require("./welsh").cymraeg,
];
