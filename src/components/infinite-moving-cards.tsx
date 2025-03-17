/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";
import { IconFileOff } from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
  useDevicon = false,
}: {
  items: {
    title: string;
    description: string;
    icon?: React.ComponentType<any>;
    devicon?: React.ComponentType<any>;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  useDevicon?: boolean;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

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

  const DefaultIcon = IconFileOff; // Set as fallback

  return (
    <>
      {/* 👇 This defines the glow effect */}
      <svg width="0" height="0">
        <defs>
          <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="10" result="blurred" />
            <feMerge>
              <feMergeNode in="blurred" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

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
            "flex min-w-full shrink-0 gap-4 w-max flex-nowrap animate-scroll"
          )}
        >
          {items.map(({ icon: Icon, devicon: DevIcon }, idx) => {
            const SelectedIcon = useDevicon
              ? DevIcon || DefaultIcon
              : Icon || DefaultIcon;

            return (
              <li
                key={idx}
                className="flex items-center justify-center gap-4 p-6 rounded-full bg-default-50"
              >
                {SelectedIcon && (
                  <SelectedIcon
                    className="text-default-foreground"
                    size={60}
                    stroke={1}
                    // style={{ filter: "url(#glow)" }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
