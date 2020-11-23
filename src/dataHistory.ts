type HistoryItem = {
  ver: string;
  date?: [number, number, number?] | [number, "spring" | "summer" | "autumn" | "winter"];
  count: number;
};

const hist: HistoryItem[] = [
  { ver: "0.0.1", date: [2002, "spring"], count: 8 },
];
export default hist;
