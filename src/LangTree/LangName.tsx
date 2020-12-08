import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LangGroupItem } from "../languages";

type Props = {
  lang: LangGroupItem<any>;
  name: string;
  head?: boolean;
  link?: boolean;
};

const LangName: FC<Props> = ({ lang, name, head, link }) => {
  if (lang.type !== "lang") return null;

  const author = lang.author && <i>({lang.author})</i>;

  if (head) name = name[0].toUpperCase() + name.substr(1);

  let content = <>{name} {author}</>;
  if (link) content = <Link to={'/lang/' + lang.id}>{content}</Link>;
  if (head) content = <h5>{content}</h5>;

  return content;
};
export default LangName;
