import { MONTH } from "@/constants/days";
import splitMonth from "@/utils/splitMonth";
import { SetStateAction } from "react";

interface MonthTabPropsType {
  currentMonth: number;
  setCurrentMonth: React.Dispatch<SetStateAction<number>>;
}

const MonthTab = ({ currentMonth, setCurrentMonth }: MonthTabPropsType) => {
  return (
    <div className="w-full" role="tabpanel">
      <ul className="flex justify-between">
        {MONTH.map((e) => {
          return (
            <li
              key={e}
              className={`${currentMonth}월` === e ? "text-blue-500" : ""}
            >
              <button
                className={`${
                  `${currentMonth}월` === e
                    ? "border-solid border-b-4 border-blue-500"
                    : ""
                } disabled:text-gray-400`}
                onClick={() => setCurrentMonth(splitMonth(e))}
                disabled={e === "6월" || e === "7월"}
              >
                <p className="text-lg font-bold pb-5 tracking-widest">{e}</p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MonthTab;
