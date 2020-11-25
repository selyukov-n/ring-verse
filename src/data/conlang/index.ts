export default [
  require("./eo").esperanto,
  require("./ido").ido,

  require("./ba-gym").data,
  require("./elder").elder,
  require("./kkh").kh,
  require("./tlh").default,

  ...require("./ang").list,
  ...require("./misc").list,
];
