/* eslint-disable prettier/prettier */
import { motion, useScroll, useSpring } from "framer-motion";
import { memo, useEffect } from "react";

import { Provider } from "../provider";

import { SidebarDemo } from "@/components/sidebar-bar";

const MemoizedMain = memo(function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position on page change
  }, [children]);

  return (
    <motion.main
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="space-y-24 bg-slateshit"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
      initial={{ opacity: 0, y: 20 }}
    >
      <Provider>{children}</Provider>
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
    <div className="relative flex min-h-screen font-sans ">
      <div className="z-50 ">
        <SidebarDemo />
      </div>

      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-terracotta origin-left"
        style={{ scaleX }}
      />

      <div className="relative flex flex-col flex-grow overflow-x-clip">
        <MemoizedMain key={location.pathname}>{children}</MemoizedMain>
      </div>
    </div>
  );
}
