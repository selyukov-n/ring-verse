import * as nor from "./nor";

export const list = [
  ...require("./da").default,
  ...require("./de").list,
  require("./got").gothic,
  require("./icel").icel,
  require("./lux").lux,
  require("./nl").nl,
  nor.nb,
  nor.nn,
  require("./oe").oe,
  require("./swe").swedish,
  require("./yid").yiddish,
];
