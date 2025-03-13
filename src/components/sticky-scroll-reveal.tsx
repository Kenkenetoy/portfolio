/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Divider } from "@heroui/divider";
import { IconBrandGithub, IconLink } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import React from "react";

import { siteConfig } from "@/config/site"; // Import siteConfig
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    type: string;
    description: string;
    imageSrc: string;
    stack: string[];
    url?: { demo?: string; github?: string };
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const sections = ref.current.querySelectorAll(".scroll-section");
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - window.innerHeight / 3);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCard(closestIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!content[activeCard]) return;

    const img = document.createElement("img");

    img.src = content[activeCard].imageSrc;
  }, [activeCard]);

  return (
    <motion.div ref={ref} className="relative flex justify-center space-x-12 ">
      {/* Left Content */}
      <div className="relative flex flex-col w-2/3 mb-4 space-y-32">
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            animate={{
              scale: activeCard === index ? 1 : 0.95,
              opacity: activeCard === index ? 1 : 0.3,
              originX: 1, // Ensures animation happens from right to left
            }}
            className="space-y-8 scale-100 scroll-section"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="space-y-2">
              <motion.h2 className="text-4xl text-gray-900 dark:text-slate-100">
                {item.title}
              </motion.h2>
              <motion.h4 className="text-xl text-gray-900 dark:text-slate-100">
                {item.type}
              </motion.h4>
            </div>

            <Divider className="my-4" />

            <motion.p className="text-lg text-gray-700 dark:text-slate-300">
              {item.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.p>

            <Divider className="my-4" />

            {item.stack.length > 0 && (
              <motion.div className="flex flex-wrap gap-2">
                {item.stack.map((tech, i) => {
                  const stackInfo =
                    siteConfig.stack[tech as keyof typeof siteConfig.stack];
                  const { icon, title, description } = stackInfo || {};

                  return icon ? (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-lg font-bold">{title}</div>
                          <div className="w-48 text-sm">{description}</div>
                        </div>
                      }
                      isDisabled={activeCard !== index}
                    >
                      <Button
                        color="default"
                        isDisabled={activeCard !== index}
                        radius="full"
                        size="md"
                        variant="ghost"
                      >
                        {React.createElement(icon)}
                        {/* No need for React.createElement, just use the JSX component */}
                        <span className="text-sm font-semibold">{title}</span>
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="font-bold text-small">{title}</div>
                          <div className="w-48 text-tiny">{description}</div>
                        </div>
                      }
                      isDisabled={activeCard !== index}
                    >
                      <Button
                        color="default"
                        isDisabled={activeCard !== index}
                        radius="full"
                        size="sm"
                        variant="ghost"
                      >
                        <span className="font-semibold text-tiny">{title}</span>
                      </Button>
                    </Tooltip>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div
        className={cn(
          "hidden lg:block h-full w-1/2 rounded-md sticky top-[33vh]",
          contentClassName
        )}
      >
        <motion.div
          key={activeCard}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="space-y-4"
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Image
            isBlurred
            alt={content[activeCard].title}
            className="object-cover w-full aspect-[4/3]" // Adjust aspect ratio as needed
            src={content[activeCard].imageSrc}
          />

          <div className="flex justify-center w-full p-2 space-x-4">
            <Tooltip
              content={
                content[activeCard].url?.demo ? (
                  <>
                    <Link
                      isExternal
                      showAnchorIcon
                      anchorIcon={<IconLink size={20} />}
                      className="flex flex-col p-2 space-y-2"
                      color="foreground"
                      href={content?.[activeCard]?.url?.demo}
                      isBlock={true}
                      size="sm"
                      target="_blank"
                    >
                      <span>
                        <Image
                          alt={content?.[activeCard]?.url?.demo}
                          className="z-0 object-cover w-full h-full"
                          height={200}
                          src={`https://api.microlink.io/?url=${encodeURIComponent(
                            content[activeCard].url.demo
                          )}&screenshot=true&meta=false&embed=screenshot.url`}
                          width={200}
                        />
                      </span>

                      <span className="w-48 overflow-hidden text-ellipsis">
                        {content[activeCard].url?.demo}
                      </span>
                    </Link>
                  </>
                ) : (
                  "No Preview Available"
                )
              }
              isDisabled={!content[activeCard].url?.demo}
              shadow="md"
              showArrow={true}
            >
              <Button
                color="secondary"
                isDisabled={!content[activeCard].url?.demo}
                radius="sm"
                size="lg"
                variant="shadow"
                onPress={() =>
                  content[activeCard].url?.demo &&
                  window.open(content[activeCard].url.demo, "_blank")
                }
              >
                <IconLink />
                Site Link
              </Button>
            </Tooltip>
            {content[activeCard].url?.github && (
              <Button
                isIconOnly
                aria-label="GitHub"
                color="default"
                size="lg"
                variant="shadow"
                onPress={() =>
                  window.open(content[activeCard].url?.github, "_blank")
                }
              >
                <IconBrandGithub size={20} />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
