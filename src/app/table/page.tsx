"use client";
import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import SeasonNavigationButton from "@/components/button/SeasonNavigationButton";
import LeagueTable from "@/components/table/LeaugeTable";
import getThisSeason from "@/utils/getThisSeason";
import { useState } from "react";

const Table = () => {
  const [currentSeason, setCurrentSeason] = useState(getThisSeason());

  const handlePrev = () => {
    setCurrentSeason((prev) => prev - 1);
  };
  const handleNext = () => {
    setCurrentSeason((prev) => prev + 1);
  };

  return (
    <div className="max-w-[1200px] flex flex-col justify-center items-center gap-4">
      <SeasonNavigationButton
        season={currentSeason}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <LeagueButtonContainer />
      <LeagueTable season={currentSeason} />
    </div>
  );
};

export default Table;
