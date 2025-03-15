/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
import { motion } from "framer-motion";
import { IconCodeCircle2, IconLink } from "@tabler/icons-react";
import { Button } from "@heroui/button";

import { TextHoverEffect } from "./text-hover-effect";

import { siteConfig } from "@/config/site";
import { moveright, moveup } from "@/anim/variants";

export const Footer = () => {
  return (
    <div className="space-y-4">
      <footer className="p-10 space-y-4 overflow-hidden border bg-default-50 rounded-2xl text-default-foreground border-default">
        <motion.div className="h-40 footer sm:footer-horizontal">
          <motion.nav
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
                <text className="text-lg font-bold tracking-wide fill-default-foreground">
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
                  <IconCodeCircle2 size={128} stroke={1} />
                </div>
              </foreignObject>
            </svg>
          </motion.nav>

          {/* Explore Section */}
          <motion.nav
            initial="initial"
            transition={{ duration: 0.75, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
            whileInView="inView"
          >
            <h6 className="font-bold text-large text-danger">Explore</h6>
            <div className="z-10 flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
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
            viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
            whileInView="inView"
          >
            <h6 className="font-bold text-large text-primary">Follow Me</h6>
            <div className="z-10 flex flex-col gap-2">
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

          {/* Follow Me Section */}
          <motion.nav
            initial="initial"
            transition={{ duration: 0.75, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 1 }} // 👈 Fix viewport detection
            whileInView="inView"
          >
            <div className="z-10 flex flex-col gap-2">
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
        </motion.div>

        {/* Footer Branding */}
        <motion.div
          className="z-0 w-full mx-auto -space-y-8 font-sans text-3xl"
          initial="initial"
          transition={{ duration: 0.5, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: false, amount: 0.001 }}
          whileInView="inView"
        >
          <TextHoverEffect text={siteConfig.name} />
          <motion.div
            className="flex items-center gap-4 font-serif"
            initial="initial"
            transition={{ duration: 1, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: false, amount: 0.2 }}
            whileInView="inView"
          >
            <p>Let&apos;s create something awesome</p>
            <motion.div
              initial="initial"
              transition={{ duration: 1.5, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: false, amount: 0.2 }}
              whileInView="inView"
            >
              <Button
                className="gap-2 text-3xl"
                color="default"
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

      <span className="flex justify-between text-base">
        <p>
          {siteConfig.name} ©{new Date().getFullYear()} - Privacy Policy
        </p>
        <p>
          {siteConfig.location.province}, {siteConfig.location.country}
        </p>
      </span>
    </div>
  );
};

export default Footer;
