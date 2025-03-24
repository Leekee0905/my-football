import { usePathname } from "next/navigation";
import ScheduleBody from "./ScheduleBody";
import ScheduleHeader from "./ScheduleHeader";
import { Match } from "@/types/scheduleDataType.type";

const ScheduleContainer = ({
  data,
}: {
  data: Record<string, Match[]> | undefined;
}) => {
  const pathName = usePathname();
  const isHome = !pathName.includes("/schedule");
  const isEmpty =
    data?.error ||
    data === undefined ||
    (typeof data === "object" && Object.keys(data).length === 0);

  return (
    <div className="w-full">
      {isEmpty ? (
        <div className="flex items-center justify-center">
          <p className="self-center">경기 일정이 없습니다.</p>
        </div>
      ) : (
        Object.entries(data!).map(([day, values], idx) => (
          <div
            className="border-gray-200 border-solid border rounded-lg mt-[30px]"
            key={idx}
          >
            <ScheduleHeader date={day} />
            <ScheduleBody matches={values} isHome={isHome} />
          </div>
        ))
      )}
    </div>
  );
};

export default ScheduleContainer;
