import { LEAGUE } from "@/constants/leagues";
import LeagueButton from "./LeagueButton";

type LeagueButtonContainerProps = {
  currentTableLeagueName: string;
  onClick: (leagueName: string) => void;
};

const LeagueButtonContainer = ({
  currentTableLeagueName,
  onClick,
}: LeagueButtonContainerProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full max-w-max gap-4">
        {Object.keys(LEAGUE).map((leagueKey) => {
          const isActive = currentTableLeagueName === leagueKey;
          return (
            <LeagueButton
              key={leagueKey}
              isActive={isActive}
              onClick={onClick}
              leagueKey={leagueKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeagueButtonContainer;
