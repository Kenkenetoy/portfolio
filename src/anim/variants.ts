/* eslint-disable prettier/prettier */
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
