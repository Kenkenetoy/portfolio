/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  IconArrowRight,
  IconCodeCircle2,
  IconRecharging,
} from "@tabler/icons-react";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero";
import { WobbleCardComponent } from "@/components/wobble-card";
import { Footer } from "@/components/footer";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { moveright, moveleft, moveup, rotateBounce } from "@/anim/variants";
import AnimatedDiv from "@/components/animated-div";

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
          <HeroSection the={true} />
        </div>
        <div className="mx-auto space-y-24 text-3xl max-w-screen-2xl">
          <div className="flex flex-col gap-8">
            <AnimatedDiv className="flex justify-between" variants={moveright}>
              <p className="w-1/2">
                I build fast, scalable apps using Laravel, React, and
                WebGPU—seamlessly combining backend power with interactive,
                immersive frontends.
              </p>
              <motion.p
                className="text-sm w-96"
                initial="initial"
                transition={{ duration: 0.35, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 1 }}
                whileInView="inView"
              >
                My expertise in full-stack development, 3D visualization, and
                interactive web design sets me apart in the tech industry.
              </motion.p>
            </AnimatedDiv>

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
                  <IconRecharging
                    className="w-20 h-20 text-default-50"
                    stroke={1}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="initial"
              transition={{ duration: 0.35, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <p className="text-4xl font-medium w-96 text-primary">
                Engineering Scalable Systems
              </p>
            </motion.div>
          </div>

          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="inView"
          >
            <h1 className="font-serif text-6xl">What I Do</h1>
            <Divider />
            <WobbleCardComponent />
            <motion.div
              className="flex justify-end"
              initial="initial"
              transition={{ duration: 0.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.7 }}
              whileInView="inView"
            >
              <Button
                className="p-8 text-lg"
                href="/about"
                radius="full"
                size="lg"
                variant="ghost"
                as={Link}
              >
                <span className="text-lg">About Me</span>
                <span>
                  <IconArrowRight />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="font-serif text-6xl"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              My Projects
            </motion.h1>
            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.8, ease: "circOut" }}
              variants={moveleft}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div className="absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[50%] duration-250">
                <motion.div
                  initial="initial"
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <IconCodeCircle2
                    className="w-20 h-20 text-default-50"
                    stroke={1}
                  />
                </motion.div>
              </motion.div>
            </motion.div>
            <div className="mx-auto max-w-[90rem] space-y-8">
              <StickyScroll content={siteConfig.contents} />
              <motion.div
                className="flex justify-end"
                initial="initial"
                transition={{ duration: 0.5, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.7 }}
                whileInView="inView"
              >
                <Button
                  as={Link}
                  className="p-8 text-lg"
                  href="/blog"
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <span className="text-lg">Load More</span>
                  <span>
                    <IconArrowRight />
                  </span>
                </Button>
              </motion.div>
            </div>
            <Divider />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="font-serif text-6xl"
              initial="initial"
              transition={{ duration: 0.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              My Tech Stack
            </motion.h1>
            <p className="text-lg">
              I work with a variety of technologies to build creative and
              efficient solutions for different platforms.
            </p>

            <InfiniteMovingCards
              direction="right"
              items={Object.values(siteConfig.stack)}
              speed="normal"
              useDevicon={true}
            />

            <motion.div
              className="flex justify-end"
              initial="initial"
              transition={{ duration: 0.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.7 }}
              whileInView="inView"
            >
              <Link
                className="p-8 text-lg text-default-foreground"
                href="/about"
                underline="always"
              >
                <span>See More In About Me</span>
                <span>
                  <IconArrowRight />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
