import React from "react";

const LoadingDots = () => {
  return (
    <div className="flex justify-center items-center space-x-2">
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:0s]"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
    </div>
  );
};

export default LoadingDots;
