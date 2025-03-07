import { Match } from "@/types/scheduleDataType.type";
import statusConverter from "@/utils/schedule/statusConverter";
import Image from "next/image";

const ScheduleBody = ({ matches }: { matches: Match[] }) => {
  const formatScheduleTime = (utcDate: string) => {
    return new Date(utcDate).toLocaleTimeString("ko-KR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ul className="flex flex-col bg-white rounded-b-lg px-5 justify-center text-sm">
      {matches.map((match) => (
        <li key={match.id}>
          <div className="px-4 py-3 grid grid-cols-7 items-center">
            <p className="flex justify-start items-center">
              {formatScheduleTime(match.utcDate)}
            </p>
            <div className="flex justify-center items-center">
              <Image
                src={match.homeTeam.crest}
                width={30}
                height={30}
                alt={match.homeTeam.name}
              />
            </div>
            <p className="flex justify-center items-center font-roboto">
              {match.homeTeam.tla}
            </p>
            <p className="flex justify-center items-center">
              {statusConverter(match.status)}
            </p>
            <p className="flex justify-center items-center font-roboto">
              {match.awayTeam.tla}
            </p>
            <div className="flex justify-center items-center">
              <Image
                src={match.awayTeam.crest}
                width={30}
                height={30}
                alt={match.awayTeam.name}
              />
            </div>
            <p className="flex justify-end items-center">{match.matchday}R</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ScheduleBody;
