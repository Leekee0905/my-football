import { GetScheduleType } from "@/types/scheduleDataType.type";
import fetchWithRetry from "@/utils/fetchWithRetry";
import {
  formatDate,
  groupMatchesByDate,
} from "@/utils/schedule/formatMatchDay";

import { NextRequest } from "next/server";
export const config = { runtime: "edge" };
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
    console.error("Fetch failed", error);
    throw Response.json(
      { error: "Too many requests or timeout. Try again later." },
      { status: 429 }
    );
  }
};
