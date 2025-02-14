export const headerRatioConverter = (headerName: string) => {
  switch (headerName) {
    case "승":
    case "무":
    case "패":
    case "순위":
    case "승점":
      return "w-1/12";
    default:
      return "";
  }
};
