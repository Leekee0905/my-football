import { Match } from "@/types/scheduleDataType.type";

const getLeagueSchedule = async (
  league: string,
  season: number,
  month: number,
  team: number,
  competition: number
): Promise<Record<string, Match[]>> => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/monthly?league=${league}&season=${season}&month=${month}&team=${team}&competition=${competition}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
export default getLeagueSchedule;
