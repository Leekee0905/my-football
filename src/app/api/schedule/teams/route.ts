import { TeamsDataType } from "@/types/teamsDataType.type";
import fetchWithRetry from "@/utils/fetchWithRetry";
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
    `${process.env.NEXT_PUBLIC_API_URL}/competitions/${league}/teams`
  );
  apiUrl.searchParams.append("season", season);

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

    const data: TeamsDataType = await res.json();

    return Response.json(data);
  } catch (error) {
    console.error("Fetch failed:", error);
    throw Response.json(
      { error: "Too many requests or timeout. Try again later." },
      { status: 429 }
    );
  }
};
