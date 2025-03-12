"use client";
import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import SeasonNavigationButton from "@/components/button/SeasonNavigationButton";
import LeagueTable from "@/components/table/LeaugeTable";
import useGetLeagueTableQuery from "@/hooks/useGetLeagueTable";
import useLeagueStore from "@/hooks/useLeagueStore";
import useSeason from "@/hooks/useSeason";

const Table = () => {
  const { season, handlePrev, handleNext } = useSeason();
  const { league } = useLeagueStore((state) => state);
  const { data: tableData, isLoading: isTableLoading } = useGetLeagueTableQuery(
    league,
    season
  );
  return (
    <div className="max-w-[1200px] flex flex-col justify-center items-center gap-4">
      <SeasonNavigationButton
        season={season}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <LeagueButtonContainer />
      <LeagueTable data={tableData} isLoading={isTableLoading} />
    </div>
  );
};

export default Table;
