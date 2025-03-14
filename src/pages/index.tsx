/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { IconArrowRight, IconRecharging } from "@tabler/icons-react";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero";
import { WobbleCardComponent } from "@/components/wobble-card";
import { Footer } from "@/components/footer";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

const moveright = {
  // Initial state: translateY far off-screen
  initial: { x: -50, opacity: 0 },
  // When the element is in view, translateY to 0
  inView: { x: 0, opacity: 1 },
  // When the element goes out of view, move it further down (you can modify this value if necessary)
  outOfView: { x: -50, opacity: 0 },
};

export default function IndexPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Home | {siteConfig.name}</title>
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
        <div className="h-screen">
          <HeroSection />
        </div>
        <div className="flex flex-col gap-24 mx-auto text-3xl max-w-screen-2xl">
          <div className="flex flex-col gap-8">
            <motion.div
              className="flex justify-between"
              initial="initial"
              transition={{ duration: 1, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
              whileInView="inView"
            >
              <p className="w-1/2">
                I build fast, scalable apps using Laravel, React, and
                WebGPU—seamlessly combining backend power with interactive,
                immersive frontends.
              </p>
              <motion.p
                className="text-sm w-96"
                initial="initial"
                transition={{ duration: 1.25, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
                whileInView="inView"
              >
                My expertise in full-stack development, 3D visualization, and
                interactive web design sets me apart in the tech industry.
              </motion.p>
            </motion.div>

            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 1, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div className="absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[90%] duration-250">
                <IconRecharging
                  className="w-20 h-20 text-default-50"
                  stroke={1}
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              transition={{ duration: 1, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
              whileInView="inView"
            >
              <p className="text-4xl font-medium w-96 text-secondary">
                Engineering Scalable Systems
              </p>
            </motion.div>
          </div>

          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 1, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.2 }} // 👈 Fix viewport detection
            whileInView="inView"
          >
            <h1 className="text-6xl">What I Do</h1>
            <Divider />
            <WobbleCardComponent />
            <motion.div
              className="flex justify-end"
              initial="initial"
              transition={{ duration: 1, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.7 }} // 👈 Fix viewport detection
              whileInView="inView"
            >
              {/* Aligns button to the right */}
              <Button
                className="p-8 text-lg"
                href="/about"
                radius="full"
                size="lg"
                variant="ghost"
              >
                <span className="text-lg">About Me</span>
                <span>
                  <IconArrowRight />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <div className="space-y-8">
            <h1 className="font-serif text-6xl">My Projects</h1>
            <Divider />
            <div className="mx-auto max-w-[90rem]">
              <StickyScroll content={siteConfig.contents} />
            </div>
            <Divider />
          </div>
          <div>
            <div>
              MY TECH STACK My expertise spans a diverse range of technologies,
              enabling me to deliver comprehensive and cutting-edge solutions
              across various platforms.
            </div>

            <InfiniteMovingCards
              direction="right"
              items={Object.values(siteConfig.stack)}
              speed="normal"
              useDevicon={true}
            />
          </div>

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
