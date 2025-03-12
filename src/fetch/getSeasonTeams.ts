const getSeasonTeams = async (league: string, season: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/schedule/teams?league=${league}&season=${season}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("에러");
  }
  return data;
};
export default getSeasonTeams;
