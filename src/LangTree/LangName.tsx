import React, { FC } from "react";
import { LangGroupItem } from "../languages";

type Props = {
  lang: LangGroupItem<any>;
  name: string;
  head?: boolean;
};

const LangName: FC<Props> = ({ lang, name, head }) => {
  if (lang.type !== "lang") return null;

  const author = lang.author && <i>({lang.author})</i>;

  if (head) name = name[0].toUpperCase() + name.substr(1);

  const content = <>{name} {author}</>;
  return head ? <h4>{content}</h4> : content;
};
export default LangName;
