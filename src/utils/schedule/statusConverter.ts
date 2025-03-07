const statusConverter = (status: string) => {
  switch (status) {
    case "FINISHED":
      return "종료";
    case "TIMED":
    case "SCHEDULED":
      return "예정";
    case "LIVE":
      return "진행중";
    case "PAUSED":
      return "일시 중지";
    case "POSTPONED":
      return "연기";
    case "SUSPENDED":
      return "중단";
    case "CANCELLED":
      return "취소됨";
    default:
      break;
  }
};

export default statusConverter;
