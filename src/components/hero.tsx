/* eslint-disable prettier/prettier */
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconDownload,
  IconLink,
} from "@tabler/icons-react";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";

import { DraggableMockupPhone } from "./DraggableMockupPhone";
import { GlareCard } from "./glare-card";
import { ShareModal } from "./modal-for-links";

interface HeroSectionProps {
  siteConfig: {
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
  return (
    <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="z-10 flex justify-center gap-12 font-bold text-center">
        <GlareCard>
          <DraggableMockupPhone />
        </GlareCard>

        <section className="flex flex-col justify-center space-y-12 ">
          <div className="justify-center inline-block max-w-2xl space-y-8 text-center">
            <div className="space-y-2">
              <p className="text-lg font-normal">
                Hi, my name is {siteConfig.name} based in {siteConfig.location}
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

          <div className="space-x-6">
            <Tooltip
              content={
                <TooltipContent
                  link={siteConfig.socials.linkedin.link}
                  title={siteConfig.socials.linkedin.title}
                />
              }
            >
              <Button
                isIconOnly
                aria-label="LinkedIn"
                color="primary"
                variant="faded"
              >
                <IconBrandLinkedin />
              </Button>
            </Tooltip>

            <Tooltip
              content={
                <TooltipContent
                  link={siteConfig.socials.github.link}
                  title={siteConfig.socials.github.title}
                />
              }
            >
              <Button
                isIconOnly
                aria-label="GitHub"
                color="default"
                variant="faded"
              >
                <IconBrandGithub />
              </Button>
            </Tooltip>

            <Tooltip
              content={
                <TooltipContent
                  link={siteConfig.socials.leetcode.link}
                  title={siteConfig.socials.leetcode.title}
                />
              }
            >
              <Button
                isIconOnly
                aria-label="LeetCode"
                color="warning"
                variant="faded"
              >
                <IconBrandLeetcode />
              </Button>
            </Tooltip>
          </div>
        </section>
      </div>
    </div>
  );
};

const TooltipContent: React.FC<{ title: string; link: string }> = ({
  title,
  link,
}) => (
  <div className="px-1 py-2">
    <div className="font-bold text-small">{title}</div>
    <div className="text-tiny">This opens another tab to {link}</div>
  </div>
);

export default HeroSection;
