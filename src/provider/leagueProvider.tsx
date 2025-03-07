"use client";
import { createLeagueStore } from "@/store/leagueStore";
import { createContext, ReactNode, useRef } from "react";

export type LeagueStoreApi = ReturnType<typeof createLeagueStore>;

export const LeagueStoreContext = createContext<LeagueStoreApi | undefined>(
  undefined
);

export interface LeagueStoreProviderProps {
  children: ReactNode;
}

export const LeagueStoreProvider = ({ children }: LeagueStoreProviderProps) => {
  const storeRef = useRef<LeagueStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createLeagueStore();
  }
  return (
    <LeagueStoreContext.Provider value={storeRef.current}>
      {children}
    </LeagueStoreContext.Provider>
  );
};
