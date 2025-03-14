import { Helmet } from "react-helmet-async";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import AnimatedTabs from "@/components/AnimatedTabPanels";
import { Footer } from "@/components/footer";

export default function DocsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>About | {siteConfig.name}</title>
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
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="justify-center inline-block max-w-lg text-center">
            <h1 className={title()}>About</h1>
          </div>
        </section>
        <AnimatedTabs />
        <Footer />
      </DefaultLayout>
    </>
  );
}
