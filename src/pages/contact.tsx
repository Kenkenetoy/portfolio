/* eslint-disable prettier/prettier */
import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconPhone } from "@tabler/icons-react";
import { motion } from "motion/react";
import { Button } from "@heroui/button";
import { Textarea, Input } from "@heroui/input";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import { moveright, moveup, ringing } from "@/anim/variants";

export default function DocsPage() {
  const [lastSubmission, setLastSubmission] = useState<number>(0);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const isSpam = (message: string) => {
    const spamWords = ["free money", "viagra", "lottery", "click here"];

    return spamWords.some((word) => message.toLowerCase().includes(word));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    if (honeypotRef.current?.value) {
      console.warn("Bot detected - ignoring submission.");

      return;
    }

    const now = Date.now();

    if (now - lastSubmission < 5000) {
      // 5-second cooldown
      addToast({
        title: "Slow Down!",
        description: "Please wait before submitting again.",
        color: "warning",
      });

      return;
    }
    setLastSubmission(now);

    if (isSpam(data.message)) {
      addToast({
        title: "Spam Detected!",
        description: "Your message contains spam-like content.",
        color: "danger",
      });

      return;
    }

    try {
      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        data, // Sent data
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public Key
      );

      addToast({
        title: "Success!",
        description: "Your message has been sent successfully.",
        color: "success",
      });
      form.reset();
    } catch (error) {
      addToast({
        title: `Error: ${error}`,
        description: "Failed to send message.",
        color: "danger",
      });
    }
  };

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
        <div className="w-screen px-4 pt-24 mx-auto space-y-12 md:space-y-24 max-w-screen-2xl">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="space-y-12">
              <motion.div
                className="space-y-8"
                initial="initial"
                transition={{ duration: 0.25, ease: "circOut" }}
                variants={moveup}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="inView"
              >
                <motion.h1
                  className="flex items-center gap-2 mx-auto font-serif text-4xl sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-fit lg:mx-0"
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
                    variants={moveright}
                    viewport={{ once: true, amount: 0.1 }}
                    whileInView="inView"
                  >
                    <motion.div className="p-2 transition-colors ease-in-out rounded-full w-fit bg-default-foreground duration-250">
                      <motion.div
                        initial="initial"
                        variants={ringing}
                        whileHover="hover"
                      >
                        <IconPhone
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-default-50"
                          stroke={1}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.h1>
                <h2 className="w-[90%] text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  Whether you&apos;re looking to collaborate on a project, need
                  a solution to a challenging problem, or just want to talk
                  tech, feel free to reach out. Together, we can turn ideas into
                  reality.
                </h2>
              </motion.div>
              <motion.div
                className="max-w-7xl"
                initial="initial"
                transition={{ duration: 0.75, ease: "circOut" }}
                variants={moveright}
                viewport={{ once: true, amount: 0.1 }}
                whileInView="inView"
              >
                <Form className="w-full space-y-8" onSubmit={onSubmit}>
                  <Divider />
                  <input
                    ref={honeypotRef}
                    className="hidden"
                    name="honeypot"
                    type="text"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid name"
                    label="What’s your name?"
                    labelPlacement="inside"
                    name="name"
                    size="lg"
                    type="text"
                    variant="underlined"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid email"
                    label="What’s your email?"
                    labelPlacement="inside"
                    name="email"
                    size="lg"
                    type="email"
                    variant="underlined"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid organization"
                    label="What is the name of your organization?"
                    labelPlacement="inside"
                    name="organization"
                    size="lg"
                    type="text"
                    variant="underlined"
                  />
                  <Input
                    isRequired
                    errorMessage="Please enter a valid task"
                    label="What specific area or task do you need help with?"
                    labelPlacement="inside"
                    name="task"
                    size="lg"
                    type="text"
                    variant="underlined"
                  />
                  <Textarea
                    isClearable
                    isRequired
                    errorMessage="Please enter a valid message"
                    label="Your message"
                    labelPlacement="inside"
                    name="message"
                    size="lg"
                    type="text"
                    variant="underlined"
                  />
                  <Button
                    className="px-8 py-2 mx-auto my-auto text-base md:px-10 lg:px-12 md:py-4 lg:py-6 xl:py-8 md:text-lg lg:text-xl xl:text-2xl lg:mr-0 lg:ml-auto w-fit"
                    radius="full"
                    size="lg"
                    type="submit"
                    variant="ghost"
                  >
                    Submit
                  </Button>
                </Form>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              className="hidden md:flex flex-col items-center my-auto space-y-8 sm:space-y-10 md:space-y-12 h-fit w-[90%] sm:w-80 md:w-96"
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.75, ease: "circOut" }}
              viewport={{ once: true, amount: 0.1 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Image
                alt={`${siteConfig.name}'s Profile Picture`}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
                draggable={false}
                radius="full"
                src={siteConfig.logo}
              />

              <motion.div
                className="space-y-8 sm:space-y-10 md:space-y-12 h-fit w-fit"
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.75 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <motion.div
                  className="space-y-2 w-fit text-default-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h1 className="text-lg sm:text-xl md:text-2xl">
                    CONTACT DETAILS
                  </h1>
                  <div className="flex flex-col text-sm sm:text-base md:text-lg">
                    {Object.values(siteConfig.email).map((email, index) => (
                      <p key={index}>{email}</p>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-4 w-fit"
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <h6 className="text-sm sm:text-basea md:text-lg">SOCIALS</h6>
                  <div className="z-10 flex flex-col gap-1 md:gap-2">
                    {siteConfig.socials.map(({ link, icon: Icon, title }) => (
                      <motion.div
                        key={link}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          className="flex items-center gap-2 text-xs sm:text-sm md:text-base"
                          color="foreground"
                          href={link}
                          target="_blank"
                        >
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
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
