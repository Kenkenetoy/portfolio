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

const scaleVariants = {
  // When the element is in view, scale to 1
  initial: { scale: 1 },
  // When the element is in view, scale to 1
  inView: { scale: 1 },
  // When the element is out of view or farther, scale down
  outOfView: { scale: 0.9 },
};

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
        <motion.div
          animate="inView"
          className="h-screen"
          initial="initial"
          transition={{ duration: 2, ease: "easeInOut" }}
          variants={scaleVariants}
          viewport={{ amount: 0.2 }} // Control the trigger when entering/leaving the viewport
          whileInView="inView"
        >
          <HeroSection />
        </motion.div>
        <div className="flex flex-col gap-12 mx-auto text-3xl max-w-screen-2xl">
          <motion.div
            className="flex justify-between"
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <p className="w-1/2">
              Building scalable and performant applications with Laravel, React,
              and WebGPU. I blend backend logic with interactive frontends,
              shaping the future of digital experiences.
            </p>
            <p className="text-sm w-96">
              My expertise in full-stack development, 3D visualization, and
              interactive web design sets me apart in the tech industry.
            </p>
          </motion.div>
          <div>
            <p className="text-4xl font-medium w-96 text-secondary">
              Engineering Scalable Systems, Crafting Immersive Experiences
            </p>
          </div>
          <Divider />
          <WobbleCardComponent />
          <div className="space-y-8">
            <h1 className="text-6xl">My Projects</h1>
            <Divider />
            <div className="mx-auto max-w-[90rem]">
              <StickyScroll content={siteConfig.contents} />
            </div>
            <Divider />
          </div>
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
