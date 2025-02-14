"use client";
import { TABLE_HEADER } from "@/constants/table";
import { headerRatioConverter } from "@/utils/leagueTable/headerRatioConverter";
import LeagueButtonContainer from "./Button/LeagueButtonContainer";
import { useState } from "react";
import useGetLeagueTableQuery from "@/hooks/useGetLeagueTable";
import { StandingEntry } from "@/types/tableDataType.type";
import seasonNameMaker from "@/utils/leagueTable/seasonNameMaker";
import Image from "next/image";

const LeagueTable = () => {
  const [currentTableLeagueName, setCurrentTableLeagueName] = useState("PL");
  const handleLeagueButtonClick = (leagueName: string) => {
    setCurrentTableLeagueName(leagueName);
  };
  const { data, isPending } = useGetLeagueTableQuery(currentTableLeagueName);
  if (isPending) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center">
      <h3>{seasonNameMaker(data!.filters.season)} 해외 축구 순위표</h3>
      <LeagueButtonContainer
        onClick={handleLeagueButtonClick}
        currentTableLeagueName={currentTableLeagueName}
      />
      <table className="table-fixed w-full border-separate border-spacing-y-2 border border-gray-300">
        <thead>
          <tr>
            {TABLE_HEADER.map((headerName) => {
              return (
                <th
                  key={headerName}
                  className={headerRatioConverter(headerName)}
                >
                  {headerName}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.standings[0].table.map((team: StandingEntry) => {
            return (
              <tr key={team.position}>
                <td className="text-center">{team.position}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <Image
                      src={team.team.crest}
                      alt={team.team.shortName}
                      width={30}
                      height={30}
                    />
                  </div>
                </td>
                <td className="w-3/12 text-center">{team.team.shortName}</td>
                <td className="w-3/12 text-center">{team.playedGames}</td>
                <td className="w-1/12 text-center">{team.won}</td>
                <td className="w-1/12 text-center">{team.draw}</td>
                <td className="w-1/12 text-center">{team.lost}</td>
                <td className="w-3/12 text-center">{team.points}</td>
              </tr>
            );
          })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
