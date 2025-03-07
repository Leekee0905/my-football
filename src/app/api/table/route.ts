import { PremierLeagueData } from "@/types/tableDataType.type";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const league = searchParams.get("league");
  const season = searchParams.get("season");
  if (!season)
    return Response.json(
      { error: "Season parameter is required" },
      { status: 400 }
    );

  const apiUrl = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/competitions/${league}/standings`
  );
  apiUrl.searchParams.append("season", season);

  const res = await fetch(apiUrl, {
    headers: {
      "X-Auth-Token": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY as string,
    },
  });
  const data: PremierLeagueData = await res.json();

  return Response.json(data);
};
