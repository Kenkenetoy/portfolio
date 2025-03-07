/* eslint-disable prettier/prettier */
// import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import { SidebarDemo } from "@/components/sitdebar-bar";
import { Sidebar } from "@/components/sidebar";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen">
      {/* Floating Sidebar */}
      <div className="absolute top-0 left-0 z-50 h-full">
        <SidebarDemo />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col flex-grow">
        <main className="container flex-grow mx-auto space-y-16 max-w-7xl">
          {children}
        </main>
      </div>
    </div>
  );
}
