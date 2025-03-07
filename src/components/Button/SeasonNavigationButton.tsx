"use client";
import useLeagueStore from "@/hooks/useLeagueStore";
import getThisSeason from "@/utils/getThisSeason";

const SeasonNavigationButton = () => {
  const { season, setSeason } = useLeagueStore((state) => state);

  const handlePrevious = () => {
    setSeason(season - 1);
  };

  const handleNext = () => {
    setSeason(season + 1);
  };
  const isPreviousDisabled = season === getThisSeason() - 1;
  const isNextDisabled = season === getThisSeason();
  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={handlePrevious}
        className="px-4 py-2 text-black text-xl rounded-lg"
        disabled={isPreviousDisabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          fill="none"
          aria-hidden="true"
          className={isPreviousDisabled ? "stroke-gray-400" : "stroke-black"}
        >
          <path
            d="M7 13L1 6.984 7 1"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <span className="text-2xl font-semibold">
        {season}-{season + 1}
      </span>
      <button
        onClick={handleNext}
        className="px-4 py-2  rounded-lg"
        disabled={isNextDisabled}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          fill="none"
          aria-hidden="true"
          className={isNextDisabled ? "stroke-gray-400" : "stroke-black"}
        >
          <path
            d="M1 13L7 6.984 1 1"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default SeasonNavigationButton;
