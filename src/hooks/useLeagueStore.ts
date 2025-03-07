import { LeagueStoreContext } from "@/provider/leagueProvider";
import { LeagueStore } from "@/store/leagueStore";
import { useContext } from "react";
import { useStore } from "zustand";

export const useLeagueStore = <T>(selector: (store: LeagueStore) => T): T => {
  const counterStoreContext = useContext(LeagueStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};

export default useLeagueStore;
