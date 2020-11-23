import { HistoryDate } from "./History";

type HistoryItem = {
  ver: string;
  date?: HistoryDate;
  count: number;
};

const hist: HistoryItem[] = [
  { ver: "0.0.1", date: [2002, "spring"], count: 8 },
  { ver: "0.0.2", date: [2002, "spring"], count: 3 },
  { ver: "0.0.5", date: [2002, 5], count: 18 },
  { ver: "0.0.7", date: [2002, "summer"], count: 1 },
];
export default hist;
