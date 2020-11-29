export default [
  require("./eo").esperanto,
  require("./ido").ido,

  require("./basic").en,
  require("./ba-gym").data,
  require("./elder").elder,
  require("./drow").drow,
  require("./kkh").kh,
  require("./tlh").default,

  ...require("./ang").list,
  ...require("./misc").list,
  require("./sjast").sj,
  require("./zbihniew").byZbihniew,
];
