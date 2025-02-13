const getLeagueLeaderboard = async () => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/competitions`;
  const response = await fetch(url, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_API_KEY as string,
    },
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return data;
};

export default getLeagueLeaderboard;
