import { GetScheduleType, Match } from "@/types/scheduleDataType.type";
import { NextRequest } from "next/server";

const formatDate = (date: Date): string => {
  return date
    .toLocaleDateString("ko-KR")
    .slice(0, -1)
    .split(". ")
    .map((str) => (str.length < 2 ? str.padStart(2, "0") : str))
    .join("-");
};

const groupMatchesByDate = (matches: Match[]): Record<string, Match[]> => {
  return matches.reduce((acc, match) => {
    const date = new Date(match.utcDate);
    const dateParts = formatDate(date).split("-");
    const day = date.toLocaleDateString("ko-KR", { weekday: "short" });
    const formattedDate = `${dateParts[1]}월 ${dateParts[2]}일 (${day})`;

    if (!acc[formattedDate]) acc[formattedDate] = [];
    acc[formattedDate].push(match);

    return acc;
  }, {} as Record<string, Match[]>);
};

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const league = searchParams.get("league");
  if (!league)
    return Response.json(
      { error: "League parameter is required" },
      { status: 400 }
    );

  const today = new Date();
  const todayFormatted = formatDate(today);

  const afterWeekend = new Date();
  afterWeekend.setDate(today.getDate() + 7);
  const afterWeekendFormatted = formatDate(afterWeekend);

  const apiUrl = new URL(
    `${process.env.NEXT_PUBLIC_API_URL}/competitions/${league}/matches`
  );
  apiUrl.searchParams.append("status", "SCHEDULED");
  apiUrl.searchParams.append("dateFrom", todayFormatted);
  apiUrl.searchParams.append("dateTo", afterWeekendFormatted);

  const apiKey = process.env.NEXT_PUBLIC_FOOTBALL_API_KEY;
  if (!apiKey)
    return Response.json({ error: "API key is missing" }, { status: 500 });

  const res = await fetch(apiUrl.toString(), {
    headers: { "X-Auth-Token": apiKey },
  });

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch data" },
      { status: res.status }
    );
  }

  const data: GetScheduleType = await res.json();
  const groupedMatches = groupMatchesByDate(data.matches);

  return Response.json(groupedMatches);
};
