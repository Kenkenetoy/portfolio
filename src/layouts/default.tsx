/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";

import { SidebarDemo } from "@/components/sitdebar-bar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen font-sans">
      <div className="absolute top-0 left-0 z-50 h-full">
        <SidebarDemo />
        <div className="fixed z-50 top-0 left-0 right-0 h-[5px] bg-secondary origin-left" />
      </div>

      <div className="relative flex flex-col flex-grow overflow-x-clip ">
        <motion.div
          key={children?.toString()} // Ensure content updates correctly
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          className="space-y-24"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          initial={{ opacity: 0, y: 20 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
