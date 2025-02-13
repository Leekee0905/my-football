"use client";

import { LEAGUE } from "@/constants/leagues";

type LeagueButtonProps = {
  isActive: boolean;
  onClick: (label: string) => void;
  label: string;
};

const LeagueButton = ({ isActive, onClick, label }: LeagueButtonProps) => {
  console.log(label, LEAGUE);
  return (
    <button
      className={isActive ? "bg-purple-600" : "bg-white"}
      onClick={() => onClick(label)}
    >
      <p className={isActive ? "text-white" : "text-black"}>{label}</p>
    </button>
  );
};

export default LeagueButton;
