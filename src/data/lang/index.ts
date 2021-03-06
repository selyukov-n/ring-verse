export default [
  require("./est").ee,
  require("./fi").fi,
  require("./hun").hun,
  require("./sami").south_sami,

  require("./jp").jp,

  require("./akk").akk,
  require("./arab").arab,
  require("./aramaic").aramaic,
  require("./egypt").aeg,
  ...require("./heb").list,

  require("./georgian").ge,
  require("./kor").kor,
  require("./kyrgyz").kyrgyz,
  require("./malay").malay,
  require("./maori").maori,
  require("./mongol").mongolian,
  require("./ojibwe").ojibwe,
  require("./quechua").quechua,
  require("./swahili").swahili,
  require("./tag").tagalog,
  require("./tamil").tamil,
  require("./tur").turkish,
  require("./thai").thai,
  require("./tupi").tupi,
  ...require("./indonesian").list,
  require("./viet").viet,
  require("./zh").zh,

  ...require("./basque").list,

  require("./oph").ophenian,
];
