import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconCodeCircle2 } from "@tabler/icons-react";
import { motion } from "motion/react";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import { moveleft, moveright, moveup } from "@/anim/variants";

export default function DocsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog | {siteConfig.name}</title>
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
          className="space-y-8 max-w-[110rem] mx-auto"
          initial="initial"
          transition={{ duration: 0.25, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          <motion.h1
            className="font-serif text-8xl"
            initial="initial"
            transition={{ duration: 0.75, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="inView"
          >
            My Projects
          </motion.h1>
          <motion.div
            className="relative flex items-center w-full"
            initial="initial"
            transition={{ duration: 1.1, ease: "circOut" }}
            variants={moveleft}
            viewport={{ once: true, amount: 1 }}
            whileInView="inView"
          >
            <Divider className="flex-1" />
            <motion.div className="absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[50%] duration-250">
              <IconCodeCircle2
                className="w-20 h-20 text-default-50"
                stroke={1}
              />
            </motion.div>
          </motion.div>
          <div className="relative flex flex-col "></div>
          <Divider />
        </motion.div>
        <div className="mx-auto max-w-screen-2xl">
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
