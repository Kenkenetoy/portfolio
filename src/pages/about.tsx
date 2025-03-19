/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import {
  IconArrowRight,
  IconMoodSmileBeam,
  IconMoonStars,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import {
  AftereffectsOriginal,
  BlenderOriginal,
  FigmaOriginal,
  PhotoshopOriginal,
  ThreedsmaxOriginal,
  VisualstudioOriginal,
  VscodeOriginal,
} from "devicons-react";
import { useTheme } from "@heroui/use-theme";
import { useState, useEffect } from "react";
import { Link } from "@heroui/link";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import {
  moveup,
  moveright,
  rotateBounce,
  movedown,
  happyBounce,
  sleepingBounce,
  cardVariants,
  containerVariants,
  cardVariantsDown,
  containerVariantsDown,
} from "@/anim/variants";

const content = [
  {
    test: "Design",
    test2:
      "I create clean and user-friendly designs that not only look good but also make websites easy to use. Every detail is carefully considered to ensure a smooth and enjoyable experience.",
  },
  {
    test: "Development",
    test2:
      "I build fast and responsive websites that bring designs to life. I focus on smooth animations, interactions, and performance using tools like Next.js, React.js, GSAP, and Framer Motion.",
  },
  {
    test: "Complete Solutions",
    test2:
      "From design to development, I handle everything needed to build a fully functional website. Whether it's the front-end, back-end, or database, I make sure everything works together seamlessly.",
  },
];

const icons = [
  VscodeOriginal,
  VisualstudioOriginal,
  FigmaOriginal,
  PhotoshopOriginal,
  AftereffectsOriginal,
  ThreedsmaxOriginal,
  BlenderOriginal,
];

export default function DocsPage() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    setCurrentTheme(theme); // Update state when theme changes
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";

    setTheme(newTheme);
    setCurrentTheme(newTheme); // Ensure local state updates
  };

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
        {/* <svg height="0" width="0">
          <defs>
            <filter height="300%" id="glow" width="300%" x="-100%" y="-100%">
              <feGaussianBlur result="blurred" stdDeviation="10" />
              <feMerge>
                <feMergeNode in="blurred" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg> */}
        <div className="w-screen px-4 pt-24 mx-auto space-y-12 md:space-y-24 max-w-screen-2xl">
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
                className="flex flex-col-reverse items-center gap-8 text-3xl sm:text-5xl md:text-6xl lg:text-7xl md:flex-row"
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={movedown}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="inView"
              >
                Hello, I am {siteConfig.name}{" "}
                <motion.div
                  initial="initial"
                  transition={{ duration: 0.75, ease: "circOut" }}
                  variants={moveright}
                  viewport={{ once: true, amount: 1 }}
                  whileInView="inView"
                >
                  <motion.div
                    className="p-2 transition-colors ease-in-out rounded-full cursor-pointer select-none w-fit bg-warning dark:bg-default-800"
                    onClick={toggleTheme} // Toggle theme on click
                  >
                    <motion.div
                      className="hidden dark:block"
                      initial="initial"
                      variants={sleepingBounce}
                      whileHover="hover"
                    >
                      <IconMoonStars
                        className="w-20 h-20 text-default-50"
                        stroke={1}
                      />
                    </motion.div>
                    <motion.div
                      className="block dark:hidden"
                      initial="initial"
                      variants={happyBounce}
                      whileHover="hover"
                    >
                      <IconMoodSmileBeam
                        className="w-20 h-20 text-default-50 dark:hidden"
                        stroke={1}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.h1>

              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl"
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
              className="relative flex items-center w-full "
              initial="initial"
              transition={{ duration: 0.35, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />

              <div className="flex flex-col items-center gap-4 md:flex-row">
                <div className="text-medium">Tools Used:</div>

                <motion.div
                  animate="show"
                  className="flex flex-wrap items-center justify-center gap-4"
                  initial="hidden"
                  variants={containerVariants}
                >
                  {icons.map((Icon, index) => (
                    <motion.div
                      key={index}
                      className="p-4 transition-colors ease-in-out rounded-full shadow-md bg-default-50 duration-250"
                      variants={cardVariants} // Apply stagger animation
                    >
                      <motion.div
                        initial="initial"
                        transition={rotateBounce.transition}
                        variants={rotateBounce}
                        whileHover="hover"
                      >
                        <Icon size={50} />
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col justify-between gap-8 font-sans md:flex-row">
              <h3 className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl">
                As a Software Engineer, I specialize in developing scalable
                applications, optimizing user experiences, and improving
                development workflows.
              </h3>

              <p className="text-xs w-60">
                My expertise in design, coding, and user interaction
                distinguishes me in the field of software engineering.
              </p>
            </div>
          </motion.div>

          <div className="space-y-20">
            <div className="flex flex-col space-y-4 w-fit">
              <p className="mx-auto font-serif text-4xl text-primary">
                I can help you with
              </p>
              <motion.div
                animate="show"
                className="flex flex-col gap-12 lg:flex-row"
                initial="hidden"
                variants={containerVariantsDown}
              >
                {content.map((test, index) => (
                  <motion.div
                    key={index}
                    className="space-y-4"
                    variants={cardVariantsDown}
                  >
                    <p className="text-default-500">
                      {String(index + 1).padStart(2, "0")}.
                    </p>
                    <Divider />
                    <h4 className="font-serif text-4xl">{test.test}</h4>
                    <p>{test.test2}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="relative flex items-center w-full"
              initial="initial"
              transition={{ duration: 0.8, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <Divider className="flex-1" />
              <Button
                as={Link}
                className="flex items-center gap-2 p-4 text-base sm:p-6 md:p-8 sm:text-lg md:text-xl"
                href={siteConfig.navItems.Contact.href}
                radius="full"
                size="lg"
                variant="ghost"
              >
                <span className="text-base sm:text-lg md:text-xl">
                  Contact Me
                </span>
                <span>
                  <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </span>
              </Button>
              <Divider className="flex-1 block md:hidden" />
            </motion.div>
          </div>

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
