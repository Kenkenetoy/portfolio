/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
// import { Image } from "@heroui/image";

import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const sections = ref.current.querySelectorAll(".scroll-section");
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 3); // Adjusted to trigger earlier

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center p-10 space-x-10 rounded-md"
    >
      <div className="relative flex items-start">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-10 scroll-section">
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="max-w-md mt-5 text-lg text-gray-700 dark:text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        className={cn(
          "hidden lg:block h-60 w-80 rounded-md bg-white dark:bg-gray-800 sticky top-[33vh] overflow-hidden",
          contentClassName
        )}
      >
        <img
          alt={content[activeCard].title}
          className="object-cover w-full h-full"
          height={300}
          src={content[activeCard].imageSrc}
          width={300}
        />
      </div>
    </motion.div>
  );
};
