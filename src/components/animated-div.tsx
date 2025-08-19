/* eslint-disable prettier/prettier */
import { motion } from "motion/react";
import { circOut } from "framer-motion";

type AnimatedDivProps = {
  children: React.ReactNode;
  variants: any;
  className?: string;
  duration?: number;
  ease?: any;
};

const AnimatedDiv = ({
  children,
  variants,
  className,
  duration = 0.35, // Default duration
  ease = circOut, // Default easing
}: AnimatedDivProps) => (
  <motion.div
    className={className}
    initial="initial"
    transition={{ duration, ease }}
    variants={variants}
    viewport={{ once: true, amount: 1 }}
    whileInView="inView"
  >
    {children}
  </motion.div>
);

export default AnimatedDiv;
