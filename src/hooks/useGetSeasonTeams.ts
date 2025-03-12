import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./queryKeys";
import getSeasonTeams from "@/fetch/getSeasonTeams";
import { TeamsDataType } from "@/types/teamsDataType.type";

const useGetSeasonTeams = (league: string, season: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.teams(league, season),
    queryFn: () => getSeasonTeams(league, season),
    select: (data: TeamsDataType) => {
      const competitionData = {
        id: 0,
        crest: data.competition.emblem,
        name: "ALL",
        competition: data.competition.id,
      };
      const teams = data.teams.map((element) => ({
        id: element.id,
        crest: element.crest,
        name: element.tla,
        competition: data.competition.id,
      }));
      const teamsWithCompetition = [competitionData, ...teams];
      return teamsWithCompetition;
    },
  });
};

export default useGetSeasonTeams;
