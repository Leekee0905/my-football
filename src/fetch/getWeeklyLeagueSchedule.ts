import { Match } from "@/types/scheduleDataType.type";

const getWeeklyLeagueSchedule = async (
  league: string
): Promise<Record<string, Match[]>> => {
  const url = `/api/schedule/home?league=${league}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default getWeeklyLeagueSchedule;
