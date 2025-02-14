import getLeagueTable from "@/fetch/getLeagueTable";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";

const useGetLeagueTableQuery = (league: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.leagueTable(league),
    queryFn: () => getLeagueTable(league),
  });
};

export default useGetLeagueTableQuery;
