export default [
  require("./est").ee,
  require("./fi").fi,
  require("./hun").hun,
  require("./jp").jp,

  require("./akk").akk,
  require("./arab").arab,
  require("./aramaic").aramaic,
  require("./egypt").aeg,
  ...require("./heb").list,
  require("./tag").tagalog,
  require("./tamil").tamil,
  require("./tur").turkish,
  require("./tupi").tupi,
  ...require("./indonesian").list,

  ...require("./basque").list,

  require("./oph").ophenian,
];
