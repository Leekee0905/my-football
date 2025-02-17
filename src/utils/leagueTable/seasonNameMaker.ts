const seasonNameMaker = (season: string | undefined) => {
  if (season === undefined) {
    return "";
  }
  return `${season} - ${Number(season) + 1}시즌`;
};

export default seasonNameMaker;
