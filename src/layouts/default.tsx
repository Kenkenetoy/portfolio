/* eslint-disable prettier/prettier */
import { motion, useScroll, useSpring } from "framer-motion";
import { memo, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom"; // React Router

import { Provider } from "../provider";

import { SidebarDemo } from "@/components/sidebar-bar";
import { Navbar } from "@/components/navbar";

const MemoizedMain = memo(function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <motion.main
      key={location.pathname} // Ensures Framer Motion resets on navigation
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="space-y-24 bg-slateshit"
      exit={{ opacity: 0, transition: { duration: 0.3 } }} // Removed `y: -20`
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
    <div className="relative flex min-h-screen font-sans">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-terracotta origin-left"
        style={{ scaleX }}
      />

      <div className="relative flex flex-col flex-grow ">
        <Navbar />
        <MemoizedMain>{children}</MemoizedMain>
      </div>
    </div>
  );
}
