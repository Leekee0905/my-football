"use client";
import useLeagueStore from "@/hooks/useLeagueStore";
import ScheduleBody from "./ScheduleBody";
import ScheduleHeader from "./ScheduleHeader";
import useGetWeeklyLeagueSchedule from "@/hooks/useGetWeeklyLeagueSchedule";

const ScheduleContainer = () => {
  const leagueName = useLeagueStore((state) => state.league);
  const { data, isLoading } = useGetWeeklyLeagueSchedule(leagueName);

  if (isLoading)
    return (
      <div className="animate-pulse bg-gray-200 border-gray-200 border-solid border rounded-lg mt-[30px] w-full h-20"></div>
    );

  if (!data) return <p>경기 일정이 없습니다.</p>;
  return (
    <div>
      {Object.entries(data).map(([day, values], idx) => (
        <div
          className="border-gray-200 border-solid border rounded-lg mt-[30px]"
          key={idx}
        >
          <ScheduleHeader date={day} />
          <ScheduleBody matches={values} />
        </div>
      ))}
    </div>
  );
};

export default ScheduleContainer;
