type Season = "spring" | "summer" | "autumn" | "winter";
export type HistoryDate = [number, number, number?] | [number, Season];

export type Input = {
  date?: HistoryDate;
  mainSource: string | null;
};

const months = [
  null,
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export const formatDate = (date: HistoryDate) => {
  if (date.length === 3) return [...date].reverse().join(".");

  const part = typeof date[1] === "number" && months[date[1]] || date[1];
  return [part, date[0]].join(" ");
};
