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
  // image,
  hoverImage,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  // image: string;
  hoverImage: string;
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
        "mx-auto w-full relative rounded-3xl overflow-hidden transition-colors duration-300 ease-in-out",
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
      <div>
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
              "group w-full cursor-pointer overflow-hidden relative card h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[35rem] xl:h-[40rem] rounded-md shadow-xl mx-auto flex flex-col justify-end dark:border-neutral-800",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 ",
              // "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
            style={{
              backgroundImage: `url(${hoverImage})`,
              // backgroundImage: `url(${isHovering ? hoverImage : image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Content */}
            <div className="absolute bottom-0 z-50 w-full min-h-40 md:h-48 lg:h-60 bg-default-50">
              <div className="px-2 py-4 sm:pt-4 md:pt-8 md:px-4 lg:pt-12 lg:px-8">
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
      className="flex flex-wrap justify-center gap-4 mx-auto"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.1 }}
      whileInView="show"
    >
      {siteConfig.whatIDoData.map((card, index) => (
        <motion.div key={index} className="flex-grow" variants={cardVariants}>
          <WobbleCard
            className="flex-1 min-w-[200px] w-full"
            containerClassName={`border border-1 border-default ${card.backgroundClass}`}
            hoverImage={card.hoverImage}
            // image={card.image}
          >
            <div className="flex flex-col items-start transition-colors ease-in-out duration-250">
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
              <p className="mt-2 text-xs text-left lg:text-sm xl:text-base">
                {card.description}
              </p>
            </div>
          </WobbleCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
