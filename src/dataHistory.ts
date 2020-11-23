import { HistoryDate } from "./History";

type HistoryItem = {
  ver: string;
  date?: HistoryDate;
  count: number;
};

const hist: HistoryItem[] = [
  { ver: "0.0.1", date: [2002, "spring"], count: 8 },
];
export default hist;
