/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  useDevicon = false, // New prop to toggle between Tabler Icons and Devicons
}: {
  items: {
    title: string;
    description: string;
    icon: React.ComponentType<any>; // Tabler Icon
    devicon: React.ComponentType<any>; // Devicon
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  useDevicon?: boolean; // Toggle for icon set
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const speedMap = { fast: "20s", normal: "40s", slow: "80s" };

      containerRef.current.style.setProperty(
        "--animation-duration",
        speedMap[speed]
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller mx-auto relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-12 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map(({ title, icon: Icon, devicon: DevIcon }, idx) => {
          const SelectedIcon = useDevicon ? DevIcon : Icon; // Toggle between Tabler and Devicon

          return (
            <SelectedIcon
              key={idx}
              className="text-default-foreground"
              size={96}
              stroke={1}
            />
          );
        })}
      </ul>
    </div>
  );
};
