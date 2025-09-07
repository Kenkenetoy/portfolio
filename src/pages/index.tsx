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
import ExperienceComponent from "@/components/experience-cards";

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
        <div className="lg:h-screen min-h-[25rem] mb-12">
          <HeroSection />
        </div>
        <div className="w-screen px-4 mx-auto space-y-8 md:space-y-24 md:text-3xl max-w-screen-2xl">
          {/* Some Text */}
          <div className="flex flex-col gap-8">
            <motion.div
              className="flex flex-col justify-between gap-4 md:flex-row"
              initial="initial"
              transition={{ duration: 0.35, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.5 }}
              whileInView="inView"
            >
              <p className="w-full max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-default-foreground">
                I build fast, scalable apps using Laravel, and React—seamlessly
                combining backend power with interactive, immersive frontends.
              </p>
              <motion.p
                className="w-full text-xs md:w-96 md:text-sm lg:text-base text-default-foreground"
                initial="initial"
                transition={{ duration: 0.35, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.5 }}
                whileInView="inView"
              >
                My expertise in full-stack development, visualization, and
                interactive web design sets me apart in the tech industry.
              </motion.p>

              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="p-2 mx-auto transition-colors ease-in-out rounded-full w-fit h-fit lg:hidden bg-default-foreground duration-250"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <IconRecharging
                    className="w-16 h-16 sm:w-20 sm:h-20 text-default-50"
                    stroke={1}
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Fixed Fade-in Trigger Issue */}
            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.8, ease: "circOut" }}
              variants={moveleft}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="hidden lg:block absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[85%] duration-250"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <IconRecharging
                    className="w-16 h-16 sm:w-20 sm:h-20 text-default-50"
                    stroke={1}
                  />
                </motion.div>
              </motion.div>
              <Divider className="flex-1 block md:hidden" />
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              whileInView="inView"
            >
              <p className="w-full text-2xl font-medium sm:text-3xl lg:text-4xl text-terracotta-foreground dark:text-terracotta-foreground sm:w-3/4 md:w-96">
                Engineering Scalable Systems
              </p>
            </motion.div>
          </div>

          {/* What I Do */}
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="inView"
          >
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-default-foreground">
              What I Do
            </h1>

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
                as={Link}
                className="flex items-center gap-2 p-4 text-base sm:p-6 md:p-8 sm:text-lg md:text-xl"
                href={siteConfig.navItems.About.href}
                radius="full"
                size="lg"
                variant="ghost"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  About Me
                </span>
                <span>
                  <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Project Section */}
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-default-foreground"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              My Projects
            </motion.h1>

            <motion.p
              className="w-full font-serif text-xl lg:w-1/2 sm:text-sm md:text-mg lg:text-lg text-default-foreground"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              I've worked on projects with others and on my own, building things that solve real problems and make life easier for people.
            </motion.p>

            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.8, ease: "circOut" }}
              variants={moveleft}
              viewport={{ once: true, amount: 1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="hidden lg:block absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[50%] duration-250"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.div
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <IconCodeCircle2
                    className="w-16 h-16 sm:w-20 sm:h-20 text-default-50"
                    stroke={1}
                  />
                </motion.div>
              </motion.div>
              <Divider className="flex-1 block md:hidden" />
            </motion.div>

            <div className="pt-0 md:pt-12 mx-auto max-w-[95%] space-y-8">
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
                  className="p-4 text-base sm:p-6 md:p-8 sm:text-lg md:text-xl" // Adjust padding & text size
                  href={siteConfig.navItems.Projects.href}
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <span className="text-base sm:text-lg md:text-xl">
                    Load More
                  </span>
                  <span>
                    <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </span>
                </Button>
              </motion.div>
            </div>
            <Divider />
          </motion.div>

          {/* Experience Section */}
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-default-foreground"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              Experience
            </motion.h1>
            <Divider />
            <div className="max-w-[95%] mx-auto flex flex-wrap gap-12">
              <ExperienceComponent />
            </div>
          </motion.div>

          {/* My Tech Stack */}
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.5, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl text-default-foreground"
              initial="initial"
              transition={{ duration: 0.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              My Tech Stack
            </motion.h1>

            <p className="text-base sm:text-lg md:text-xl">
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
                className="flex items-center gap-2 p-4 text-base sm:p-6 md:p-8 sm:text-lg md:text-xl text-default-foreground"
                href={siteConfig.navItems.About.href}
                underline="always"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  See More In About Me
                </span>
                <span>
                  <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
