/* eslint-disable prettier/prettier */
import { IconDownload, IconLink, IconMail } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { motion } from "motion/react";

import { DraggableMockupPhone } from "./DraggableMockupPhone";
import { GlareCard } from "./glare-card";
import { ShareModal } from "./modal-for-links";
import { FloatingDock } from "./floating-dock";

import { siteConfig } from "@/config/site"; // Import siteConfig directly
import { movedown, moveright, moverightfar, moveup } from "@/anim/variants";

const links = siteConfig.socials.map((social) => ({
  title: social.title,
  icon: <social.icon className="w-full h-full text-default-foreground" />,
  href: social.link,
}));

export const HeroSection = ({ the }: { the: boolean }) => {
  return (
    <div className="h-full w-full bg-background dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 flex items-center justify-center bg-background"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
        }}
      />

      <div className="z-10 flex flex-col justify-between w-full h-full">
        {/* Top Section */}
        {/* <motion.div
          className="flex justify-center w-full h-24 transition-colors ease-in-out border-default-foreground border-b-1 duration-250"
          initial="initial"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={movedown}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          <div className="grid items-center w-full grid-cols-3 px-4 font-medium">
            <p className="w-32">{"placeholder"}</p>
            <p className="w-32 justify-self-center">{"placeholder"}</p>
            <p className="w-32 justify-self-end">{"placeholder"}</p>
          </div>
        </motion.div> */}

        {/* Middle Section */}
        <motion.div
          className="flex items-center justify-center h-full gap-12 font-bold text-center"
          initial="initial"
          transition={{ duration: 0.75, ease: "easeInOut" }}
          variants={moveright}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          <div className="relative group">
            <div className="relative z-50">
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

          <motion.section
            className="flex flex-col justify-center space-y-12 max-w-[36rem]"
            initial="initial"
            transition={{ duration: 1.5, ease: "easeInOut" }}
            variants={moverightfar}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <div className="justify-center inline-block max-w-3xl space-y-8 text-center">
              <div className="space-y-2">
                <p className="mx-auto text-xl font-normal ">
                  {`/* Hi, I am ${siteConfig.name} based in ${the ? "the" : null}
                  ${siteConfig.location.country},`}
                </p>
                <motion.h1
                  className="flex items-start justify-center font-serif font-medium text-default-foreground"
                  initial="initial"
                  transition={{ duration: 1.75, ease: "circOut" }}
                  variants={moverightfar}
                  viewport={{ once: true, amount: 0.1 }}
                  whileInView="inView"
                >
                  <p className="translate-y-10 text-nowrap">I&apos;m a</p>
                  <h1 className="uppercase text-start text-8xl">
                    {siteConfig.hero_big}
                  </h1>
                </motion.h1>
                <motion.p
                  className="max-w-md mx-auto text-xl font-normal"
                  initial="initial"
                  transition={{ duration: 1.75, ease: "easeInOut" }}
                  variants={moverightfar}
                  viewport={{ once: true, amount: 0.1 }}
                  whileInView="inView"
                >
                  {`${siteConfig.hero_small} */`}
                </motion.p>
                <motion.p
                  className="max-w-md mx-auto text-xl font-normal text-primary"
                  initial="initial"
                  transition={{ duration: 1.75, ease: "easeInOut" }}
                  variants={moverightfar}
                  viewport={{ once: true, amount: 0.1 }}
                  whileInView="inView"
                >
                  This site is currently under construction. Some media, links,
                  and pages may be unavailable. But feel free to look around!
                </motion.p>
              </div>

              {/* Buttons */}
              <motion.div
                className="flex gap-4 mx-auto w-fit"
                initial="initial"
                transition={{ duration: 1.75, ease: "circOut" }}
                variants={movedown}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="inView"
              >
                <ShareModal
                  className="gap-2"
                  color="primary"
                  radius="full"
                  size="lg"
                  variant="shadow"
                >
                  <span className="text-lg ">Contact</span>
                  <span>
                    <IconLink />
                  </span>
                </ShareModal>

                <Button
                  radius="full"
                  size="lg"
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
                  <span className="text-lg ">Resume</span>
                  <span>
                    <IconDownload />
                  </span>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex justify-center w-full h-24 transition-colors ease-in-out border-default-foreground border-t-1 duration-250"
          initial="initial"
          transition={{ duration: 1, ease: "easeInOut" }}
          variants={moveup}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          <div className="grid items-center w-full grid-cols-3 px-4 font-medium">
            {/* Left Section */}
            <Button
              as={Link}
              className="items-center gap-2 p-0 pl-4 h-fit w-fit"
              radius="full"
              size="lg"
              variant="ghost"
              href="/blog"
            >
              <span className="text-lg ">Contact</span>
              <div className="p-3 transition-colors ease-in-out rounded-full bg-default-foreground text-default">
                <IconMail />
              </div>
            </Button>

            {/* Center Section */}
            <FloatingDock items={links} mobileClassName="translate-y-20" />

            {/* Right Section */}
            <div className="flex items-center gap-2 pr-4 transition-colors ease-in-out rounded-full justify-self-end border-default duration-250 border-1">
              <div className="p-3 transition-colors ease-in-out rounded-full bg-default-foreground text-default">
                <IconMail />
              </div>
              <Tooltip
                content={
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}` ? (
                    <Link
                      isExternal
                      showAnchorIcon
                      anchorIcon={<IconLink size={20} />}
                      className="flex flex-col p-2 space-y-2 text-xs"
                      color="foreground"
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
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
                            `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`
                          )}&screenshot=true&meta=false&embed=screenshot.url`}
                          width={200}
                        />
                      </span>
                      <span className="w-48 overflow-hidden text-ellipsis">
                        {`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
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
                  className="gap-2 w-fit"
                  color="foreground"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
                  target="_blank"
                >
                  {siteConfig.email.second}
                </Link>
              </Tooltip>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
