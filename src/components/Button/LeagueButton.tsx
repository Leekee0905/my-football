"use client";
import { LEAGUE } from "@/constants/leagues";
import useLeagueStore from "@/hooks/useLeagueStore";

type LeagueButtonProps = {
  isActive: boolean;
  leagueKey: string;
};

const LeagueButton = ({ isActive, leagueKey }: LeagueButtonProps) => {
  const handleLeagueButton = useLeagueStore((state) => state.setLeague);
  return (
    <button
      className={`rounded-full flex-1 min-w-max h-[40px] ${
        isActive ? "bg-[#4071e3]" : "bg-white border-2"
      }`}
      onClick={() => handleLeagueButton(leagueKey)}
    >
      <p
        className={`px-4 text-[15px] font-bold ${
          isActive ? "text-white" : "text-black"
        }`}
      >
        {LEAGUE[leagueKey]}
      </p>
    </button>
  );
};

export default LeagueButton;
