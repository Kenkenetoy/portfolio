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
        <main className="space-y-12">{children}</main>
        <footer className="p-10 footer sm:footer-horizontal bg-base-300 text-base-content">
          <nav>
            <h6 className="footer-title">Services</h6>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
          </nav>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4"></div>
          </nav>
        </footer>
      </div>
    </div>
  );
}
