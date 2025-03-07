import RESULT_COLOR from "@/constants/color";

const getResultColor = (result: string) => {
  return RESULT_COLOR[result] || "#000000";
};

export default getResultColor;
