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
              "group w-full cursor-pointer overflow-hidden relative card h-[35rem] rounded-md shadow-xl mx-auto flex flex-col justify-end  dark:border-neutral-800",
              "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
              // Preload hover image by setting it in a pseudo-element
              "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
              "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
              "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
              "transition-all duration-500"
            )}
          >
            {/* Content */}
            <div className="absolute bottom-0 z-50 bg-default-50">
              <div className="p-12 pt-4 ">{children}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
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
    <motion.div
      className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-4"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.4 }}
      whileInView="show"
    >
      {siteConfig.whatIDoData.map((card, index) => (
        <motion.div key={index} variants={cardVariants}>
          <WobbleCard
            className=""
            containerClassName={`col-span-1  ${card.backgroundClass}`}
          >
            <div className="flex flex-col items-start max-w-xs transition-colors ease-in-out duration-250">
              <card.icon
                className={`text-3xl text-${card.iconColor}`}
                size={40}
              />
              <h2
                className={cn(
                  "mt-4 text-left text-balance text-2xl font-serif tracking-[-0.015em]",
                  card.textColorClass
                )}
              >
                {card.title}
              </h2>
              <p className="mt-2 text-sm text-left">{card.description}</p>
            </div>
          </WobbleCard>
        </motion.div>
      ))}
    </motion.div>
  );
}
