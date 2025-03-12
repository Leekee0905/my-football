"use client";
import UnexpectedError from "@/components/UnexpectedError";
import { useEffect } from "react";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col">
      <UnexpectedError error={error} reset={reset} />
    </div>
  );
};
export default Error;
