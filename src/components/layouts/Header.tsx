import { NAVIGATION_LINKS } from "@/constants/navigation";
import Link from "next/link";
import NavigationLink from "./NavigationLink";

const Header = () => {
  return (
    <header className="flex w-full">
      <div className="max-w-[1440px] w-full mx-auto flex h-[86px] justify-between items-center px-28 bg-white">
        <h1>
          <Link href="/">MyFootBall</Link>
        </h1>
        <nav className="flex gap-[24px] justify-center items-center">
          {Object.entries(NAVIGATION_LINKS).map(([link, name]) => (
            <NavigationLink key={link} path={link} name={name} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
