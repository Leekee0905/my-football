"use client";
import { usePathname } from "next/navigation";
import useGetLeagueTableQuery from "@/hooks/useGetLeagueTable";
import { StandingEntry } from "@/types/tableDataType.type";
import SkeletonTable from "./SkeletonTable";
import LeagueTableRow from "./LeagueTableRow";
import {
  getTableHeader,
  getTableColumns,
} from "@/utils/leagueTable/tableConfig";
import useLeagueStore from "@/hooks/useLeagueStore";
import getThisSeason from "@/utils/getThisSeason";

const LeagueTable = () => {
  const pathname = usePathname();
  const { league, season } = useLeagueStore((state) => state);
  const { data, isLoading } = useGetLeagueTableQuery(
    league,
    pathname.includes("table") ? season : getThisSeason()
  );

  const TABLE_HEADER = getTableHeader(pathname);
  const TABLE_COLUMNS = getTableColumns(pathname);
  const SKELETON_COLUMNS = pathname.includes("table") ? 12 : 8;
  return (
    <div className="flex flex-col justify-center items-center">
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
            data?.standings[0].table.map((team: StandingEntry) => (
              <LeagueTableRow
                key={team.team.id}
                team={team}
                columns={TABLE_COLUMNS}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
