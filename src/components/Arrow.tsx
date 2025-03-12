export const LeftArrow = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      aria-hidden="true"
      className={isDisabled ? "stroke-gray-400" : "stroke-black"}
    >
      <path
        d="M7 13L1 6.984 7 1"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export const RightArrow = ({ isDisabled }: { isDisabled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      aria-hidden="true"
      className={isDisabled ? "stroke-gray-400" : "stroke-black"}
    >
      <path
        d="M1 13L7 6.984 1 1"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};
