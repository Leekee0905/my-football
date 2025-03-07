import { PremierLeagueData } from "@/types/tableDataType.type";

const getLeagueTable = async (league: string, season: number) => {
  const url = `/api/table?league=${league}&season=${season}`;
  const res = await fetch(url);
  const data: PremierLeagueData = await res.json();
  return data;
};

export default getLeagueTable;
