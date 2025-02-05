import Link from "next/link";

const NAVIGATION_LINKS = {
  schedule: "일정",
  table: "테이블",
  teams: "팀",
  community: "커뮤니티",
};

const Header = () => {
  return (
    <header>
      <div className="flex w-full bg-gray-100">
        <div className="w-[1440px] mx-auto flex h-[86px] justify-between items-center px-[152px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
          <Link href="/">MyFootBall</Link>
          <nav className="flex gap-[24px] justify-center items-center">
            {Object.entries(NAVIGATION_LINKS).map(([link, name]) => {
              console.log(link, name);
              return (
                <Link key={link} href={`/${link}`}>
                  {name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
