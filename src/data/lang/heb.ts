import { book, make } from "../utils";
import pic217 from "../pic/217heb.png";
import pic218 from "../pic/218heb.png";

const pic = (image: any) => ({
  type: "image" as const,
  image,
});

const heb = make({ language: "heb" }, {
  217: {
    input: "0.7.0",
    author: "Yaron Tausky",
    book: book("H-3", 167),
    content: [
      pic(pic217),
    ]
  },
});

const old = make({ language: "hbo" }, {
  218: {
    input: "0.7.0",
    author: "Yuval Welis",
    book: book("OH", 199),
    content: [
      pic(pic218),
    ]
  },
});

export const list = [
  heb,
  old,
];
