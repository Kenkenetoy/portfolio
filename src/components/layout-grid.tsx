/* eslint-disable prettier/prettier */
"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="relative grid w-full h-full grid-cols-1 gap-4 p-10 mx-auto md:grid-cols-3 max-w-7xl">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                  ? "z-40 bg-white rounded-xl h-full w-full"
                  : "bg-white rounded-xl h-full w-full"
            )}
            layoutId={`card-${card.id}`}
            onClick={() => handleClick(card)}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <ImageComponent card={card} />
          </motion.div>
        </div>
      ))}
      <motion.div
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        onClick={handleOutsideClick}
      />
    </div>
  );
};

const ImageComponent = ({ card }: { card: Card }) => {
  return (
    <motion.img
      alt="thumbnail"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      height="500"
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      width="500"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 z-10 w-full h-full bg-black opacity-60"
        initial={{
          opacity: 0,
        }}
      />
      <motion.div
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="relative px-8 pb-4 z-[70]"
        exit={{
          opacity: 0,
          y: 100,
        }}
        initial={{
          opacity: 0,
          y: 100,
        }}
        layoutId={`content-${selected?.id}`}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
