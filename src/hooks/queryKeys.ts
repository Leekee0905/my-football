export const QUERY_KEYS = {
  leagueTable: (league: string, season: number) =>
    ["leagueTable", league, season] as const,
  weeklyLeagueSchedule: (league: string) =>
    ["weeklyLeagueSchedule", league] as const,
  teams: (league: string, season: number) => ["teams", league, season] as const,
  leagueSchedule: (
    league: string,
    season: number,
    team: number,
    month: number,
    competition: number
  ) => ["schedule", league, season, month, team, competition] as const,
};
