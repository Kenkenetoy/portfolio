/* eslint-disable prettier/prettier */
import { motion, useScroll, useSpring } from "framer-motion";
import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom"; // React Router

import { Provider } from "../provider";

import { SidebarDemo } from "@/components/sidebar-bar";

const MemoizedMain = memo(function Main({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation(); // Track route changes

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  }, [location.pathname]);

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
    <div className="relative flex min-h-screen font-sans">
      <div className="z-50">
        <SidebarDemo />
      </div>

      {/* Scroll progress bar */}
      <motion.div
        className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-terracotta origin-left"
        style={{ scaleX }}
      />

      <div className="relative flex flex-col flex-grow">
        <MemoizedMain>{children}</MemoizedMain>
      </div>
    </div>
  );
}
