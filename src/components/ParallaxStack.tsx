/* eslint-disable prettier/prettier */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function MobbinParallax() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress relative to the entire scrolling wrapper
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Extended transition ranges for smoother motion
  const opacity2 = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.05, 0.3], [400, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.6], [400, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.65, 0.9], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.65, 0.9], [400, 0]);

  return (
    <div ref={ref} className="relative flex flex-col items-center h-[220vh]">
      {/* Sticky container that holds the text */}
      <div className="sticky top-0 flex items-center justify-center h-screen text-center">
        <div className="flex flex-col gap-12">
          <motion.h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            A growing library of
          </motion.h2>
          <motion.h2
            className="text-6xl font-bold text-indigo-600 dark:text-indigo-400"
            style={{ opacity: opacity2, y: y2 }}
          >
            1,150 apps
          </motion.h2>
          <motion.h2
            className="text-6xl font-bold text-blue-600 dark:text-blue-400"
            style={{ opacity: opacity3, y: y3 }}
          >
            405,800 screens
          </motion.h2>
          <motion.h2
            className="text-6xl font-bold text-green-600 dark:text-green-400"
            style={{ opacity: opacity4, y: y4 }}
          >
            81,700 flows
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
