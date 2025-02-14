interface LeagueFilter {
  season: string;
}

interface Area {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Competition {
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
}

interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner: null | string;
  stages: string[];
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
}

export interface StandingEntry {
  position: number;
  team: Team;
  playedGames: number;
  form: string;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface Standing {
  stage: string;
  type: string;
  group: null | string;
  table: StandingEntry[];
}

export interface PremierLeagueData {
  filters: LeagueFilter;
  area: Area;
  competition: Competition;
  season: Season;
  standings: Standing[];
}
