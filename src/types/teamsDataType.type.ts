import { Area, Competition, LeagueFilter, Season } from "./tableDataType.type";

export interface TeamsDataType {
  competition: Competition;
  filters: LeagueFilter;
  count: number;
  season: Season;
  teams: Team[];
}

export interface Team {
  address: string;
  area: Area;
  clubColors: string;
  coach: Coach;
  crest: string;
  founded: number;
  id: number;
  lastUpdated: string;
  name: string;
  runningCompetitions: Competition[];
  shortName: string;
  squad: Squad[];
  staff: Coach[];
  tla: string;
  venue: string;
  website: string;
}

interface Coach {
  contract: {
    start: string;
    until: string;
  };
  dateOfBirth: string;
  firstName: string;
  id: number;
  lastName: string;
  name: string;
  nationality: string;
}

interface Squad {
  dateOfBirth: string;
  id: number;
  name: string;
  nationality: string;
  position: string;
}
