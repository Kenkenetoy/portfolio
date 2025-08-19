/* eslint-disable prettier/prettier */
import { Tabs, Tab } from "@heroui/tabs";
import { easeIn, easeOut, motion } from "framer-motion";

import { StickyScroll } from "./sticky-scroll-reveal";
import { TimelineDemo } from "./education";

import { siteConfig } from "@/config/site";

const tabVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: easeIn } },
};

export default function AnimatedTabs() {
  return (
    <div className="flex flex-col w-full">
      <Tabs
        classNames={{
          tabList: "flex justify-center space-x-4 w-full font-bold",
          tab: "w-fit h-fit text-4xl",
          tabContent: "p-6",
          panel: "p-12 rounded-lg",
        }}
        color="default"
        size="lg"
        variant="underlined"
      >
        <Tab key="experience" title="Experience">
          <motion.div
            animate="animate"
            exit="exit"
            initial="initial"
            variants={tabVariants}
          >
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </motion.div>
        </Tab>

        <Tab key="education" title="Education">
          <motion.div
            animate="animate"
            exit="exit"
            initial="initial"
            variants={tabVariants}
          >
            <TimelineDemo />
          </motion.div>
        </Tab>

        <Tab key="projects" title="Projects">
          <motion.div
            animate="animate"
            exit="exit"
            initial="initial"
            variants={tabVariants}
          >
            <StickyScroll content={siteConfig.contents} />
          </motion.div>
        </Tab>
      </Tabs>
    </div>
  );
}
