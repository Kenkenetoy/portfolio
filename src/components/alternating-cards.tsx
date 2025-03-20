/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react";
import { Image } from "@heroui/image";
import { motion } from "motion/react";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { IconBrandGithub, IconDownload, IconLink } from "@tabler/icons-react";
import { Tooltip } from "@heroui/tooltip";
import { Pagination, PaginationItemRenderProps } from "@heroui/pagination";
import clsx from "clsx";

import { siteConfig } from "@/config/site";

const ITEMS_PER_PAGE = 5; // Number of items per page

const AlternatingCards = () => {
  // Inside your component:
  const [currentPage, setCurrentPage] = useState(1);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // Calculate total pages
  const totalPages = Math.ceil(siteConfig.contents.length / ITEMS_PER_PAGE);

  // Slice the content based on pagination
  const paginatedContents = siteConfig.contents.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const renderItem = ({
    ref,
    key,
    value,
    isActive,
    className,
  }: PaginationItemRenderProps) => {
    return (
      <button
        key={key}
        ref={ref}
        className={clsx(
          className,
          isActive &&
            "bg-terracotta/90 dark:bg-terracotta/90 text-terracotta-text hover:bg-terracotta/80 dark:hover:bg-terracotta/80"
        )}
        onClick={() => {
          if (typeof value === "number") {
            setCurrentPage(value); // Only update if it's a number
          }
        }}
      >
        {value}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-12 py-10">
      {paginatedContents.map((item, index) => (
        <motion.div
          key={index}
          className={`border-1 border-default-50 px-4 py-8 rounded-3xl flex flex-col lg:flex-row items-center shadow-lg ${
            index % 2 === 0 ? "lg:flex-row-reverse" : ""
          } gap-6 md:gap-12`}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Image Side */}
          <div className="overflow-hidden rounded-lg shadow-md lg:max-w-[50%] h-fit w-fit">
            <Image
              isZoomed
              alt={item.title}
              className="object-cover w-full h-auto"
              src={item.imageSrc}
            />
          </div>

          {/* Text Side */}
          <div className="w-full space-y-4 lg:w-1/2">
            <div className="flex flex-col justify-between lg:flex-row">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-default-foreground">
                {item.title}
              </h2>
              <div>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-default-foreground">
                  {item.type}
                </p>
                <div className="flex gap-3">
                  {item.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="gap-4 text-xs font-medium sm:text-sm md:text-base text-default-foreground"
                    >
                      {tech}
                      {i < item.stack.length - 1 && ","}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <Divider />

            <p className="text-xs whitespace-pre-line sm:text-sm md:text-base text-default-foreground">
              {item.description}
            </p>

            <ul className="text-xs list-disc list-inside sm:text-sm md:text-base">
              {item.feature_list?.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}:</strong> {feature.description}
                </li>
              ))}
            </ul>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              <Tooltip
                content={
                  item.url.demo ? (
                    <Link
                      isExternal
                      showAnchorIcon
                      anchorIcon={<IconLink size={20} />}
                      className="flex flex-col p-2 space-y-2 text-[10px] sm:text-xs"
                      color="foreground"
                      href={item.url.demo}
                      isBlock={true}
                      size="sm"
                      target="_blank"
                    >
                      <span>
                        <Image
                          alt={item.url?.demo}
                          className="z-0 object-cover w-full h-full"
                          height={200}
                          src={`https://api.microlink.io/?url=${encodeURIComponent(
                            item.url?.demo
                          )}&screenshot=true&meta=false&embed=screenshot.url`}
                          width={200}
                        />
                      </span>
                      <span className="w-48 overflow-hidden text-ellipsis">
                        {item.url?.demo}
                      </span>
                    </Link>
                  ) : (
                    "No Preview Available"
                  )
                }
                isDisabled={!item.url?.demo}
                shadow="md"
                showArrow={true}
              >
                <Button
                  as={Link}
                  className="bg-terracotta text-terracotta-text hover:bg-terracotta/80"
                  href={item?.url?.demo ?? "#"}
                  isDisabled={!item.url?.demo}
                  radius="full"
                  size="lg"
                  target="_blank"
                  variant="solid"
                >
                  <IconLink />
                  Site Link
                </Button>
              </Tooltip>

              {item.extra?.directdownload?.trim() && (
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-tiny sm:text-xs">
                        {item.extra.title}
                      </div>
                      <div className="text-tiny">{item.extra.description}</div>
                    </div>
                  }
                  showArrow={true}
                >
                  <Button
                    as={Link}
                    className="hidden lg:flex"
                    href={item.extra.directdownload}
                    radius="full"
                    rel="noopener noreferrer"
                    size="lg"
                    target="_blank"
                    variant="solid"
                  >
                    Download <IconDownload />
                  </Button>
                </Tooltip>
              )}

              {item.url.github && (
                <Button
                  as={Link}
                  href={item.url.github}
                  radius="full"
                  rel="noopener noreferrer"
                  size="lg"
                  target="_blank"
                  variant="solid"
                >
                  GitHub <IconBrandGithub />
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Pagination Controls */}
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center gap-4">
          <Button
            className="bg-terracotta text-terracotta-text hover:bg-terracotta/80"
            radius="full"
            size="md"
            variant="solid"
            onPress={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </Button>
          <Pagination
            disableCursorAnimation
            className="gap-2"
            page={currentPage}
            radius="full"
            renderItem={renderItem}
            total={totalPages}
            variant="light"
            onChange={setCurrentPage}
          />
          <Button
            className="bg-terracotta text-terracotta-text hover:bg-terracotta/80"
            radius="full"
            size="md"
            variant="solid"
            onPress={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlternatingCards;
