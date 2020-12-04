import { fromLotR, make } from "../utils";

export const thai = make({ language: "tha" }, {
  481: {
    input: "1.0.2",
    name: fromLotR(),
    author: [],
    book: ["T", 170],
    content: [
      {
        text: `แหวนสามวงแด่กษัตริย ์พรายใต้แผ่นฟ้า
เจ็ดวงแด่เจ้าชาวแคระในท้องพระโรงศิลา
เก้าวงนั้นหนาแด่มนุษย ์ผู้ไร้นิรันดร์
วงเดียวแด่เจ้าแห่งอสูรผู้ครองบัลลังก ์ด า
ในแดนมรณะแห่งมอร์ดอร์
วงเดียวเพื่อครองพิภพ วงเดียวเพื่อค้นพบจบหล้า
วงเดียวเพื่อสาปสิ้นทุกวิญญาณ์พันธนาไว้ในความมืดมน
ในแดนมรณะแห่งมอร์ดอร์`
      },
      {
        name: "transliteration",
        text: `Waen sam uang dae ksatri prai tai phaen fa
Chet wong dae chao chao khrae nai thong phra rarong sila
Kao wong nan na dae mnut phru rai ni ran da
Wong diao dae chao haeng osun phu krong ban lang dam
Ni daen mon na haeng Mo Do
Wong diao phuea krong phi phop, wong diao phuea khon phop chop la
Wong diao phuea sap sin thuk winya phantha na wai nai khwam muetmon
Ni daen mon na haeng Mo Do`
      }
    ]
  },
});
