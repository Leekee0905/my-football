import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR, Roboto } from "next/font/google";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import Providers from "@/provider/queryProvider";
import { LeagueStoreProvider } from "@/provider/leagueProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import cls from "@/utils/cls";

const notoSansKr = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--roboto",
});

export const metadata: Metadata = {
  title: "MyFootball",
  description: "해외 축구 정보를 제공하는 간단한 웹사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <title>MyFootball</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${cls(
          notoSansKr.className,
          roboto.variable
        )} antialiased flex flex-col `}
      >
        <Providers>
          <LeagueStoreProvider>
            <Header />
            <main className="max-w-[1440px] mx-auto">{children}</main>
            <Footer />
          </LeagueStoreProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Providers>
      </body>
    </html>
  );
}
