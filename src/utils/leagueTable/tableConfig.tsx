// tableConfig.tsx
import { StandingEntry } from "@/types/tableDataType.type";
import Image from "next/image";

// URL에 따라 헤더 배열을 반환합니다.
export const getTableHeader = (pathname: string): string[] => {
  if (pathname.includes("table")) {
    return [
      "순위",
      "",
      "클럽",
      "경기수",
      "승",
      "무",
      "패",
      "득점",
      "실점",
      "득실차",
      "승점",
      "최근 5경기",
    ];
  }
  return ["순위", "", "클럽", "경기수", "승", "무", "패", "승점"];
};

// 각 헤더에 해당하는 컬럼 구성 객체를 미리 정의합니다.
const columnMap: { [header: string]: any } = {
  순위: {
    header: "순위",
    accessor: (team: StandingEntry) => team.position,
    className: "",
  },
  "": {
    header: "",
    accessor: (team: StandingEntry) => (
      <div className="flex justify-center items-center">
        <Image
          src={team.team.crest}
          alt={team.team.shortName}
          width={30}
          height={30}
        />
      </div>
    ),
    className: "",
  },
  클럽: {
    header: "팀명",
    accessor: (team: StandingEntry) => team.team.tla,
    className: "",
  },
  경기수: {
    header: "경기 수",
    accessor: (team: StandingEntry) => team.playedGames,
    className: "",
  },
  승: {
    header: "승",
    accessor: (team: StandingEntry) => team.won,
    className: "",
  },
  무: {
    header: "무",
    accessor: (team: StandingEntry) => team.draw,
    className: "",
  },
  패: {
    header: "패",
    accessor: (team: StandingEntry) => team.lost,
    className: "",
  },
  승점: {
    header: "승점",
    accessor: (team: StandingEntry) => team.points,
    className: "",
  },
  득점: {
    header: "득점",
    accessor: (team: StandingEntry) => team.goalsFor,
    className: "",
  },
  실점: {
    header: "실점",
    accessor: (team: StandingEntry) => team.goalsAgainst,
    className: "",
  },
  득실차: {
    header: "득실차",
    accessor: (team: StandingEntry) => team.goalDifference,
    className: "",
  },
  "최근 5경기": {
    header: "최근 5경기",
    accessor: (team: StandingEntry) => team.form,
    className: "",
  },
};

// 헤더 배열의 순서를 기반으로 컬럼 배열을 생성합니다.
export const getTableColumns = (pathname: string) => {
  const headers = getTableHeader(pathname);
  const sortedColumns = headers
    .map((header) => columnMap[header])
    .filter(Boolean);
  return sortedColumns;
};
