import { PremierLeagueData } from "@/types/tableDataType.type";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/competitions/${query}/standings`,
    {
      headers: {
        "X-Auth-Token": process.env.NEXT_PUBLIC_FOOTBALL_API_KEY as string,
      },
    }
  );
  const data: PremierLeagueData = await res.json();

  return Response.json(data);
};
