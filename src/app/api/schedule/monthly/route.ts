import { GetScheduleType } from "@/types/scheduleDataType.type";
import fetchWithRetry from "@/utils/fetchWithRetry";
import { groupMatchesByDate } from "@/utils/schedule/formatMatchDay";
import getMonthRange from "@/utils/schedule/getMonthRange";
import { NextRequest } from "next/server";

export const config = { runtime: "edge" };

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const league = searchParams.get("league");
  const team = searchParams.get("team");
  const month = searchParams.get("month");
  const season = searchParams.get("season");
  const competition = searchParams.get("competition") || "";

  const { start, end } = getMonthRange(Number(season), Number(month));

  if (!league)
    return Response.json(
      { error: "League parameter is required" },
      { status: 400 }
    );

  if (!season)
    return Response.json(
      { error: "Season parameter is required" },
      { status: 400 }
    );

  const allMatchesUrl = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/competitions/${league}/matches`
  );
  const teamMatchesUrl = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${team}/matches`
  );
  teamMatchesUrl.searchParams.append("competitions", competition);

  const apiUrl = team === "0" ? allMatchesUrl : teamMatchesUrl;
  apiUrl.searchParams.append("season", season);
  apiUrl.searchParams.append("dateFrom", start);
  apiUrl.searchParams.append("dateTo", end);

  const apiKey = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
  if (!apiKey)
    return Response.json({ error: "API key is missing" }, { status: 500 });

  try {
    const timeout = new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error("Request timeout")), 5000)
    );

    const res = await Promise.race([
      fetchWithRetry(apiUrl.toString(), {
        headers: { "X-Auth-Token": apiKey },
      }),
      timeout,
    ]);

    const data: GetScheduleType = await res.json();
    const groupedMatches = groupMatchesByDate(data.matches);

    return Response.json(groupedMatches);
  } catch (error) {
    console.error("Fetch failed:", error);
    throw Response.json(
      { error: "Too many requests or timeout. Try again later." },
      { status: 429 }
    );
  }
};
