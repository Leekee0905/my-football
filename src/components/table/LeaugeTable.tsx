"use client";
import { usePathname } from "next/navigation";
import { LeagueDataType, StandingEntry } from "@/types/tableDataType.type";
import SkeletonTable from "./SkeletonTable";
import LeagueTableRow from "./LeagueTableRow";
import {
  getTableHeader,
  getTableColumns,
} from "@/utils/leagueTable/tableConfig";

const LeagueTable = ({
  data,
  isLoading,
}: {
  data: LeagueDataType | undefined;
  isLoading: boolean;
}) => {
  const pathName = usePathname();
  const TABLE_HEADER = getTableHeader(pathName);
  const TABLE_COLUMNS = getTableColumns(pathName);
  const SKELETON_COLUMNS = pathName.includes("table") ? 12 : 8;
  const tableData = data?.standings[0].table;
  return (
    <div className="flex flex-col  items-center">
      <table className="table-fixed w-full px-4 border-collapse">
        <thead>
          <tr>
            {TABLE_HEADER.map((headerName) => (
              <th
                key={headerName}
                className={`${headerName === "승점" && "text-blue-500"} py-2 ${
                  headerName === "클럽" || headerName === "최근 5경기"
                    ? "w-24"
                    : "w-16"
                }`}
              >
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <SkeletonTable columnsCount={SKELETON_COLUMNS} />
          ) : (
            tableData?.map((team: StandingEntry) => (
              <LeagueTableRow
                key={team.team.id}
                team={team}
                columns={TABLE_COLUMNS}
                pathName={pathName}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
