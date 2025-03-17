/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconMoodSmileBeam } from "@tabler/icons-react";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import { Footer } from "@/components/footer";
import {
  moveup,
  moveright,
  moveleft,
  rotateBounce,
  movedown,
} from "@/anim/variants";

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
        <div className="pt-24 mx-auto max-w-screen-2xl ">
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.25, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <div className="space-y-4 font-serif">
              <motion.h1
                className="flex items-center gap-8 text-7xl"
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={movedown}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="inView"
              >
                Hello I am {siteConfig.name}{" "}
                <motion.div
                  initial="initial"
                  transition={{ duration: 0.75, ease: "circOut" }}
                  variants={moveleft}
                  viewport={{ once: true, amount: 1 }}
                  whileInView="inView"
                >
                  <motion.div className="p-2 transition-colors ease-in-out rounded-full w-fit bg-default-foreground duration-250">
                    <motion.div
                      initial="initial"
                      transition={rotateBounce.transition}
                      variants={rotateBounce}
                      whileHover="hover"
                    >
                      <IconMoodSmileBeam
                        className="w-20 h-20 text-default-50"
                        stroke={1}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.h1>
              <motion.h2
                className="text-4xl "
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.2 }}
                whileInView="inView"
              >
                {siteConfig.hero_small}
              </motion.h2>
            </div>

            <Divider />

            <div className="font-sans">
              <h3 className="max-w-2xl text-2xl">
                As a Software Engineer, I excel in building scalable
                applications, enhancing user experiences, and streamlining
                development processes.
              </h3>
            </div>
          </motion.div>
          <div className="mx-auto w-[95%]" />

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
