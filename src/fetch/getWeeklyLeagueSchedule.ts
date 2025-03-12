import { Match } from "@/types/scheduleDataType.type";

const getWeeklyLeagueSchedule = async (
  league: string
): Promise<Record<string, Match[]>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/home?league=${league}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default getWeeklyLeagueSchedule;
