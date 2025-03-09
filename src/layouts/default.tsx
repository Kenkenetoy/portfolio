/* eslint-disable prettier/prettier */
import { SidebarDemo } from "@/components/sitdebar-bar";
import { motion, useScroll, useSpring } from "framer-motion";
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
    <div className="relative flex min-h-screen ">
      {/* Floating Sidebar */}
      <div className="absolute top-0 left-0 z-50 h-full">
        <SidebarDemo />
        <motion.div
          className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-secondary origin-left "
          style={{ scaleX }}
        />
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
