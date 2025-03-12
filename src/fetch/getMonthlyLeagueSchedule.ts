import { Match } from "@/types/scheduleDataType.type";

const getMonthlyLeagueSchedule = async (
  league: string,
  month: string
): Promise<Record<string, Match[]>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule?league=${league}&month=${month}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default getMonthlyLeagueSchedule;
