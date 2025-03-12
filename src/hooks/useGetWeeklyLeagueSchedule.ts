import { useSuspenseQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import getWeeklyLeagueSchedule from "@/fetch/getWeeklyLeagueSchedule";

const useGetWeeklyLeagueSchedule = (league: string) => {
  return useSuspenseQuery({
    queryKey: QUERY_KEYS.weeklyLeagueSchedule(league),
    queryFn: () => getWeeklyLeagueSchedule(league),
  });
};

export default useGetWeeklyLeagueSchedule;
