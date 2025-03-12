"use client";
import LeagueButtonContainer from "@/components/button/LeagueButtonContainer";
import SeasonNavigationButton from "@/components/button/SeasonNavigationButton";
import ScheduleContainer from "@/components/schedule/ScheduleContainer";
import useSeason from "@/hooks/useSeason";
import MonthTab from "@/components/schedule/MonthTab";
import { useState } from "react";
import TeamsTab from "@/components/schedule/TeamsTab";
import useLeagueStore from "@/hooks/useLeagueStore";
import LoadingDots from "@/components/LoadingDots";
import useGetLeagueSchedule from "@/hooks/useGetLeagueSchedule";
import useGetSeasonTeams from "@/hooks/useGetSeasonTeams";

const Schedule = () => {
  const defaultMonth = new Date().getMonth() + 1;
  const { season, handlePrev, handleNext } = useSeason();
  const [currentMonth, setCurrentMonth] = useState(defaultMonth);
  const [currentTeam, setCurrentTeam] = useState({
    competitionId: 0,
    teamId: 0,
  });

  const leagueName = useLeagueStore((state) => state.league);

  const { data: teams } = useGetSeasonTeams(leagueName, season);
  const { data: schedules, isLoading } = useGetLeagueSchedule(
    leagueName,
    season,
    currentMonth,
    currentTeam.teamId,
    currentTeam.competitionId
  );

  return (
    <div className="xl:w-[1200px] lg:w-[1000px] md:w-[800px] flex flex-col justify-center items-center gap-6">
      <SeasonNavigationButton
        season={season}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
      <LeagueButtonContainer />
      <MonthTab currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />

      <TeamsTab
        teams={teams}
        currentTeam={currentTeam}
        setCurrentTeam={setCurrentTeam}
      />

      {isLoading ? <LoadingDots /> : <ScheduleContainer data={schedules} />}
    </div>
  );
};

export default Schedule;
