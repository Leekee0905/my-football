"use client";
import { StandingEntry } from "@/types/tableDataType.type";
import positionBorderColorMaker from "@/utils/leagueTable/positionBorderColorMaker";
import { usePathname } from "next/navigation";

interface LeagueTableRowProps {
  team: StandingEntry;
  columns: {
    header: string;
    accessor: (team: StandingEntry, pathname: string) => React.ReactNode;
    className: string;
  }[];
}

const LeagueTableRow = ({ team, columns }: LeagueTableRowProps) => {
  const pathname = usePathname();
  return (
    <tr className={`${positionBorderColorMaker(team.position)} border-t-2`}>
      {columns.map((col, index) => (
        <td
          key={index}
          className={`text-center px-4 py-2 font-roboto ${col.className}`}
        >
          {col.accessor(team, pathname)}
        </td>
      ))}
    </tr>
  );
};

export default LeagueTableRow;
