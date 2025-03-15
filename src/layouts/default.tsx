/* eslint-disable prettier/prettier */
import { motion, useScroll, useSpring } from "framer-motion";

import { SidebarDemo } from "@/components/sidebar-bar";

import { memo } from "react";

const MemoizedMain = memo(function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.main
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="space-y-24"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
    >
      {children}
    </motion.main>
  );
});

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
      {/* ✅ Sidebar is static */}
      <div className="z-50 ">
        <SidebarDemo />
      </div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-secondary origin-left"
        style={{ scaleX }}
      />

      <div className="relative flex flex-col flex-grow overflow-x-clip">
        <MemoizedMain key={location.pathname}>{children}</MemoizedMain>
      </div>
    </div>
  );
}
