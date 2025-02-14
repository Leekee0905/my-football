const seasonNameMaker = (season: string) => {
  return `${season} - ${Number(season) + 1}`;
};

export default seasonNameMaker;
