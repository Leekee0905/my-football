import { NAVIGATION_LINKS } from "@/constants/navigation";
import Link from "next/link";
import NavigationLink from "./NavigationLink";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex w-full">
      <div className="max-w-[1440px] w-full mx-auto flex h-[86px] justify-between items-center px-28 bg-white">
        <h1>
          <Link href="/">
            <Image
              src={"/assets/images/logo/logo.png"}
              alt="로고"
              width={100}
              height={100}
            />
          </Link>
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
