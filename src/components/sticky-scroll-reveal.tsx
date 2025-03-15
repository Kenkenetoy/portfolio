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

const cardAnimation = (activeCard: number, index: number) => ({
  scale: activeCard === index ? 1 : 0.95,
  opacity: activeCard === index ? 1 : 0.3,
  originX: 1, // Ensures animation happens from right to left
});

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
      <div className="relative flex flex-col w-5/6 my-16 space-y-24">
        {content.map((item, index) => (
          <motion.div
            key={item.title + index}
            animate={cardAnimation(activeCard, index)}
            className="space-y-8 scale-100 scroll-section"
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="flex justify-between">
              <motion.h2 className="font-serif text-5xl text-default-foreground">
                {item.title}
              </motion.h2>
              <div className="w-96">
                <motion.h4 className="text-lg text-default-foreground">
                  {item.type}
                </motion.h4>

                {item.stack.map((tech, i) => {
                  const stackInfo =
                    siteConfig.stack[tech as keyof typeof siteConfig.stack];

                  if (!stackInfo) return null; // Skip if stackInfo is undefined

                  return (
                    <span key={i} className="text-xs ">
                      {stackInfo.title}
                      {i < item.stack.length - 1 && ", "}
                    </span>
                  );
                })}
              </div>
            </div>

            <Divider />

            <motion.p className="text-sm text-default-foreground">
              {item.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </motion.p>
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
            className="object-cover w-full aspect-[6/3]" // Adjust aspect ratio as needed
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
                radius="full"
                size="lg"
                variant="ghost"
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
                radius="full"
                size="lg"
                variant="ghost"
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
