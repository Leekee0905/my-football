import getLeagueTable from "@/fetch/getLeagueTable";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";

const useGetLeagueTableQuery = (league: string, season: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.leagueTable(league, season),
    queryFn: () => getLeagueTable(league, season),
  });
};

export default useGetLeagueTableQuery;
