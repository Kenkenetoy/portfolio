/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Tooltip } from "@heroui/tooltip";
import { Divider } from "@heroui/divider";
import { IconBrandGithub, IconDownload, IconLink } from "@tabler/icons-react";
import { Button } from "@heroui/button";

// import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const isLargeScreen = () => window.matchMedia("(min-width: 1024px)").matches;

const cardAnimation = (
  activeCard: number,
  index: number,
  enableAnimation: boolean
) => {
  if (!enableAnimation) {
    return { scale: 1, opacity: 1, originX: 1 };
  }

  return {
    scale: activeCard === index ? 1 : 0.95,
    opacity: activeCard === index ? 1 : 0.3,
    originX: 1,
  };
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    extra?: { directdownload: string; title: string; description: string };
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

  const [enableAnimation, setEnableAnimation] = useState(isLargeScreen());

  useEffect(() => {
    const handleResize = () => setEnableAnimation(isLargeScreen());

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <motion.div
      ref={ref}
      className="relative flex justify-center space-x-6 sm:space-x-12"
    >
      <div className="relative grid w-full grid-cols-1 gap-8 mb-0 sm:grid-cols-2 lg:flex-col lg:space-y-16 lg:flex lg:mb-24">
        {content.slice(0, 4).map((item, index) => (
          <motion.div
            key={item.title + index}
            animate={cardAnimation(activeCard, index, enableAnimation)}
            className="space-y-6 scale-100 sm:space-y-8 scroll-section"
            transition={
              enableAnimation
                ? { duration: 0.25, ease: "easeInOut" }
                : undefined
            }
          >
            <div className="flex justify-center py-4 rounded-md lg:hidden bg-default-50">
              <Image
                alt="Email preview"
                className="z-0 object-cover h-48 w-96 border-5 border-slate-800"
                src={item.imageSrc}
              />
            </div>

            <div className="block lg:hidden">
              <Divider />
            </div>
            {/* Left Content on mobile */}
            <div className="flex flex-col justify-between mb-6 mr-6 xl:flex-row md:w-full">
              <motion.h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-default-foreground max-w-[90%] sm:max-w-full">
                {item.title}
              </motion.h2>
              <div className="w-fit ">
                <motion.h4 className="text-base text-start xl:text-end sm:text-lg md:text-xl lg:text-xl text-default-foreground">
                  {item.type}
                </motion.h4>

                <div className="flex flex-wrap justify-start gap-1 md:gap-2 xl:justify-end">
                  {item.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium sm:text-sm text-default-foreground"
                    >
                      {tech}
                      {i < item.stack.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <Divider />
            </div>
            {/* Right Content on mobile */}
            <motion.p className="w-auto max-w-xs text-xs sm:w-full sm:text-sm md:text-base text-default-foreground sm:max-w-sm md:max-w-lg">
              {item.description.split("\n\n")[0]}
            </motion.p>

            <div className="flex justify-start w-full p-2 space-x-4 lg:hidden">
              <Button
                as={Link}
                className="bg-terracotta text-terracotta-text hover:bg-terracotta/80"
                href={content[activeCard]?.url?.demo ?? "#"}
                isDisabled={!content[activeCard].url?.demo}
                radius="full"
                size="lg"
                target="_blank"
                variant="solid"
              >
                <IconLink />
                <span className="text-sm sm:text-base md:text-base">
                  Site Link
                </span>
              </Button>
              {content[activeCard].url?.github && (
                <Button
                  isIconOnly
                  aria-label="GitHub"
                  as={Link}
                  color="default"
                  href={content[activeCard].url?.github}
                  radius="full"
                  size="lg"
                  target="_blank"
                  variant="ghost"
                >
                  <IconBrandGithub
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    size={16}
                  />
                </Button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className={cn(
          "hidden lg:block h-full min-w-fit w-auto xl:max-w-xl rounded-md sticky top-[33vh]",
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
            isZoomed
            alt={content[activeCard].title}
            className="object-cover w-full aspect-[6/3] max-w-sm sm:max-w-md md:max-w-lg" // Width limit
            src={content[activeCard].imageSrc}
          />

          <div className="flex justify-center w-full p-2 space-x-4">
            <Tooltip
              content={
                content[activeCard].url?.demo ? (
                  <Link
                    isExternal
                    showAnchorIcon
                    anchorIcon={<IconLink size={20} />}
                    className="flex flex-col p-2 space-y-2 text-xs"
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
                ) : (
                  "No Preview Available"
                )
              }
              isDisabled={!content[activeCard].url?.demo}
              shadow="md"
              showArrow={true}
            >
              <Button
                as={Link}
                className="bg-terracotta text-terracotta-text hover:bg-terracotta/80"
                href={content[activeCard]?.url?.demo ?? "#"}
                isDisabled={!content[activeCard].url?.demo}
                radius="full"
                size="lg"
                target="_blank"
                variant="solid"
              >
                <IconLink />
                Site Link
              </Button>
            </Tooltip>
            {content[activeCard].extra?.directdownload && (
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="font-bold text-small">
                      {content[activeCard].extra.title}
                    </div>
                    <div className="text-tiny">
                      {content[activeCard].extra.description}
                    </div>
                  </div>
                }
                showArrow={true}
              >
                <Button
                  aria-label="GitHub"
                  as={Link}
                  color="default"
                  href={content[activeCard].extra.directdownload}
                  radius="full"
                  size="lg"
                  target="_blank"
                  variant="ghost"
                >
                  Download <IconDownload size={20} />
                </Button>
              </Tooltip>
            )}
            {content[activeCard].url?.github && (
              <Button
                isIconOnly
                aria-label="GitHub"
                as={Link}
                color="default"
                href={content[activeCard].url?.github}
                radius="full"
                size="lg"
                target="_blank"
                variant="ghost"
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
