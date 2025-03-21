/* eslint-disable prettier/prettier */
/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

// import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { Link } from "@heroui/link";
import { useRef, useState } from "react";
import React from "react";

import { cn } from "@/lib/utils";

export const FloatingDock = ({
  items,
  desktopClassName,
  // mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop className={desktopClassName} items={items} />
      {/* <FloatingDockMobile className={mobileClassName} items={items} /> */}
    </>
  );
};

// const FloatingDockMobile = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className={cn("relative block md:hidden", className)}>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             className="absolute inset-x-0 flex flex-col gap-2 mb-2 bottom-full"
//             layoutId="nav"
//           >
//             {items.map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: 10,
//                   transition: {
//                     delay: idx * 0.05,
//                   },
//                 }}
//                 initial={{ opacity: 0, y: 10 }}
//                 transition={{ delay: (items.length - 1 - idx) * 0.05 }}
//               >
//                 <Link
//                   key={item.title}
//                   className="flex items-center justify-center w-10 h-10 rounded-full bg-default"
//                   href={item.href}
//                 >
//                   <div className="w-4 h-4">{item.icon}</div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <button
//         className="flex items-center justify-center w-10 h-10 rounded-full bg-default"
//         onClick={() => setOpen(!open)}
//       >
//         <IconLayoutNavbarCollapse className="w-5 h-5 " />
//       </button>
//     </div>
//   );
// };

const FloatingDockDesktop = ({
  items,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      className={cn(
        "mx-auto flex gap-2 items-end rounded-full border border-gray-300 dark:border-neutral-800  overflow-visible min-w-max h-[50px] "
      )}
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={(e) => mouseX.set(e.pageX)}
    >
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [50, 90, 50]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [50, 90, 50]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} isExternal={true}>
      <motion.div
        ref={ref}
        className="relative flex items-center justify-center transition-colors rounded-full bg-default duration-250 aspect-square "
        style={{ width, height }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }} // Faster response
        whileHover={{ scale: 1.1 }} // Instant hover effect
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-default text-default-foreground absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-base"
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              initial={{ opacity: 0, y: 10, x: "-50%" }}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-center w-12 h-12 transition ease-in-out rounded-full duration-250 bg-default-foreground">
          <motion.div
            className="flex items-center justify-center"
            style={{ width: widthIcon, height: heightIcon }}
          >
            {React.cloneElement(icon as React.ReactElement, {
              className: "w-full h-full stroke-default",
            })}
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
