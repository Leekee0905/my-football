import { formatDate } from "./formatMatchDay";

const getMonthRange = (season: number, month: number) => {
  if (month < 1 || month > 12) {
    throw new Error("월은 1월과 12월 사이에서 존재해야합니다.");
  }

  const year = month >= 8 ? season : season + 1;
  const startOfMonth = new Date(year, month - 1, 1);
  const endOfMonth = new Date(year, month, 0);

  return {
    start: formatDate(startOfMonth),
    end: formatDate(endOfMonth),
  };
};

export default getMonthRange;
