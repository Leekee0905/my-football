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
    <div className="flex justify-center items-center gap-4">
      {Object.entries(LEAGUE).map(([leagueKey, leagueName]) => {
        const isActive = currentTableLeagueName === leagueName;
        return (
          <LeagueButton
            key={leagueKey}
            isActive={isActive}
            onClick={onClick}
            label={leagueName}
          />
        );
      })}
    </div>
  );
};

export default LeagueButtonContainer;
