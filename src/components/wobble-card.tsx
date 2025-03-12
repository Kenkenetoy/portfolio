/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  IconBrush,
  IconCode,
  IconDevices,
  IconLayoutGrid,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

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
        "mx-auto w-full bg-indigo-800 relative rounded-2xl border-1 border-default overflow-hidden transition-colors duration-300 ease-in-out",
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
      <div
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
        }}
      >
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

const cardData = [
  {
    title: "UI & UX",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    backgroundClass: "bg-primary-50",
    textColorClass: "text-primary",
    icon: <IconLayoutGrid className="text-primary" size={40} />,
  },
  {
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    backgroundClass: "bg-secondary-50",
    textColorClass: "text-secondary",
    icon: <IconDevices className="text-secondary" size={40} />,
  },
  {
    title: "Design & Creative",
    description:
      "Crafting visually stunning design that connects deeply with your audience.",
    backgroundClass: "bg-warning-50",
    textColorClass: "text-warning",
    icon: <IconBrush className="text-warning" size={40} />,
  },
  {
    title: "Development",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    backgroundClass: "bg-danger-50",
    textColorClass: "text-danger",
    icon: <IconCode className="text-danger" size={40} />,
  },
];

export function WobbleCardComponent() {
  return (
    <div className="flex flex-col space-y-8">
      <h1 className="text-6xl">What I Do</h1>
      <div className="grid w-full grid-cols-1 gap-4 mx-auto lg:grid-cols-4">
        {cardData.map((card, index) => (
          <WobbleCard
            key={index}
            className=""
            containerClassName={`col-span-1 h-full min-h-[300px] ${card.backgroundClass}`}
          >
            <div className="flex flex-col items-start max-w-xs transition-colors ease-in-out duration-250">
              {card.icon}
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
        ))}
      </div>
    </div>
  );
}
