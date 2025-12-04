/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { containerVariants, cardVariants } from "@/anim/variants";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
  hoverImage,
  aspectRatio = "4/3", // Default aspect ratio, can be customized
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  hoverImage: string;
  aspectRatio?: string; // e.g., "16/9", "4/3", "1/1", "3/4"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;

    setMousePosition({ x, y });
  };

  return (
    <motion.section
      className={cn(
        "mx-auto w-full h-full relative rounded-3xl overflow-hidden transition-colors duration-300 ease-in-out",
        containerClassName
      )}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
          : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
        transition:
          "transform 0.1s ease-out, background-color 0.1s ease-in-out",
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <div className="h-full">
        <motion.div
          className={cn("relative h-full gap-12 overflow-hidden", className)}
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className={cn(
              "group w-full h-full cursor-pointer overflow-hidden relative card rounded-md shadow-xl mx-auto",
              "flex flex-col", // Stacked vertically on all devices
              "dark:border-neutral-800",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 ",
              "transition-all duration-500"
            )}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Image Section */}
            <div
              className="flex-shrink-0 w-full"
              style={{
                aspectRatio: aspectRatio,
                backgroundImage: `url(${hoverImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Content Section */}
            <div className="flex items-center flex-grow w-full p-2 bg-default-50 sm:p-4 md:p-6">
              <div className="w-full">
                {children}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export function WobbleCardComponent() {
  return (
    <motion.div
      className="grid justify-center grid-cols-4 gap-4 mx-auto auto-rows-fr"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="show"
    >
      {siteConfig.whatIDoData.map((card, index) => (
        <motion.div key={index} className="flex" variants={cardVariants}>
          <WobbleCard
            className="flex-1 min-w-[200px] w-full"
            containerClassName={`border border-1 border-default ${card.backgroundClass}`}
            hoverImage={card.hoverImage}
            aspectRatio="4/3" // Set your desired aspect ratio here
          >
            <div className="flex flex-col items-start justify-between h-full transition-colors ease-in-out duration-250">
              <div className="flex items-center gap-2">
                <card.icon className={`text-${card.iconColor}`} />

                <h2
                  className={cn(
                    "text-base sm:text-lg md:text-xl font-serif",
                    card.textColorClass
                  )}
                >
                  {card.title}
                </h2>
              </div>
              <p className="text-xs text-left lg:text-sm xl:text-base">
                {card.description}
              </p>
            </div>
          </WobbleCard>
        </motion.div>
      ))}
    </motion.div>
  );
}