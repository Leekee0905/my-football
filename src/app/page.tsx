"use client";
import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import LeagueTable from "@/components/table/LeaugeTable";
import ScheduleContainer from "@/components/schedule/ScheduleContainer";
import getThisSeason from "@/utils/getThisSeason";
import useGetWeeklyLeagueSchedule from "@/hooks/useGetWeeklyLeagueSchedule";
import useLeagueStore from "@/hooks/useLeagueStore";
import useGetLeagueTableQuery from "@/hooks/useGetLeagueTable";
import SkeletonSchedule from "@/components/schedule/SkeletonSchedule";

const Home = () => {
  const date = new Date();
  const thisSeason =
    date.getMonth() + 1 > 7
      ? `${date.getFullYear()}-${date.getFullYear() + 1} 시즌`
      : `${date.getFullYear() - 1}-${date.getFullYear()} 시즌`;

  const leagueName = useLeagueStore((state) => state.league);
  const { data: weeklyMatch, isLoading: isMatchLoading } =
    useGetWeeklyLeagueSchedule(leagueName);

  const { league } = useLeagueStore((state) => state);
  const { data: tableData, isLoading: isTableLoading } = useGetLeagueTableQuery(
    league,
    getThisSeason()
  );

  return (
    <div className="flex flex-col justify-center items-center gap-4 px-28">
      <h2 className="text-xl font-bold">{thisSeason}</h2>
      <LeagueButtonContainer />
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 gap-10">
        <LeagueTable data={tableData} isLoading={isTableLoading} />

        {isMatchLoading ? (
          <SkeletonSchedule />
        ) : (
          <ScheduleContainer data={weeklyMatch} />
        )}
      </div>
    </div>
  );
};

export default Home;
