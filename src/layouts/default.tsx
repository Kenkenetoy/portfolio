/* eslint-disable prettier/prettier */
import { motion, useScroll, useSpring } from "framer-motion";

import { SidebarDemo } from "@/components/sitdebar-bar";
export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative flex min-h-screen font-sans">
      {/* Floating Sidebar */}
      <div className="absolute top-0 left-0 z-50 h-full">
        <SidebarDemo />
        <motion.div
          className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-secondary origin-left "
          style={{ scaleX }}
        />
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col flex-grow overflow-x-clip">
        <main className="space-y-24">{children}</main>
      </div>
    </div>
  );
}
