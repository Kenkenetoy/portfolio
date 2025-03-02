import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";

import { cn } from "@/lib/utils";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence>
        {isInside && <FollowPointer title={title} x={x} y={y} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: any;
  y: any;
  title?: string | React.ReactNode;
}) => {
  const colors = [
    "#0ea5e9", // Sky Blue (sky-500)
    "#737373", // Neutral Gray (neutral-500)
    "#14b8a6", // Teal (teal-500)
    "#22c55e", // Green (green-500)
    "#3b82f6", // Blue (blue-500)
    "#ef4444", // Red (red-500)
    "#eab308", // Yellow (yellow-500)
  ];

  return (
    <motion.div
      animate={{
        scale: 1,
        opacity: 1,
      }}
      className="absolute z-50 w-4 h-4 rounded-full"
      exit={{
        scale: 0,
        opacity: 0,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
    >
      <motion.div
        animate={{
          scale: 1,
          opacity: 1,
        }}
        className={
          "px-2 py-2 bg-neutral-200 text-white whitespace-nowrap min-w-max text-xs rounded-full"
        }
        exit={{
          scale: 0.5,
          opacity: 0,
        }}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        style={{
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        }}
      >
        {title || `William Shakespeare`}
      </motion.div>
    </motion.div>
  );
};
