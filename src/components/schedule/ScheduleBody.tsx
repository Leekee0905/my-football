import { Match } from "@/types/scheduleDataType.type";
import statusConverter, {
  statusColorConverter,
} from "@/utils/schedule/statusConverter";
import winLoseFontColorConverter from "@/utils/schedule/winLoseFontColorConverter";
import Image from "next/image";

const ScheduleBody = ({
  matches,
  isHome,
}: {
  matches: Match[];
  isHome: boolean;
}) => {
  return (
    <ul className="flex flex-col bg-white rounded-b-lg px-5 justify-center text-sm">
      {matches.map((match) => (
        <li key={match.id}>
          <div
            className={`px-4 py-3 grid ${
              isHome ? "grid-cols-7" : "grid-cols-9"
            } items-center`}
          >
            <p className="flex justify-start items-center">{match.utcDate}</p>
            <div className="flex justify-center items-center">
              <Image
                src={match.homeTeam.crest}
                width={30}
                height={30}
                alt={match.homeTeam.name}
              />
            </div>
            <p className="flex justify-center items-center">
              {isHome ? match.homeTeam.tla : match.homeTeam.shortName}
            </p>
            {!isHome && (
              <p
                className={`flex justify-end items-center font-semibold ${winLoseFontColorConverter(
                  match.score.fullTime.home,
                  match.score.fullTime.away
                )}`}
              >
                {match.score.fullTime.home}
              </p>
            )}
            <p
              className={`${statusColorConverter(
                match.status
              )} flex justify-center items-center`}
            >
              {statusConverter(match.status)}
            </p>
            {!isHome && (
              <p
                className={`flex justify-start items-center font-semibold ${winLoseFontColorConverter(
                  match.score.fullTime.away,
                  match.score.fullTime.home
                )}`}
              >
                {match.score.fullTime.away}
              </p>
            )}
            <p className="flex justify-center items-center font-roboto">
              {isHome ? match.awayTeam.tla : match.awayTeam.shortName}
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
