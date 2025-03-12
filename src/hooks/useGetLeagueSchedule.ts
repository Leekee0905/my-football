import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import getLeagueSchedule from "@/fetch/getLeagueSchedule";

const useGetLeagueSchedule = (
  league: string,
  season: number,
  month: number,
  team: number,
  competition: number
) => {
  return useQuery({
    queryKey: QUERY_KEYS.leagueSchedule(
      league,
      season,
      month,
      team,
      competition
    ),
    queryFn: () => getLeagueSchedule(league, season, month, team, competition),
  });
};

export default useGetLeagueSchedule;
