/* eslint-disable prettier/prettier */
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";
import {
  IconBrandReact,
  IconBrandLaravel,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandUnity,
  IconBrandFigma,
  IconBrandAdobeAfterEffect,
  IconBrandAdobePhotoshop,
  IconBrandBlender,
  IconBrandFramerMotion,
  IconBrandVite,
  IconLink,
} from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { siteConfig } from "@/config/site"; // Import siteConfig
import { cn } from "@/lib/utils";

const stackIcons: { [key: string]: JSX.Element } = {
  react: <IconBrandReact size={16} />,
  laravel: <IconBrandLaravel size={16} />,
  tailwind: <IconBrandTailwind size={16} />,
  unity: <IconBrandUnity size={16} />,
  figma: <IconBrandFigma size={16} />,
  aftereffects: <IconBrandAdobeAfterEffect size={16} />,
  photoshop: <IconBrandAdobePhotoshop size={16} />,
  blender: <IconBrandBlender size={16} />,
  framermotion: <IconBrandFramerMotion size={16} />,
  vite: <IconBrandVite size={16} />,
};

type DraggableGridProps = {
  size?: number;
  gap?: number;
  rows?: number;
  cols?: number;
};

const Square = ({
  active,
  setActive,
  colIndex,
  rowIndex,
  x,
  y,
  size,
  gap,
  tech, // <-- Tech key from siteConfig.stack
}: any) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex }
  );

  const springConfig = {
    stiffness: Math.max(700 - d * 120, 0),
    damping: 20 + d * 5,
  };

  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  // Get stack details
  const stackInfo = siteConfig.stack[tech];
  const icon = stackIcons[tech];

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      style={{
        width: size, // Ensure proper square size
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
    >
      <Button
        color="default"
        radius="full"
        variant="solid"
        className="flex items-center justify-center w-full h-full" // <-- Fix button stretching
      >
        {React.cloneElement(icon, { size: 32 })} {/* Increase Icon Size */}
      </Button>
    </motion.div>
  );
};

export const DraggableGrid: React.FC<DraggableGridProps> = ({
  size = 60,
  gap = 10,
  rows = 4,
  cols = 4,
}) => {
  const [active, setActive] = useState({ row: 0, col: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Get all technology keys
  const techKeys = Object.keys(siteConfig.stack);
  const grid = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => techKeys[i * cols + j] || null)
  );

  return (
    <motion.div
      animate={{ "--base-hue": 360 } as any}
      initial={{ "--base-hue": 0 } as any}
      style={{ width: "100%", height: "100%" }}
      transition={{ duration: 10, loop: Infinity, ease: "linear" }}
    >
      <motion.div
        style={{
          display: "flex",
          width: (size + gap) * cols - gap,
          height: (size + gap) * rows - gap,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          position: "relative",
          perspective: 500,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((tech, colIndex) =>
            tech ? (
              <Square
                key={`${rowIndex}-${colIndex}`}
                active={active}
                colIndex={colIndex}
                rowIndex={rowIndex}
                setActive={setActive}
                size={size}
                x={x}
                y={y}
                gap={gap}
                tech={tech} // <-- Pass the tech name
              />
            ) : null
          )
        )}
      </motion.div>
    </motion.div>
  );
};
