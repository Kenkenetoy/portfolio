/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero";
import { WobbleCardComponent } from "@/components/wobble-card";
import { Footer } from "@/components/footer";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

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
        <div className="h-screen">
          <HeroSection />
        </div>
        <div className="flex flex-col gap-24 mx-auto text-3xl max-w-screen-2xl">
          <motion.div
            className="flex justify-between"
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <p className="w-1/2">
              I build fast, scalable apps using Laravel, React, and
              WebGPU—seamlessly combining backend power with interactive,
              immersive frontends.
            </p>
            <p className="text-sm w-96">
              My expertise in full-stack development, 3D visualization, and
              interactive web design sets me apart in the tech industry.
            </p>
          </motion.div>
          <Divider />
          <div>
            <p className="text-4xl font-medium w-96 text-secondary">
              Engineering Scalable Systems
            </p>
          </div>
          <div className="space-y-8">
            <h1 className="text-6xl">What I Do</h1>
            <Divider />
            <div className="flex h-fit">
              <WobbleCardComponent />
            </div>
          </div>
          <div className="space-y-8">
            <h1 className="font-serif text-6xl">My Projects</h1>
            <Divider />
            <div className="mx-auto max-w-[90rem]">
              <StickyScroll content={siteConfig.contents} />
            </div>
            <Divider />
          </div>
          <div>
            <div>
              MY TECH STACK My expertise spans a diverse range of technologies,
              enabling me to deliver comprehensive and cutting-edge solutions
              across various platforms.
            </div>

            <InfiniteMovingCards
              direction="right"
              items={Object.values(siteConfig.stack)}
              speed="normal"
              useDevicon={true}
            />
          </div>

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
