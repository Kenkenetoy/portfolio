/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { IconArrowRight, IconCodeCircle2, IconLink } from "@tabler/icons-react";
import { Button } from "@heroui/button";

import { TextHoverEffect } from "./text-hover-effect";

import { siteConfig } from "@/config/site";
import { moveright, moveup, rotateBounce } from "@/anim/variants";

export const Footer = () => {
  return (
    <div className="space-y-4">
      <footer className="p-10 space-y-4 overflow-hidden border bg-default-50 rounded-2xl text-default-foreground border-default">
        <div className="flex flex-col gap-12 md:flex-row">
          <motion.nav
            className="justify-self-start"
            exit="outOfView"
            initial="initial"
            transition={{ duration: 1, ease: "circOut" }}
            variants={moveright}
            whileInView="inView"
          >
            <svg className="w-40 h-40 mx-auto" viewBox="0 0 200 200">
              <defs>
                <path
                  d="M 100,100 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                  id="mediumCirclePath"
                />
              </defs>

              {/* Rotating text */}
              <motion.g
                animate={{ rotate: 360 }}
                style={{ transformOrigin: "center" }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  ease: "linear",
                }}
              >
                <text className="text-lg tracking-wide pointer-events-none fill-default-foreground">
                  <textPath
                    href="#mediumCirclePath"
                    startOffset="50%"
                    textAnchor="middle"
                  >
                    Where design and usability meet together.
                  </textPath>
                </text>
              </motion.g>

              {/* Fixed Devicon in the center */}
              <foreignObject height="128" width="128" x="36" y="36">
                <div className="flex items-center justify-center w-full h-full">
                  <motion.div
                    initial="initial"
                    transition={rotateBounce.transition}
                    variants={rotateBounce}
                    whileHover="hover"
                  >
                    <IconCodeCircle2 size={128} stroke={1} />
                  </motion.div>
                </div>
              </foreignObject>
            </svg>
          </motion.nav>
          <motion.div className="flex flex-wrap items-start gap-4 footer sm:footer-horizontal place-items-center justify-evenly">
            {/* Explore Section */}
            <motion.nav
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <h6 className="w-full font-bold text-center text-large text-primary md:text-start">
                Explore
              </h6>
              <div className="z-10 flex flex-col items-center gap-2 md:items-start">
                {Object.values(siteConfig.navItems).map((item) => (
                  <Link key={item.label} color="foreground" href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.nav>

            {/* Follow Me Section */}
            <motion.nav
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <h6 className="w-full font-bold text-center text-large text-primary md:text-start">
                Follow Me
              </h6>
              <div className="z-10 flex flex-col items-center gap-2 md:items-start">
                {siteConfig.socials.map(({ link, icon: Icon, title }) => (
                  <Link
                    key={link}
                    className="gap-2"
                    color="foreground"
                    href={link}
                    target="_blank"
                  >
                    <Icon size={24} />
                    <span>{title}</span>
                  </Link>
                ))}
              </div>
            </motion.nav>

            {/* Coming SOon */}
            <motion.nav
              className="items-center w-full text-center sm:text-start sm:w-40 justify lg:items-start"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <h6 className="w-full font-bold text-center text-large text-primary sm:text-start">
                3d Experience
              </h6>
              <div className="z-10 flex flex-col gap-2">
                <p>
                  I will be putting up my 3d experience using a webgl framework
                  soon.
                </p>
                <Button isDisabled radius="full" size="lg" variant="ghost">
                  Coming soon <IconArrowRight />
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        </div>

        {/* Footer Branding */}
        <motion.div
          className="z-0 w-full mx-auto font-sans text-3xl text-center lg:text-start 2xl:-space-y-8"
          initial="initial"
          transition={{ duration: 0.5, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: false, amount: 0.001 }}
          whileInView="inView"
        >
          <TextHoverEffect text={siteConfig.name} />

          <motion.div
            className="flex flex-col items-center gap-0 font-serif md:items-start xl:gap-4 xl:flex-row"
            initial="initial"
            transition={{ duration: 1, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: false, amount: 0.2 }}
            whileInView="inView"
          >
            <p className="text-lg sm:text-xl md:text-4xl">
              Let&apos;s create something awesome
            </p>
            <motion.div
              initial="initial"
              transition={{ duration: 1.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: false, amount: 0.2 }}
              whileInView="inView"
            >
              <Button
                as={Link}
                className="gap-2 text-3xl"
                color="default"
                href={siteConfig.navItems.Contact.href}
                radius="full"
                size="lg"
                variant="ghost"
              >
                <span>Get in Touch!</span>
                <IconLink />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </footer>

      <span className="flex flex-wrap justify-between text-xs sm:text-sm md:text-base">
        <p>
          {siteConfig.name} ©{new Date().getFullYear()} - Privacy Policy
        </p>
        <p className="text-end">
          {siteConfig.location.province}, {siteConfig.location.country}
        </p>
      </span>
    </div>
  );
};

export default Footer;
