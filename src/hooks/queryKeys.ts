export const QUERY_KEYS = {
  leagueTable: (league: string, season: number) =>
    ["leagueTable", league, season] as const,
  weeklyLeagueSchedule: (league: string) =>
    ["weeklyLeagueSchedule", league] as const,
};
