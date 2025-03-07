/* eslint-disable prettier/prettier */
// import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col">
      <Navbar />

      <main className="container flex-grow mx-auto max-w-7xl space-y--16">
        {children}
      </main>

      <AnnouncementBanner />

      {/* <footer className="flex items-center justify-center w-full py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer> */}
    </div>
  );
}
