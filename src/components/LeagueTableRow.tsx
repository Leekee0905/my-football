// LeagueTableRow.tsx
import { StandingEntry } from "@/types/tableDataType.type";

interface LeagueTableRowProps {
  team: StandingEntry;
  columns: {
    header: string;
    accessor: (team: StandingEntry) => React.ReactNode;
    className: string;
  }[];
}

const LeagueTableRow = ({ team, columns }: LeagueTableRowProps) => {
  return (
    <tr>
      {columns.map((col, index) => (
        <td key={index} className={`${col.className}`}>
          {col.accessor(team)}
        </td>
      ))}
    </tr>
  );
};

export default LeagueTableRow;
