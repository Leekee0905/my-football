import { Match } from "@/types/scheduleDataType.type";

export const formatUtcDateString = (utcDate: string): string => {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(utcDate));
};

export const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString("ko-KR")
    .slice(0, -1)
    .split(". ")
    .map((str) => str.padStart(2, "0"))
    .join("-");
};

export const groupMatchesByDate = (
  matches: Match[]
): Record<string, Match[]> => {
  return matches.reduce((acc, match) => {
    const date = new Date(match.utcDate);
    const formattedDate = formatDate(date);

    const [, month, day] = formattedDate.split("-");
    const dayOfWeek = date.toLocaleDateString("ko-KR", { weekday: "short" });
    const displayDate = `${month}월 ${day}일 (${dayOfWeek})`;
    if (!acc[displayDate]) acc[displayDate] = [];
    acc[displayDate].push({
      ...match,
      utcDate: formatUtcDateString(match.utcDate), // UTC 시간 변환
    });

    return acc;
  }, {} as Record<string, Match[]>);
};
