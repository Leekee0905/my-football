const winLoseFontColorConverter = (standard: number, opposite: number) => {
  return standard >= opposite ? "text-black" : "text-gray-500";
};

export default winLoseFontColorConverter;
