import Link from "next/link";

const NavigationLink = ({ path, name }: { path: string; name: string }) => (
  <Link href={`/${path}`}>{name}</Link>
);

export default NavigationLink;
