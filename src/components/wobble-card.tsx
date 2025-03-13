/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
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
        "mx-auto w-full relative rounded-2xl border-1 border-default overflow-hidden transition-colors duration-300 ease-in-out",
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
          className={cn("h-full px-4 pt-28 pb-12 sm:px-10", className)}
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
              : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
            transition: "transform 0.1s ease-out",
          }}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    />
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function WobbleCardComponent() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-6xl">What I Do</h1>
      <motion.div
        className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-4"
        initial="hidden"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.2 }}
        whileInView="show"
      >
        {siteConfig.whatIDoData.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <WobbleCard
              className=""
              containerClassName={`col-span-1 h-full min-h-[300px] ${card.backgroundClass}`}
            >
              <div className="flex flex-col items-start max-w-xs transition-colors ease-in-out duration-250">
                <card.icon
                  className={`text-3xl text-${card.iconColor}`}
                  size={40}
                />
                <h2
                  className={cn(
                    "mt-4 text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em]",
                    card.textColorClass
                  )}
                >
                  {card.title}
                </h2>
                <p className="mt-2 text-base text-left">{card.description}</p>
              </div>
            </WobbleCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
