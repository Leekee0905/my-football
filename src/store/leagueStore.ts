import { createStore } from "zustand";

export interface LeagueState {
  league: string;
  season: number;
}

export interface LeagueActions {
  setLeague: (leagueName: string) => void;
  setSeason: (season: number) => void;
}

export type LeagueStore = LeagueState & LeagueActions;

export const defaultInitialState: LeagueState = {
  league: "PL",
  season:
    new Date().getMonth() + 1 > 7
      ? new Date().getFullYear()
      : new Date().getFullYear() - 1,
};

export const createLeagueStore = (
  initState: LeagueState = defaultInitialState
) => {
  return createStore<LeagueStore>()((set) => ({
    ...initState,
    setLeague: (leagueName) => set({ league: leagueName }),
    setSeason: (season) => set({ season: season }),
  }));
};
