/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Divider } from "@heroui/divider";
import {
  IconBrandReact,
  IconBrandLaravel,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandUnity,
  IconBrandFigma,
  IconBrandAdobeAfterEffect,
  IconBrandAdobePhotoshop,
  IconBrandBlender,
  IconBrandFramerMotion,
  IconBrandVite,
  IconLink,
} from "@tabler/icons-react";
import { Button } from "@heroui/button";
import React from "react";

import { siteConfig } from "@/config/site"; // Import siteConfig
import { cn } from "@/lib/utils";

const stackIcons: { [key: string]: JSX.Element } = {
  react: <IconBrandReact size={16} />,
  laravel: <IconBrandLaravel size={16} />,
  tailwind: <IconBrandTailwind size={16} />,
  unity: <IconBrandUnity size={16} />,
  figma: <IconBrandFigma size={16} />,
  aftereffects: <IconBrandAdobeAfterEffect size={16} />,
  photoshop: <IconBrandAdobePhotoshop size={16} />,
  blender: <IconBrandBlender size={16} />,
  framermotion: <IconBrandFramerMotion size={16} />,
  vite: <IconBrandVite size={16} />,
};

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
      <div className="relative flex flex-col w-1/2 mt-12 mb-48 space-y-32">
        {content.map((item, index) => (
          <div key={item.title + index} className="space-y-4 scroll-section">
            <div>
              <motion.h2
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-gray-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.h4
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-gray-900 dark:text-slate-100"
              >
                {item.type}
              </motion.h4>
            </div>

            <Divider className="my-4" />

            <motion.p
              animate={{ opacity: activeCard === index ? 1 : 0.3 }}
              className="text-gray-700 text-md dark:text-slate-300"
            >
              {item.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.p>

            <Divider className="my-4" />

            {item.stack.length > 0 && (
              <motion.div
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="flex flex-wrap gap-2"
              >
                {item.stack.map((tech, i) => {
                  const stackInfo = siteConfig.stack[tech]; // Get stack info

                  return stackIcons[tech] ? (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="text-sm font-bold">
                            {stackInfo?.title}
                          </div>
                          <div className="w-48 text-tiny">
                            {stackInfo?.description}
                          </div>
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
                        {stackIcons[tech]}
                        <span className="font-semibold text-tiny">
                          {stackInfo?.title}
                        </span>
                      </Button>
                    </Tooltip>
                  ) : (
                    <Tooltip
                      key={i}
                      content={
                        <div className="px-1 py-2">
                          <div className="font-bold text-small">
                            {stackInfo?.title}
                          </div>
                          <div className="w-48 text-tiny">
                            {stackInfo?.description}
                          </div>
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
                        <span className="font-semibold text-tiny">
                          {stackInfo?.title}
                        </span>
                      </Button>
                    </Tooltip>
                  );
                })}
              </motion.div>
            )}
          </div>
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

          <div className="flex justify-center p-2 space-x-4">
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
                          src={`https://api.microlink.io/?url=${encodeURIComponent(
                            content[activeCard].url.demo
                          )}&screenshot=true&meta=false&embed=screenshot.url`}
                          height={200}
                          // src="public\228041565_1204885213317442_2861452606248897561_n.webp"
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
                size="md"
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
                size="md"
                variant="shadow"
                onPress={() =>
                  window.open(content[activeCard].url?.github, "_blank")
                }
              >
                <IconBrandGithub size={16} />
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
