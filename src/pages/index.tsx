import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconLink,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Helmet } from "react-helmet-async";

import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { GlareCard } from "@/components/glare-card";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { ShareModal } from "@/components/modal-for-links";
export default function IndexPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Home | {siteConfig.name}</title>
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
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute  inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 z-10 flex items-center justify-around px-40 text-3xl font-bold text-center text-white md:text-4xl lg:text-7xl">
            <GlareCard className="flex flex-col items-center justify-center ">
              <DraggableMockupPhone />
            </GlareCard>
            <section className="flex flex-col items-center justify-center w-1/2 gap-4 py-8 space-y-12 md:py-10">
              <div className="justify-center inline-block max-w-xl text-center">
                <h1 className="text-5xl capitalize text-neutral-900 dark:text-white">
                  a crafty Web Artisan and Tech Artist
                </h1>
                <ShareModal
                  className="gap-2"
                  color="secondary"
                  radius="full"
                  size="lg"
                  variant="shadow"
                >
                  <span>
                    <IconLink />
                  </span>
                  <span className="text-lg font-semibold">Contact</span>
                </ShareModal>
              </div>
              <div className="space-x-6 ">
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-small">
                        {siteConfig.socials.linkedin.title}
                      </div>
                      <div className="text-tiny">
                        This opens another tab to
                        {siteConfig.socials.linkedin.link}
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
                    <IconBrandLinkedin />
                  </Button>
                </Tooltip>
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-small">
                        {siteConfig.socials.github.title}
                      </div>
                      <div className="text-tiny">
                        This opens another tab to{" "}
                        {siteConfig.socials.github.link}
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
        <StickyScroll content={siteConfig.contents} />
        <div className="p-96">p</div>
      </DefaultLayout>
    </>
  );
}
