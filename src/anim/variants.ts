/* eslint-disable prettier/prettier */

import { Variants } from "motion/react";

// src/utils/animations.ts
export const moveright = {
  initial: { x: -50, opacity: 0 },
  inView: { x: 0, opacity: 1 },
  outOfView: { x: -50, opacity: 0 },
  transition: { duration: 0.35, ease: "circOut" },
};

export const moveleft = {
  initial: { x: 500, opacity: 0, scale: 0 },
  inView: { x: 0, opacity: 1, scale: 1 },
  outOfView: { x: 500, opacity: 0, scale: 0 },
  transition: { duration: 0.35, ease: "circOut" },
};

export const moveup = {
  initial: { y: 50, opacity: 0 },
  inView: { y: 0, opacity: 1 },
  outOfView: { y: 50, opacity: 0 },
  transition: { duration: 0.5, ease: "circOut" },
};

export const movedown = {
  initial: { y: -50, opacity: 0 },
  inView: { y: 0, opacity: 1 },
  outOfView: { y: -50, opacity: 0 },
  transition: { duration: 0.5, ease: "circOut" },
};

export const rotateBounce = {
  initial: { rotate: 0, scale: 1 },
  hover: { rotate: 15, scale: [1, 0.8, 1.1, 1] },
  transition: {
    duration: 0.5,
    ease: "easeInOut",
    times: [0, 0.3, 0.7, 1],
  },
};

export const ringing = {
  initial: { rotate: 0 },
  hover: {
    rotate: [0, 15, 0],
    transition: {
      repeat: Infinity,
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  exit: { rotate: 0 },
};

export const happyBounce: Variants = {
  initial: { scale: 1, y: 0 }, // Reset position & scale
  hover: {
    scale: [1, 1.15, 1], // Subtle pop effect
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "easeInOut",
    },
  },
  exit: { scale: 1, y: 0 }, // Ensure it resets
};

export const sleepingBounce: Variants = {
  initial: { y: 0, scale: 1 }, // Reset position & scale
  hover: {
    y: [0, 5, 0], // Bouncy effect
    transition: {
      repeat: Infinity,
      duration: 1.25,
      ease: "easeInOut",
    },
  },
  exit: { scale: 1, y: 0 }, // Ensure it resets
};

export const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const containerVariantsDown = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Waits 0.5s before starting children animations
      staggerChildren: 0.25, // Each child animates 0.3s apart
    },
  },
};

export const cardVariantsDown = {
  hidden: { opacity: 0, y: -30 }, // Start slightly higher (-30px)
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }, // Slower transition (0.7s)
  },
};

export const moverightfar = {
  initial: { x: -400, opacity: 0 },
  inView: { x: 0, opacity: 1 },
  outOfView: { x: -400, opacity: 0 },
  transition: { duration: 0.35, ease: "circOut" },
};
