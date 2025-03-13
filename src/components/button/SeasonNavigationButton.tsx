"use client";

import getThisSeason from "@/utils/getThisSeason";
import { LeftArrow, RightArrow } from "../Arrow";

type SeasonNavigationButtonProps = {
  season: number;
  handlePrev: () => void;
  handleNext: () => void;
};

const SeasonNavigationButton = ({
  season,
  handlePrev,
  handleNext,
}: SeasonNavigationButtonProps) => {
  const isPreviousDisabled = season === getThisSeason() - 1;
  const isNextDisabled = season === getThisSeason();
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        aria-label="prev"
        onClick={handlePrev}
        className="px-4 py-2 text-black text-xl rounded-lg"
        disabled={isPreviousDisabled}
      >
        <LeftArrow isDisabled={isPreviousDisabled} />
      </button>
      <span className="text-2xl font-semibold">
        {season}-{season + 1}
      </span>
      <button
        aria-label="next"
        onClick={handleNext}
        className="px-4 py-2  rounded-lg"
        disabled={isNextDisabled}
      >
        <RightArrow isDisabled={isNextDisabled} />
      </button>
    </div>
  );
};

export default SeasonNavigationButton;
