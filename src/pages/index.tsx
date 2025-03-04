import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLeetcode,
} from "@tabler/icons-react";

import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import { GlareCard } from "@/components/glare-card";
import DefaultLayout from "@/layouts/default";

import { siteConfig } from "@/config/site";

// import { FloatingDockDemo } from "@/components/floater";
export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute inset-0 z-10 flex items-center justify-around px-40 text-3xl font-bold text-center text-white pointer-events-none md:text-4xl lg:text-7xl">
          <GlareCard className="flex flex-col items-center justify-center pointer-events-auto">
            <DraggableMockupPhone />
          </GlareCard>
          <section className="flex flex-col items-center justify-center w-1/2 gap-4 py-8 space-y-12 md:py-10">
            <div className="justify-center inline-block max-w-xl text-center">
              <h1 className="text-5xl capitalize text-neutral-900 dark:text-white">
                a crafty Web Artisan and Tech Artist
              </h1>
            </div>
            <div className="space-x-6 pointer-events-auto">
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="font-bold text-small">
                      {siteConfig.socials.facebook.title}
                    </div>
                    <div className="text-tiny">
                      This opens another tab to
                      {siteConfig.socials.facebook.link}
                    </div>
                  </div>
                }
              >
                <Button
                  isIconOnly
                  aria-label="Like"
                  color="primary"
                  variant="faded"
                >
                  <IconBrandFacebook />
                </Button>
              </Tooltip>
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="font-bold text-small">
                      {siteConfig.socials.github.title}
                    </div>
                    <div className="text-tiny">
                      This opens another tab to {siteConfig.socials.github.link}
                    </div>
                  </div>
                }
              >
                <Button
                  isIconOnly
                  aria-label="Like"
                  color="default"
                  variant="faded"
                >
                  <IconBrandGithub />
                </Button>
              </Tooltip>
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="font-bold text-small">
                      {siteConfig.socials.leetcode.title}
                    </div>
                    <div className="text-tiny">
                      This opens another tab to{" "}
                      {siteConfig.socials.leetcode.link}
                    </div>
                  </div>
                }
              >
                <Button
                  isIconOnly
                  aria-label="Like"
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
    </DefaultLayout>
  );
}
