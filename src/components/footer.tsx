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
        <motion.div
          className="h-40 footer sm:footer-horizontal"
          initial="initial"
          transition={{ duration: 0.25, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: true, amount: 0.3 }} // 👈 Fix viewport detection
          whileInView="inView"
        >
          <nav>
            <svg className="w-40 h-40 mx-auto" viewBox="25 25 175 175">
              <defs>
                <path
                  d="M 100,100 m -65,0 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0"
                  id="mediumCirclePath"
                />
              </defs>

              {/* Wrap text in a motion group (g) to fix shifting */}
              <motion.g
                animate={{ rotate: 360 }}
                transform="translate(100,100)" // Set rotation center
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
                    ● Where aesthetics & functionality meet ●
                  </textPath>
                </text>
              </motion.g>
            </svg>
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
        </motion.div>

        {/* Footer Branding */}
        <motion.p
          className="z-0 w-full font-sans"
          initial="initial"
          transition={{ duration: 0.5, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: false, amount: 0.01 }}
          whileInView="inView"
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
