import Image from "next/image";
import Link from "next/link";

const LINK_IMAGES = [
  {
    name: "github",
    url: "https://github.com/Leekee0905/my-football",
    image: "/assets/images/footer/github.png",
  },
  {
    name: "blog",
    url: "https://velog.io/@leekee0905",
    image: "/assets/images/footer/blog.png",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col jsutify-center items-center bg-gray-50 gap-[25px] py-[50px]">
      <div className="flex gap-[24px]">
        {LINK_IMAGES.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.url}
              className="relative w-[32px] h-[32px] overflow-hidden"
            >
              <Image src={link.image} alt={link.name} fill />
            </Link>
          );
        })}
      </div>
      <p className="text-[14px] text-gray-700 font-medium">
        Copyright ⓒ MyFootball 2025, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
