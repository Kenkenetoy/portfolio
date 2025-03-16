import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconCodeCircle2 } from "@tabler/icons-react";
import { motion } from "motion/react";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import { moveleft, moveright, moveup, rotateBounce } from "@/anim/variants";
import AlternatingCards from "@/components/alternating-cards";

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
        <div className="pt-24 mx-auto max-w-screen-2xl">
          <motion.div
            className="space-y-8"
            initial="initial"
            transition={{ duration: 0.25, ease: "circOut" }}
            variants={moveup}
            viewport={{ once: true, amount: 0.1 }}
            whileInView="inView"
          >
            <motion.h1
              className="flex gap-12 font-serif text-8xl"
              initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveright}
              viewport={{ once: true, amount: 0.2 }}
              whileInView="inView"
            >
              My Projects{" "}
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
                    <IconCodeCircle2
                      className="w-20 h-20 text-default-50"
                      stroke={1}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.h1>

            <Divider />
          </motion.div>
          <div className="mx-auto w-[95%]">
            <AlternatingCards />
          </div>
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
