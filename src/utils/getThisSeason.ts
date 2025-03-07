const getThisSeason = () => {
  const date = new Date();
  return date.getMonth() + 1 > 7 ? date.getFullYear() : date.getFullYear() - 1;
};
export default getThisSeason;
