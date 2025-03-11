/* eslint-disable prettier/prettier */
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconDownload,
  IconLink,
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";
import { Button } from "@heroui/button";

import { DraggableMockupPhone } from "./DraggableMockupPhone";
import { GlareCard } from "./glare-card";
import { ShareModal } from "./modal-for-links";
import { FloatingDock } from "./floating-dock";
import { siteConfig } from "@/config/site";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

interface HeroSectionProps {
  siteConfig: {
    email: string;
    name: string;
    description: string;
    location: string;
    socials: {
      linkedin: { title: string; link: string };
      github: { title: string; link: string };
      leetcode: { title: string; link: string };
    };
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ siteConfig }) => {
  const links = [
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="w-full h-full text-default-foreground" />
      ),
      href: siteConfig.socials.leetcode.link,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-default-foreground " />
      ),
      href: siteConfig.socials.github.link,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-default-foreground" />
      ),
      href: siteConfig.socials.github.link,
    },
  ];

  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col justify-center items-center ">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="z-10 flex flex-col justify-between w-full h-full">
        {/* top */}
        <div className="flex items-center justify-center h-full font-bold text-center">
          <div>
            <GlareCard>
              <DraggableMockupPhone />
            </GlareCard>
          </div>

          <section className="flex flex-col justify-center space-y-12">
            <div className="justify-center inline-block max-w-2xl space-y-8 text-center">
              <div className="space-y-2">
                <p className="text-lg font-normal">
                  Hi, my name is {siteConfig.name} based in{" "}
                  {siteConfig.location}
                </p>
                <h1 className="text-6xl capitalize text-neutral-900 dark:text-white">
                  {siteConfig.description}
                </h1>
              </div>

              <div className="flex gap-4 mx-auto w-fit">
                <ShareModal
                  className="gap-2"
                  color="secondary"
                  radius="full"
                  size="lg"
                  variant="shadow"
                >
                  <span className="text-lg font-semibold">Contact</span>
                  <span>
                    <IconLink />
                  </span>
                </ShareModal>

                <Button
                  radius="full"
                  size="lg"
                  variant="shadow"
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
                  <span className="text-lg font-semibold">Download</span>
                  <span>
                    <IconDownload />
                  </span>
                </Button>
              </div>
            </div>
          </section>
        </div>
        {/* bottom */}
        <div className="flex flex-col items-center justify-center w-full h-24 transition-colors ease-in-out border-default-foreground border-t-1 duration-250">
          <div className="grid items-center w-full grid-cols-3 px-4 font-medium place-items-end">
            <p className="justify-self-start">// Design, Code, Execute</p>
            <FloatingDock
              mobileClassName="translate-y-20" // only for demo, remove for production
              items={links}
            />
            <div className="flex items-center gap-2 pr-4 transition-colors ease-in-out rounded-full border-default duration-250 border-1">
              <div className="p-3 rounded-full bg-default">
                <IconMail />
              </div>
              <Tooltip
                content={
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}` ? (
                    <Link
                      isExternal
                      showAnchorIcon
                      anchorIcon={<IconLink size={20} />}
                      className="flex flex-col p-2 space-y-2"
                      color="foreground"
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                      isBlock={true}
                      size="sm"
                      target="_blank"
                    >
                      <span>
                        <Image
                          alt={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
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
                  className="gap-2 w-fit"
                  color="foreground"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                  target="_blank"
                >
                  {siteConfig.email.first}
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
