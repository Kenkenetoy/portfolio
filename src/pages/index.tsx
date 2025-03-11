/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero";
import { Divider } from "@heroui/divider";
import { WobbleCardComponent } from "@/components/wobble-card";
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
          <HeroSection siteConfig={siteConfig} />
        </div>
        <div className="flex flex-col gap-12 w-[80vw] m-auto text-3xl">
          <div className="flex justify-between">
            <p className="w-1/2">
              Building scalable and performant applications with Laravel, React,
              and WebGPU. I blend backend logic with interactive frontends,
              shaping the future of digital experiences.
            </p>
            <p className="text-sm w-96">
              My expertise in full-stack development, 3D visualization, and
              interactive web design sets me apart in the tech industry.
            </p>
          </div>
          <div>
            <p className="text-4xl font-medium w-96 text-secondary">
              Engineering Scalable Systems, Crafting Immersive Experiences
            </p>
          </div>
          <Divider />
          <WobbleCardComponent />
        </div>
      </DefaultLayout>
    </>
  );
}
