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

interface Coach {
  id: number;
  name: string;
  nationality: string;
}

interface Player {
  id: number;
  name: string;
  position: string;
  shirtNumber: number;
}

interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  coach: Coach;
  leagueRank: null | number;
  formation: string;
  lineup: Player[];
  bench: Player[];
}

interface Score {
  winner: string;
  duration: string;
  fullTime: {
    home: number;
    away: number;
  };
  halfTime: {
    home: number;
    away: number;
  };
}

export interface Match {
  area: Area;
  competition: Competition;
  season: Season;
  id: number;
  utcDate: string;
  status: string;
  minute: number;
  injuryTime: number;
  attendance: number;
  venue: string;
  matchday: number;
  stage: string;
  group: null | string;
  lastUpdated: string;
  homeTeam: Team;
  awayTeam: Team;
  score: Score;
}

interface CompetitionType {
  code: string;
  emblem: string;
  id: number;
  name: string;
  type: string;
}

interface FiltersType {
  season: string;
  status: string[];
}

interface ResultSetType {
  count: number;
  first: string;
  last: string;
  played: number;
}

export interface GetScheduleType {
  competition: CompetitionType;
  filters: FiltersType;
  matches: Match[];
  resultSet: ResultSetType;
}
