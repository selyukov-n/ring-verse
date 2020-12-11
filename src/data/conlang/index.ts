export default [
  require("./basic").en,
  require("./eo").esperanto,
  require("./ido").ido,
  require("./tp").toki_pona,

  require("./ba-gym").data,
  require("./elder").elder,
  require("./drow").drow,
  require("./kkh").kh,
  require("./tlh").default,

  ...require("./ang").list,
  ...require("./misc").list,
  require("./sjast").sj,
  require("./zbihniew").byZbihniew,
  require("./mgaul").gaulish,
];
