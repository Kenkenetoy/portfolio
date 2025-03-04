/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";
import {
  IconBrandReact,
  IconBrandLaravel,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { Button } from "@heroui/button";

import { siteConfig } from "@/config/site"; // Import siteConfig
import { cn } from "@/lib/utils";

// Stack-to-icon mapping
const stackIcons: { [key: string]: JSX.Element } = {
  react: <IconBrandReact size={16} />,
  laravel: <IconBrandLaravel size={16} />,
  tailwind: <IconBrandTailwind size={16} />,
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    type: string;
    description: string;
    imageSrc: string;
    stack: string[]; // Added stack
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>(
    {}
  );
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const sections = ref.current.querySelectorAll(".scroll-section");
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 3);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Preload the next image to prevent delay when switching
  useEffect(() => {
    if (!content[activeCard]) return;

    const img = document.createElement("img");

    img.src = content[activeCard].imageSrc;
    img.onload = () => {
      setLoadedImages((prev) => ({ ...prev, [activeCard]: true }));
    };
  }, [activeCard]);

  return (
    <motion.div
      ref={ref}
      className="relative flex justify-center p-10 space-x-10"
    >
      {/* Left Content */}
      <div className="relative flex flex-col space-y-10">
        {content.map((item, index) => (
          <div key={item.title + index} className="space-y-4 scroll-section">
            <div className="space-y-2">
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.h4
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-gray-900 text-md dark:text-slate-100"
              >
                {item.type}
              </motion.h4>
            </div>
            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="max-w-lg text-lg text-gray-700 dark:text-slate-300"
            >
              {item.description}
            </motion.p>

            {/* Stack Icons */}
            {item.stack.length > 0 && (
              <motion.div
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {item.stack.map((tech, i) => {
                  const stackInfo = siteConfig.stack[tech]; // Get stack info

                  return stackIcons[tech] ? (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="font-bold text-small">
                            {stackInfo?.title}
                          </div>
                          <div className="text-">{stackInfo?.description}</div>
                        </div>
                      }
                    >
                      <Button
                        color="default"
                        radius="full"
                        size="sm"
                        variant="ghost"
                      >
                        {stackIcons[tech]}
                        <span className="font-semibold text-tiny">
                          {stackInfo?.title}
                        </span>
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="font-bold text-small">
                            {stackInfo?.title}
                          </div>
                          <div className="text-tiny">
                            {stackInfo?.description}
                          </div>
                        </div>
                      }
                    >
                      <Button
                        color="default"
                        radius="full"
                        size="sm"
                        variant="ghost"
                      >
                        <span className="font-semibold text-tiny">
                          {stackInfo?.title}
                        </span>
                      </Button>
                    </Tooltip>
                  );
                })}
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div
        className={cn(
          "hidden lg:block h-full w-80 rounded-md sticky top-[33vh] overflow-hidden",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard} // Re-render when activeCard changes
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {loadedImages[activeCard] ? (
            <Image
              alt={content[activeCard].title}
              className="object-cover w-full h-full"
              height={200}
              src={content[activeCard].imageSrc}
              width={400}
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              Loading...
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
