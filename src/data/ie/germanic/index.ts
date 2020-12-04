import * as nor from "./nor";

export const list = [
  require("./afr").afrikaans,
  ...require("./da").default,
  ...require("./de").list,
  ...require("./en").dialects,
  require("./far").far,
  require("./fris").frisian,
  require("./got").gothic,
  require("./icel").icel,
  require("./lux").lux,
  require("./nl").nl,
  nor.nb,
  nor.nn,
  require("./oe").oe,
  require("./on").norse,
  require("./swe").swedish,
  require("./yid").yiddish,
];
