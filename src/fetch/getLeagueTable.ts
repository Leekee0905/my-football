import { PremierLeagueData } from "@/types/tableDataType.type";

const getLeagueTable = async (league: string) => {
  const url = `/api/table?query=${league}`;
  const res = await fetch(url);
  const data: PremierLeagueData = await res.json();
  return data;
};

export default getLeagueTable;
