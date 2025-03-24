/* eslint-disable prettier/prettier */
import { IconDownload, IconLink, IconMail } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

import { DraggableMockupPhone } from "./DraggableMockupPhone";
import { GlareCard } from "./glare-card";
import { FloatingDock } from "./floating-dock";

import { siteConfig } from "@/config/site"; // Import siteConfig directly
import { movedown, moveright, moveup, rotateBounce } from "@/anim/variants";

const links = siteConfig.socials.map((social) => ({
  title: social.title,
  icon: <social.icon className="w-full h-full text-default-foreground" />,
  href: social.link,
}));

export const HeroSection = () => {
  const [isIconOnly, setIsIconOnly] = useState(false);
  const [isPhoneMode, setPhoneMode] = useState<"sm" | "md" | "lg" | undefined>(
    undefined
  );

  useEffect(() => {
    const handleResize = () => {
      setIsIconOnly(window.innerWidth < 1020);
      setPhoneMode(window.innerWidth < 1020 ? "sm" : "lg");
    };

    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-full w-screen md:w-full bg-slateshit dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 flex items-center justify-center bg-slateshit "
        style={{
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
        }}
      />

      <div className="z-10 flex flex-col justify-between w-full h-full">
        <motion.div className="h-24" />

        {/* Middle Section */}
        <motion.div
          className="flex items-center justify-center h-full gap-12 py-24 font-bold text-center"
          initial="initial"
          transition={{ duration: 0.75, ease: "easeInOut" }}
          variants={moveright}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          {/* Phone, hidden on small devices */}
          <div className="relative hidden group lg:block">
            {/* Phone */}
            <div className="relative z-50 ">
              <GlareCard>
                <DraggableMockupPhone />
              </GlareCard>
            </div>

            {/* Tooltip with extended line */}
            <span className="flex flex-col z-30 absolute left-[-175px] top-1/2 bg-default-foreground text-default-50 text-sm p-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transition">
              <p>Swipe Down</p>
              <p className="text-xs font-light">#comming soon</p>
              {/* Line Extension */}
              <span className="absolute w-10 h-px bg-default-foreground left-full top-1/2" />
            </span>
          </div>
          {/* Text Block */}
          <motion.section
            className="flex flex-col justify-center space-y-4 lg:space-y-8 max-w-[40rem] p-4 md:p-0"
            initial="initial"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            {/* Hidden Image */}
            <motion.div
              className="block mx-auto lg:hidden w-fit"
              initial="initial"
              transition={{ duration: 1.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <Image
                alt={`${siteConfig.name}'s Profile Picture`}
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56"
                draggable={false}
                radius="full"
                shadow="md"
                src={siteConfig.logo}
              />
            </motion.div>

            <div className="space-y-2 lg:space-y-4">
              <div className="flex items-center gap-2 mx-auto lg:gap-4 w-fit">
                <motion.div
                  className="p-2 rounded-full sm:p-3 lg:p-4 w-fit h-fit bg-terracotta dark:bg-terracotta-foreground"
                  transition={rotateBounce.transition}
                  variants={rotateBounce}
                  whileHover="hover"
                >
                  <img
                    alt="Logo"
                    className="w-4 h-4 sm:w-6 sm:h-6 md:h-8 md:w-8 lg:w-12 lg:h-12"
                    src="/logo-onlyletter.svg"
                  />
                </motion.div>

                <p className="text-xs font-normal whitespace-pre-line text-start sm:text-sm md:text-lg lg:text-2xl ">
                  {` /* Hi, I am ${siteConfig.name} \n Aparece based in ${siteConfig.location.country}, `}
                </p>
              </div>

              <motion.h1
                className="flex flex-col justify-center gap-0 font-serif font-medium lg:items-start mg:gap-2 lg:gap-4 lg:flex-row text-default-foreground"
                initial="initial"
                transition={{ duration: 1.75, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="inView"
              >
                <p className="text-xs lg:translate-y-8 sm:text-sm md:text-lg lg:text-xl text-nowrap">
                  I&apos;m a
                </p>
                <h1 className="text-5xl font-semibold uppercase md:text-6xl lg:text-8xl lg:text-start">
                  {siteConfig.hero_big}
                </h1>
              </motion.h1>

              <motion.p
                className="w-[90%] max-w-xs mx-auto text-xs font-normal sm:max-w-md md:max-w-lg lg:max-w-2xl sm:text-sm md:text-lg lg:text-xl"
                initial="initial"
                transition={{ duration: 1.75, ease: "easeInOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="inView"
              >
                {`${siteConfig.hero_small} */`}
              </motion.p>

              {siteConfig.Devmode ? (
                <motion.p
                  className="max-w-md mx-auto text-xs font-normal sm:max-w-lg md:max-w-xl lg:max-w-2xl sm:text-sm md:text-lg lg:text-xl text-primary"
                  initial="initial"
                  transition={{ duration: 1.75, ease: "easeInOut" }}
                  variants={moveright}
                  viewport={{ once: true, amount: 0.1 }}
                  whileInView="inView"
                >
                  This site is currently under construction. Some media, links,
                  and pages may be unavailable. But feel free to look around!
                </motion.p>
              ) : null}
            </div>

            {/* Buttons */}
            <motion.div
              className="flex flex-row gap-4 mx-auto w-fit"
              initial="initial"
              transition={{ duration: 1.75, ease: "circOut" }}
              variants={movedown}
              viewport={{ once: true, amount: 0.1 }}
              whileInView="inView"
            >
              <Button
                as={Link}
                className="px-4 py-2 bg-terracotta text-terracotta-text hover:bg-terracotta/80 sm:px-6 sm:py-4 md:py-6 md:px-8 lg:px-10 lg:py-8"
                href={siteConfig.navItems.Contact.href}
                radius="full"
                variant="solid"
              >
                <span className="text-sm sm:text-lg">Contact</span>
                <span>
                  <IconLink />
                </span>
              </Button>

              <Button
                className="px-4 py-2 sm:px-6 sm:py-4 md:py-6 md:px-8 lg:px-10 lg:py-8"
                radius="full"
                variant="ghost"
                onPress={() => {
                  const link = document.createElement("a");

                  link.href =
                    "https://drive.google.com/uc?export=download&id=1IED6anEob_8QUZd1MjLJJanHRPIc8aV7";
                  link.target = "_blank";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <span className="text-sm sm:text-lg">Resume</span>
                <span>
                  <IconDownload />
                </span>
              </Button>
            </motion.div>
          </motion.section>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="grid items-center justify-center w-full h-24 grid-cols-3 px-4 font-medium transition-colors ease-in-out border-default-foreground border-t-1 duration-250"
          initial="initial"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={moveup}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          {/* Left Section */}
          <Button
            as={Link}
            className="items-center gap-2 p-0 pl-0 lg:pl-4 h-fit w-fit"
            href={siteConfig.navItems.Contact.href}
            isIconOnly={isIconOnly}
            radius="full"
            size={isPhoneMode}
            variant="ghost"
          >
            <span className="hidden text-lg lg:block">Contact</span>
            <div className="p-3 transition-colors ease-in-out rounded-full bg-default-foreground text-default">
              <IconMail />
            </div>
          </Button>

          {/* Center Section */}
          <FloatingDock items={links} />

          {/* Right Section */}
          <div className="items-center hidden gap-2 transition-colors ease-in-out rounded-full lg:flex lg:pr-4 justify-self-end border-default duration-250 border-1">
            <div className="p-3 transition-colors ease-in-out rounded-full bg-default-foreground text-default">
              <IconMail />
            </div>
            <Tooltip
              className="hidden lg:block"
              content={
                `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}` ? (
                  <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<IconLink size={20} />}
                    className="flex flex-col p-2 space-y-2 text-xs"
                    color="foreground"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                    isBlock={true}
                    size="sm"
                    target="_blank"
                  >
                    <span>
                      <Image
                        alt={`Email preview`}
                        className="z-0 object-cover w-full h-full"
                        height={200}
                        src={`https://api.microlink.io/?url=${encodeURIComponent(
                          `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`
                        )}&screenshot=true&meta=false&embed=screenshot.url`}
                        width={200}
                      />
                    </span>
                    <span className="w-48 overflow-hidden text-ellipsis">
                      {`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                    </span>
                  </Link>
                ) : (
                  "No Preview Available"
                )
              }
              shadow="md"
              showArrow={true}
            >
              <Link
                isExternal
                anchorIcon={<IconLink size={20} />}
                className="hidden gap-2 w-fit md:block text-default-foreground"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                target="_blank"
              >
                {siteConfig.email.first}
              </Link>
            </Tooltip>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
