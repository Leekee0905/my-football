export const headerRatioConverter = (headerName: string) => {
  switch (headerName) {
    case "승":
    case "무":
    case "패":
      return "w-1/12";
    default:
      return "w-3/12";
  }
};
