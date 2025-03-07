"use client";
import { LEAGUE } from "@/constants/leagues";
import LeagueButton from "./LeagueButton";
import { memo } from "react";
import useLeagueStore from "@/hooks/useLeagueStore";

const LeagueButtonContainer = () => {
  const leagueName = useLeagueStore((state) => state.league);
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-max gap-4">
        {Object.keys(LEAGUE).map((leagueKey) => {
          const isActive = leagueName === leagueKey;
          return (
            <LeagueButton
              key={leagueKey}
              isActive={isActive}
              leagueKey={leagueKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(LeagueButtonContainer);
