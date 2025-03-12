"use client";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";
import { LeftArrow, RightArrow } from "../Arrow";

interface TeamPropsType {
  id: number;
  crest: string;
  name: string;
  competition: number;
}

const TeamsTab = ({
  teams,
  currentTeam,
  setCurrentTeam,
}: {
  teams: TeamPropsType[] | undefined;
  currentTeam: { competitionId: number; teamId: number };
  setCurrentTeam: React.Dispatch<
    SetStateAction<{ competitionId: number; teamId: number }>
  >;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollRef = useRef<HTMLUListElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 1200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full" role="tabpanel">
      <button
        onClick={() => handleScroll("left")}
        aria-label="prev"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
      >
        <LeftArrow isDisabled={false} />
      </button>

      <ul
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide px-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {teams?.map((e) => (
          <li key={e.id} className="flex-shrink-0 w-20 flex justify-center">
            <button
              onClick={() =>
                setCurrentTeam({ competitionId: e.competition, teamId: e.id })
              }
              className="flex flex-col items-center gap-2"
            >
              <Image
                alt={`${e.id} ${e.name}`}
                src={e.crest}
                width={40}
                height={40}
              />
              <p
                className={`text-sm ${
                  currentTeam.teamId === e.id
                    ? "text-blue-500 font-bold"
                    : "font-medium"
                }`}
              >
                {e.name}
              </p>
            </button>
          </li>
        ))}
      </ul>

      <button
        aria-label="next"
        onClick={() => handleScroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white shadow-md rounded-full z-10"
      >
        <RightArrow isDisabled={false} />
      </button>
    </div>
  );
};

export default TeamsTab;
