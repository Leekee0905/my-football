import getResultColor from "@/utils/leagueTable/getResultColor";

const WinLoseDrawColorIndicator = (form: string[]) => {
  return (
    <div className="flex justify-center items-center gap-2">
      {form.map((e: string, index: number) => {
        const color = getResultColor(e);
        return (
          <div
            className="w-5 h-5 rounded-md border border-solid flex justify-center items-center aspect-square"
            style={{ borderColor: color }}
            key={`${e}-${index}`}
          >
            <p
              className="text-center truncate text-xs"
              style={{ color: color }}
            >
              {e}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WinLoseDrawColorIndicator;
