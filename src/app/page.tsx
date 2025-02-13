import LeagueTable from "@/components/LeaugeTable";

const Home = async () => {
  return (
    <div className="grid grid-cols-[4fr_6fr] gap-4 px-[152px]">
      <div className="border-black border-solid border-2">
        <LeagueTable />
      </div>
      <div className="border-blue-500 border-solid border-2"></div>
    </div>
  );
};

export default Home;
