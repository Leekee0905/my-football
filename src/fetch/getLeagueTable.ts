"use client";
import { LeagueDataType } from "@/types/tableDataType.type";

const getLeagueTable = async (league: string, season: number) => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/table?league=${league}&season=${season}`;
  const res = await fetch(url, { next: { revalidate: 0 } });
  const data: LeagueDataType = await res.json();
  return data;
};

export default getLeagueTable;
