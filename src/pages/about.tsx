/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import {
  IconArrowRight,
  IconMoodSmileBeam,
  IconMoonStars,
  IconRecharging,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import {
  moveup,
  moveright,
  moveleft,
  rotateBounce,
  movedown,
} from "@/anim/variants";
import { VscodeOriginal } from "devicons-react";

const content = [
  {
    test: "Design",
    test2:
      "With a proven track record in designing websites, I deliver robust and user-friendly digital designs that are seamlessly integrated with development. My expertise ensures that each project not only looks great but also performs flawlessly, providing an exceptional user experience from start to finish.",
  },
  {
    test: "Development",
    test2:
      "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions, and interaction. I use Next.js and React.js for development and incorporate GSAP and Framer Motion for animations",
  },
  {
    test: "The full package",
    test2:
      "What sets me apart is my ability to deliver complete full-stack applications from concept to implementation. My keen eye for design, along with my expertise in frontend and backend development, including database integration, allows me to create exceptional projects",
  },
];

export default function DocsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About | {siteConfig.name}</title>
        <meta content={siteConfig.meta_description} name="description" />
        <link href={siteConfig.url} rel="canonical" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta content="website" property="og:type" />
        <meta content={siteConfig.url} property="og:url" />
        <meta content={siteConfig.name} property="og:title" />
        <meta content={siteConfig.meta_description} property="og:description" />
        <meta content={siteConfig.meta_image} property="og:image" />

        {/* Twitter Meta Tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={siteConfig.url} name="twitter:url" />
        <meta content={siteConfig.name} name="twitter:title" />
        <meta
          content={siteConfig.meta_description}
          name="twitter:description"
        />
        <meta content={siteConfig.meta_image} name="twitter:image" />
      </Helmet>
      <DefaultLayout>
        <svg height="0" width="0">
          <defs>
            <filter height="300%" id="glow" width="300%" x="-100%" y="-100%">
              <feGaussianBlur result="blurred" stdDeviation="10" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
        <div className="pt-24 mx-auto space-y-16 max-w-screen-2xl">
          {/* Section 1 */}
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.25, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <div className="space-y-4 font-serif">
              <motion.h1
                className="flex items-center gap-8 text-7xl"
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={movedown}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="inView"
              >
                Hello I am {siteConfig.name}{" "}
                <motion.div
                  initial="initial"
                  transition={{ duration: 0.75, ease: "circOut" }}
                  variants={moveleft}
                  viewport={{ once: true, amount: 1 }}
                  whileInView="inView"
                >
                  <motion.div
                    className="p-2 transition-colors ease-in-out rounded-full w-fit bg-warning dark:bg-default-800 duration-250"
                    style={{ filter: "url(#glow)" }}
                  >
                    <motion.div
                      initial="initial"
                      transition={rotateBounce.transition}
                      variants={rotateBounce}
                      whileHover="hover"
                    >
                      {/* Light Mode Icon */}
                      <IconMoodSmileBeam
                        className="w-20 h-20 text-default-50 dark:hidden"
                        stroke={1}
                      />

                      {/* Dark Mode Icon */}
                      <IconMoonStars
                        className="hidden w-20 h-20 text-default-50 dark:block"
                        stroke={1}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.h1>
              <motion.h2
                className="text-4xl "
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="inView"
              >
                {siteConfig.hero_small}
              </motion.h2>
            </div>
            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.35, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div className="absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[90%] duration-250">
                <motion.div
                  initial="initial"
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <VscodeOriginal />
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="flex justify-between font-sans">
              <h3 className="max-w-2xl text-2xl">
                As a Software Engineer, I excel in building scalable
                applications, enhancing user experiences, and streamlining
                development processes.
              </h3>
              <p className="text-xs w-60">
                My proficiency in design, coding, and interaction sets me apart
                within the domain of software engineering.
              </p>
            </div>
          </motion.div>
          {/* Section 2 */}
          <div className="space-y-20">
            <div className="flex flex-col space-y-4 w-fit">
              <p className="mx-auto font-serif text-4xl text-primary">
                I can help you with
              </p>
              <div className="flex gap-12">
                {content.map((test, index) => (
                  <div key={index} className="space-y-4">
                    <p className="text-default-500">
                      {String(index + 1).padStart(2, "0")}.
                    </p>{" "}
                    {/* Format as 01, 02, 03 */}
                    <Divider />
                    <h4 className="font-serif text-4xl">{test.test}</h4>
                    <p>{test.test2}</p>
                  </div>
                ))}
              </div>
            </div>
            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.8, ease: "circOut" }}
              variants={moveleft}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div className="absolute left-[80%]">
                <Button
                  className="p-8 text-xl bg-default-50"
                  color="default"
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  Contact Me <IconArrowRight />
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
