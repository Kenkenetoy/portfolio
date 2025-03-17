/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconPhone } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Button } from "@heroui/button";
import Input from "@heroui/Input";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import {
  cardVariants,
  containerVariants,
  moveleft,
  moveright,
  moveup,
  ringing,
} from "@/anim/variants";
export default function DocsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact | {siteConfig.name}</title>
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
        <div className="pt-24 mx-auto space-y-12 max-w-screen-2xl">
          <div className="flex">
            <div className="min-w-[80%] space-y-12">
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
                  Let&apos;s Connect{" "}
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
                        variants={ringing}
                        whileHover="hover"
                      >
                        <IconPhone
                          className="w-20 h-20 text-default-50"
                          stroke={1}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.h1>
                <h2 className="w-[75%] text-2xl">
                  Whether you&apos;re looking to collaborate on a project, need
                  a solution to a challenging problem, or just want to talk
                  tech, feel free to reach out. Together, we can turn ideas into
                  reality.
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Divider />
              </motion.div>

              <div className="mx-auto w-[95%]">
                <motion.div
                  animate="show"
                  className="flex flex-col gap-4"
                  initial="hidden"
                  variants={containerVariants}
                >
                  {["name", "email", "organization", "task", "message"].map(
                    (field, index) => (
                      <motion.div key={field} variants={cardVariants}>
                        <Input
                          isRequired
                          className="p-3 text-default-foreground"
                          errorMessage={`Please enter your ${field}`}
                          label={`What’s your ${field.replace("_", " ")}?`}
                          labelPlacement="outside"
                          name={field}
                          placeholder={`Enter your ${field}`}
                          size="lg"
                          type="text"
                        />
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Divider />
                        </motion.div>
                      </motion.div>
                    )
                  )}

                  {/* Animated Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-auto"
                  >
                    <Button
                      className="p-8 text-2xl"
                      color="default"
                      radius="full"
                      size="lg"
                      type="submit"
                      variant="ghost"
                    >
                      Send
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="flex flex-col items-center my-auto space-y-12 h-fit"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75, ease: "circOut" }}
              viewport={{ once: true, amount: 1 }}
            >
              <Image
                alt="Woman listening to music"
                draggable={false}
                radius="full"
                src={siteConfig.logo}
              />
              <motion.div
                className="space-y-12 h-fit w-fit"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="space-y-2 w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h1>CONTACT DETAILS</h1>
                  <p>{siteConfig.email.first}</p>
                </motion.div>

                <motion.div
                  className="space-y-4 w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h6 className="text-large">SOCIALS</h6>
                  <div className="z-10 flex flex-col gap-2">
                    {siteConfig.socials.map(({ link, icon: Icon, title }) => (
                      <motion.div
                        key={link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          className="gap-2"
                          color="foreground"
                          href={link}
                          target="_blank"
                        >
                          <Icon size={24} />
                          <span>{title}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
