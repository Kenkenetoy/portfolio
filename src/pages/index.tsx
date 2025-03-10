/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { Helmet } from "react-helmet-async";
import { Tabs, Tab } from "@heroui/tabs";

import { StickyScroll } from "@/components/sticky-scroll-reveal";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { ContainerScroll } from "@/components/container-scroll-animation";
import HeroSection from "@/components/hero";
import AnimatedTabs from "@/components/AnimatedTabPanels";

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
        <div className="h-screen bg-white">
          <HeroSection siteConfig={siteConfig} />
        </div>
        <div className="flex p-12 m-auto space-x-12 h-fit">
          <span className="space-y-4 z-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 ">
              My Stack
            </h2>
            <p className="text-gray-700 text-md dark:text-slate-300 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              esse qui inventore vel excepturi. Officia nesciunt optio possimus
              voluptate qui sapiente harum, et totam, consequatur unde officiis,
              neque saepe! Dolorum deleniti tempore numquam fugiat sint animi
              sunt, iste rerum quo at ea pariatur! Pariatur quibusdam dolor
              alias officiis! Recusandae error earum nihil quas iure quam.
            </p>
          </span>
          <span className="z-45" />
        </div>
        <AnimatedTabs />
        <div className="flex flex-col overflow-hidden">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-4xl font-semibold text-black dark:text-white">
                  Unleash the power of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Scroll Animations
                  </span>
                </h1>
              </>
            }
          >
            <Image
              alt="hero"
              className="object-cover object-left-top h-full mx-auto rounded-2xl"
              draggable={false}
              height={720}
              src={`/linear.webp`}
              width={1400}
            />
          </ContainerScroll>
        </div>
      </DefaultLayout>
    </>
  );
}
