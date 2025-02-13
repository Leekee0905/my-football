"use client";
import { TABLE_HEADER } from "@/constants/table";
import { headerRatioConverter } from "@/utils/leagueTable/headerRatioConverter";
import LeagueButtonContainer from "./Button/LeagueButtonContainer";
import { useState } from "react";

const LeagueTable = () => {
  const [currentTableLeagueName, setCurrentTableLeagueName] = useState("PL");
  const handleLeagueButtonClick = (leagueName: string) => {
    setCurrentTableLeagueName(leagueName);
  };
  console.log(currentTableLeagueName);
  return (
    <div className="flex flex-col justify-center items-center">
      <LeagueButtonContainer
        onClick={handleLeagueButtonClick}
        currentTableLeagueName={currentTableLeagueName}
      />
      <table className="table-fixed w-full border-collapse border border-gray-300">
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
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeagueTable;
