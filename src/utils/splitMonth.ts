const splitMonth = (text: string) => {
  const match = text.match(/(\d+)(월)/);
  return Number(match![1]);
};

export default splitMonth;
