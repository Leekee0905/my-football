const positionBorderColorMaker = (position: number) => {
  if (position < 5) return "border-l-2 border-solid border-l-blue-500";

  if (position === 5) return "border-l-2 border-solid border-l-green-500";

  if (position > 17 && position <= 20)
    return "border-l-2 border-solid border-l-red-500";

  return "";
};
export default positionBorderColorMaker;
