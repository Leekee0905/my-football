import { NAVIGATION_LINKS } from "@/constants/navigation";
import Link from "next/link";
import NavigationLink from "./NavigationLink";

const Header = () => {
  return (
    <header className="flex w-full bg-gray-100">
      <div className="w-[1440px] mx-auto flex h-[86px] justify-between items-center px-[152px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
        <Link href="/">MyFootBall</Link>
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
