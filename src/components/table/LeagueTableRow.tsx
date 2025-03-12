"use client";
import { StandingEntry } from "@/types/tableDataType.type";
import positionBorderColorMaker from "@/utils/leagueTable/positionBorderColorMaker";

interface LeagueTableRowProps {
  team: StandingEntry;
  columns: {
    header: string;
    accessor: (team: StandingEntry, pathName: string) => React.ReactNode;
    className: string;
  }[];
  pathName: string;
}

const LeagueTableRow = ({ team, columns, pathName }: LeagueTableRowProps) => {
  return (
    <tr className={`${positionBorderColorMaker(team.position)} border-t-2`}>
      {columns.map((col, index) => (
        <td
          key={index}
          className={`text-center px-4 py-2 font-roboto ${col.className}`}
        >
          {col.accessor(team, pathName)}
        </td>
      ))}
    </tr>
  );
};

export default LeagueTableRow;
