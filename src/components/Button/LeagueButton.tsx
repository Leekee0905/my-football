"use client";

import { LEAGUE } from "@/constants/leagues";

type LeagueButtonProps = {
  isActive: boolean;
  onClick: (label: string) => void;
  leagueKey: string;
};

const LeagueButton = ({ isActive, onClick, leagueKey }: LeagueButtonProps) => {
  return (
    <button
      className={`rounded-md flex-1 min-w-max bg-white ${
        isActive ? "bg-purple-800" : "bg-white"
      }`}
      onClick={() => onClick(leagueKey)}
    >
      <p
        className={`px-4 text-[14px] ${isActive ? "text-white" : "text-black"}`}
      >
        {LEAGUE[leagueKey]}
      </p>
    </button>
  );
};

export default LeagueButton;
