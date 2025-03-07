type ScheduleHeaderPropsType = {
  date: string;
};
const ScheduleHeader = ({ date }: ScheduleHeaderPropsType) => {
  return (
    <div className="bg-gray-200 rounded-t-lg px-5 h-14 flex items-center">
      <h3 className="text-md">{date}</h3>
    </div>
  );
};

export default ScheduleHeader;
