// LeagueTable.tsx
"use client";
import { usePathname } from "next/navigation";
import LeagueButtonContainer from "./button/LeagueButtonContainer";
import { useState } from "react";
import useGetLeagueTableQuery from "@/hooks/useGetLeagueTable";
import { StandingEntry } from "@/types/tableDataType.type";
import seasonNameMaker from "@/utils/leagueTable/seasonNameMaker";
import SkeletonTable from "./SkeletonTable";
import LeagueTableRow from "./LeagueTableRow";
import {
  getTableHeader,
  getTableColumns,
} from "@/utils/leagueTable/tableConfig";
import { headerRatioConverter } from "@/utils/leagueTable/headerRatioConverter";

const LeagueTable = () => {
  const [currentTableLeagueName, setCurrentTableLeagueName] = useState("PL");
  const handleLeagueButtonClick = (leagueName: string) => {
    setCurrentTableLeagueName(leagueName);
  };

  const { data, isLoading } = useGetLeagueTableQuery(currentTableLeagueName);
  const pathname = usePathname();

  const TABLE_HEADER = getTableHeader(pathname);
  const TABLE_COLUMNS = getTableColumns(pathname);

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>{seasonNameMaker(data?.filters.season)} 해외 축구 순위표</h3>
      <LeagueButtonContainer
        onClick={handleLeagueButtonClick}
        currentTableLeagueName={currentTableLeagueName}
      />
      <table className="table-fixed w-full px-4 border-separate border-spacing-y-2 border border-gray-300">
        <thead>
          <tr>
            {TABLE_HEADER.map((headerName) => (
              <th key={headerName} className={headerRatioConverter(headerName)}>
                {headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <SkeletonTable />
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
