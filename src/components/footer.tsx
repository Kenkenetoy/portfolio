/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { TextHoverEffect } from "./text-hover-effect";

import { siteConfig } from "@/config/site";

const moveup = {
  // Initial state: translateY far off-screen
  initial: { y: 200, opacity: 0 },
  // When the element is in view, translateY to 0
  inView: { y: 0, opacity: 1 },
  // When the element goes out of view, move it further down (you can modify this value if necessary)
  outOfView: { y: 200, opacity: 0 },
};

export const Footer = () => {
  return (
    <div className="space-y-4">
      <footer className="p-10 space-y-4 overflow-hidden bg-default-50 rounded-2xl text-default-foreground">
        <div className="h-40 footer sm:footer-horizontal">
          <nav>
            <h6 className="w-48 font-bold text-large">
              Where aesthetics & functionality meet
            </h6>
          </nav>

          {/* Explore Section */}
          <nav>
            <h6 className="font-bold text-large text-danger">Explore</h6>
            <div className="z-10 flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <Link key={item.label} color="foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Follow Me Section */}
          <nav>
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
          </nav>

          {/* Follow Me Section */}
          <nav>
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
          </nav>
        </div>

        {/* Footer Branding */}
        <motion.p
          className="z-0 w-full font-sans"
          initial="initial" // Initial position (y: 1000)
          transition={{ duration: 0.5, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: false, amount: 0.01 }} // Trigger when just a part of the element is in the viewport
          whileInView="inView" // Animate to y: 0 once the element is fully in the viewport
        >
          <TextHoverEffect text={siteConfig.name} />
        </motion.p>
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
