import { useState } from "react";
import getThisSeason from "@/utils/getThisSeason";

const useSeason = () => {
  const [season, setSeason] = useState(getThisSeason());

  const handlePrev = () => setSeason((prev) => prev - 1);
  const handleNext = () => setSeason((prev) => prev + 1);

  return { season, handlePrev, handleNext };
};

export default useSeason;
