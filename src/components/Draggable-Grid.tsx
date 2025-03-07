/* eslint-disable prettier/prettier */
import * as React from "react";
import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { distance } from "@popmotion/popcorn";

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
}: any) => {
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const diagonalIndex = (360 / 6) * (colIndex + rowIndex);
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

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        background: `hsla(calc(var(--base-hue) + ${diagonalIndex}), 80%, 60%, 1)`,
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    />
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
  const grid = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => i * cols + j)
  );

  return (
    <motion.div
      animate={{ "--base-hue": 360 } as any}
      initial={{ "--base-hue": 0 } as any}
      transition={{ duration: 10, loop: Infinity, ease: "linear" }}
      style={{ width: "100%", height: "100%" }}
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
          row.map((_item, colIndex) => (
            <Square
              key={`${rowIndex}-${colIndex}`}
              x={x}
              y={y}
              active={active}
              setActive={setActive}
              rowIndex={rowIndex}
              colIndex={colIndex}
              size={size}
              gap={gap}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
};
