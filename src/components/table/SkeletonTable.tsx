import { ROWS_COUNT } from "@/constants/table";

const SkeletonTable = ({ columnsCount = 8 }) => {
  return (
    <>
      {Array.from({ length: ROWS_COUNT }).map((_, rowIndex) => (
        <tr key={rowIndex}>
          {Array.from({ length: columnsCount }).map((_, colIndex) => (
            <td key={colIndex}>
              <div className="h-8 px-2 bg-gray-200 rounded animate-pulse"></div>
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};

export default SkeletonTable;
