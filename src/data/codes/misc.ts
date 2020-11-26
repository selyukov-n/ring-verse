import { make } from "../utils";
import pic228 from "../pic/228gimmel.png";
import pic229 from "../pic/229nuts.png";
import main from "../main";

const pic = (image: any) => ({ type: "image" as const, image });

const prepareForMorse = (text: string) => {
  const lines = text.split(/\n/).map(l => {
    const words = l.split(/[^\w\-]/).map(w => w.split("").join(" ").toUpperCase());
    return words.join(" & ");
  });
  console.log(lines);
  return lines.join("\n");
};

const items1 = make({ input: "0.7.0" }, {
  227: {
    language: "e.morse",
    author: "Yehuda Ronen",
    content: [{
      type: "morse",
      text: prepareForMorse(main.content),
    }]
    /*
    content: `- ···· ·-· · · / ·-· ·· -· --· ··· / ··-· --- ·-· / - ···· · / · ·-·· ···- · -· -····- -·- ·· -· --· ··· / ··- -· -·· · ·-· / - ···· · / ··· -·- -·-- --··-- /
··· · ···- · -· / ··-· --- ·-· / - ···· · / -·· ·-- ·- ·-· ··-· -····- ·-·· --- ·-· -·· ··· / ·· -· / - ···· · ·· ·-· / ···· ·- ·-·· ·-·· ··· / --- ··-· / ··· - --- -· · --··-- /
-· ·· -· · / ··-· --- ·-· / -- --- ·-· - ·- ·-·· / -- · -· / -·· --- --- -- · -·· / - --- / -·· ·· · --··-- /
--- -· · / ··-· --- ·-· / - ···· · / -·· ·- ·-· -·- / ·-·· --- ·-· -·· / --- -· / ···· ·· ··· / -·· ·- ·-· -·- / - ···· ·-· --- -· · /
·· -· / - ···· · / ·-·· ·- -· -·· / --- ··-· / -- --- ·-· -·· --- ·-· / ·-- ···· · ·-· · / - ···· · / ··· ···· ·- -·· --- ·-- ··· / ·-·· ·· · ·-·-·- /
--- -· · / ·-· ·· -· --· / - --- / ·-· ··- ·-·· · / - ···· · -- / ·- ·-·· ·-·· --··-- / --- -· · / ·-· ·· -· --· / - --- / ··-· ·· -· -·· / - ···· · -- --··-- /
--- -· · / ·-· ·· -· --· / - --- / -··· ·-· ·· -· --· / - ···· · -- / ·- ·-·· ·-·· / ·- -· -·· / ·· -· / - ···· · / -·· ·- ·-· -·- -· · ··· ··· / -··· ·· -· -·· / - ···· · -- /
·· -· / - ···· · / ·-·· ·- -· -·· / --- ··-· / -- --- ·-· -·· --- ·-· / ·-- ···· · ·-· · / - ···· · / ··· ···· ·- -·· --- ·-- ··· / ·-·· ·· · ·-·-·-`
     */
  },
  226: {
    language: "e.braille",
    author: "Yehuda Ronen",
    content: [{
      type: "braille",
      text: main.content,
    }],
  },
  228: {
    language: "e.g",
    author: "Ent-wife aka Real Dream - No'a Tel-Or",
    content: [
      pic(pic228),
    ]
  },
  229: {
    language: "e.nuts",
    author: "Ent-wife aka Real Dream - No'a Tel-Or",
    content: [
      pic(pic229),
    ]
  },
});

export const list = [
  items1,
];
