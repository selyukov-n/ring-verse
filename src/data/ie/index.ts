import { list as germanic } from "./germanic";
import { ancient, greek } from "./greek";
import { list as romance } from "./romance";
import { list as slavic } from "./slav";

export default [
  ...require("./lat").list,

  ...germanic,
  ...romance,
  ...slavic,

  ancient,
  greek,
  require("./irish").irish,
  ...require("./lith").list,
  require("./pers").persian,
  require("./romani").rom,
  require("./welsh").cymraeg,
];
