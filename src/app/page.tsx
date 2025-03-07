"use client";
import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import LeagueTable from "@/components/table/LeaugeTable";
import ScheduleContainer from "@/components/schedule/ScheduleContainer";

const Home = () => {
  const date = new Date();
  const thisSeason =
    date.getMonth() + 1 > 7
      ? `${date.getFullYear()}-${date.getFullYear() + 1} 시즌`
      : `${date.getFullYear() - 1}-${date.getFullYear()} 시즌`;

  return (
    <div className="flex flex-col justify-center items-center gap-4 px-28">
      <h2 className="text-xl font-bold">{thisSeason}</h2>
      <LeagueButtonContainer />
      <div className="grid grid-cols-2 gap-4">
        <LeagueTable />
        <ScheduleContainer />
      </div>
    </div>
  );
};

export default Home;
