import { createStore } from "zustand";

export interface LeagueState {
  league: string;
}

export interface LeagueActions {
  setLeague: (leagueName: string) => void;
}

export type LeagueStore = LeagueState & LeagueActions;

export const defaultInitialState: LeagueState = {
  league: "PL",
};

export const createLeagueStore = (
  initState: LeagueState = defaultInitialState
) => {
  return createStore<LeagueStore>()((set) => ({
    ...initState,
    setLeague: (leagueName) => set({ league: leagueName }),
  }));
};
