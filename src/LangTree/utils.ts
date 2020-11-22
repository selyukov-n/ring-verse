import { Data, isMine } from "../data";
import { LangGroupItem } from "../languages";

export const getCounts = (data: Data["lang"], item: LangGroupItem<any>,
                          result = { count: 0, me: 0 }) => {
  if (item.type === "group") {
    item.items.forEach(it => getCounts(data, it, result));
  } else {
    const translations = data[item.id] || [];
    result.count += translations.length;
    result.me += translations.filter(isMine).length;
  }
  return result;
};
