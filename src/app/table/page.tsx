import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import SeasonNavigationButton from "@/components/button/SeasonNavigationButton";
import LeagueTable from "@/components/table/LeaugeTable";

const Table = () => {
  return (
    <div className="max-w-[1200px] flex flex-col justify-center items-center gap-4">
      <SeasonNavigationButton />
      <LeagueButtonContainer />
      <LeagueTable />
    </div>
  );
};

export default Table;
