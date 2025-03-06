import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLeetcode,
  IconBrandGmail,
  IconLink,
  IconBrandTwitter,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Link } from "@heroui/link";
import { Helmet } from "react-helmet-async";

import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { GlareCard } from "@/components/glare-card";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pageUrl = encodeURIComponent(siteConfig.url);
  const pageTitle = encodeURIComponent(
    `Check out ${siteConfig.name}'s portfolio!`
  );
  const pageDescription = encodeURIComponent(siteConfig.sitedescription);
  const pageImage = encodeURIComponent(siteConfig.image);

  const shareLinks = [
    {
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}&title=${pageTitle}&summary=${pageDescription}&source=${pageUrl}`,
      icon: <IconBrandLinkedin size={24} />,
      label: "Share on LinkedIn",
    },
    {
      href: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      icon: <IconBrandTwitter size={24} />,
      label: "Share on Twitter",
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      icon: <IconBrandFacebook size={24} />,
      label: "Share on Facebook",
    },
  ];
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{siteConfig.name}</title>
        <meta content={siteConfig.sitedescription} name="description" />
        <link href={siteConfig.url} rel="canonical" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta content="website" property="og:type" />
        <meta content={siteConfig.url} property="og:url" />
        <meta content={siteConfig.name} property="og:title" />
        <meta content={siteConfig.sitedescription} property="og:description" />
        <meta content={siteConfig.image} property="og:image" />

        {/* Twitter Meta Tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={siteConfig.url} name="twitter:url" />
        <meta content={siteConfig.name} name="twitter:title" />
        <meta content={siteConfig.sitedescription} name="twitter:description" />
        <meta content={siteConfig.image} name="twitter:image" />
      </Helmet>

      <DefaultLayout>
        <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          <div className="absolute  inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <div className="absolute inset-0 z-10 flex items-center justify-around px-40 text-3xl font-bold text-center text-white md:text-4xl lg:text-7xl">
            <GlareCard className="flex flex-col items-center justify-center ">
              <DraggableMockupPhone />
            </GlareCard>
            <section className="flex flex-col items-center justify-center w-1/2 gap-4 py-8 space-y-12 md:py-10">
              <div className="justify-center inline-block max-w-xl text-center">
                <h1 className="text-5xl capitalize text-neutral-900 dark:text-white">
                  a crafty Web Artisan and Tech Artist
                </h1>
                <Button
                  aria-label="Like"
                  className=""
                  color="primary"
                  variant="shadow"
                  onPress={onOpen}
                >
                  <IconBrandGmail />
                  <span className="text-sm font-semibold">Contact</span>
                </Button>
                <Modal
                  backdrop="blur"
                  isOpen={isOpen}
                  motionProps={{
                    variants: {
                      enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      },
                      exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                          duration: 0.2,
                          ease: "easeIn",
                        },
                      },
                    },
                  }}
                  onOpenChange={onOpenChange}
                >
                  <ModalContent>
                    {() => (
                      <>
                        <ModalHeader className="flex flex-col gap-1 capitalize">
                          Connect with me
                        </ModalHeader>
                        <ModalBody>
                          <p className="text-sm text-gray-500">
                            Clicking the links below will open Gmail in a new
                            tab. This method is secure as it directly opens
                            Gmail’s official website.
                          </p>

                          <Tooltip
                            content={
                              `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}` ? (
                                <Link
                                  isExternal
                                  showAnchorIcon
                                  anchorIcon={<IconLink size={20} />}
                                  className="flex flex-col p-2 space-y-2"
                                  color="foreground"
                                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                                  isBlock={true}
                                  size="sm"
                                  target="_blank"
                                >
                                  <span>
                                    <Image
                                      alt={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                                      className="z-0 object-cover w-full h-full"
                                      src={`https://api.microlink.io/?url=${encodeURIComponent(
                                        `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`
                                      )}&screenshot=true&meta=false&embed=screenshot.url`}
                                      height={200}
                                      // src="public\228041565_1204885213317442_2861452606248897561_n.webp"
                                      width={200}
                                    />
                                  </span>

                                  <span className="w-48 overflow-hidden text-ellipsis">
                                    {`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                                  </span>
                                </Link>
                              ) : (
                                "No Preview Available"
                              )
                            }
                            shadow="md"
                            showArrow={true}
                          >
                            <Link
                              isExternal
                              showAnchorIcon
                              anchorIcon={<IconLink size={20} />}
                              color="foreground"
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                              target="_blank"
                            >
                              {siteConfig.email.first}
                            </Link>
                          </Tooltip>
                        </ModalBody>
                        <ModalFooter className="justify-start">
                          <div className="flex gap-4">
                            <p className="text-sm">Share my portfolio:</p>
                            {shareLinks.map((link, index) => (
                              <a
                                key={index}
                                aria-label={link.label}
                                className="transition hover:text-primary"
                                href={link.href}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {link.icon}
                              </a>
                            ))}
                          </div>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
              <div className="space-x-6 ">
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-small">
                        {siteConfig.socials.linkedin.title}
                      </div>
                      <div className="text-tiny">
                        This opens another tab to
                        {siteConfig.socials.linkedin.link}
                      </div>
                    </div>
                  }
                >
                  <Button
                    isIconOnly
                    aria-label="Like"
                    color="primary"
                    variant="faded"
                  >
                    <IconBrandLinkedin />
                  </Button>
                </Tooltip>
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-small">
                        {siteConfig.socials.github.title}
                      </div>
                      <div className="text-tiny">
                        This opens another tab to{" "}
                        {siteConfig.socials.github.link}
                      </div>
                    </div>
                  }
                >
                  <Button
                    isIconOnly
                    aria-label="Like"
                    color="default"
                    variant="faded"
                  >
                    <IconBrandGithub />
                  </Button>
                </Tooltip>
                <Tooltip
                  content={
                    <div className="px-1 py-2">
                      <div className="font-bold text-small">
                        {siteConfig.socials.leetcode.title}
                      </div>
                      <div className="text-tiny">
                        This opens another tab to{" "}
                        {siteConfig.socials.leetcode.link}
                      </div>
                    </div>
                  }
                >
                  <Button
                    isIconOnly
                    aria-label="Like"
                    color="warning"
                    variant="faded"
                  >
                    <IconBrandLeetcode />
                  </Button>
                </Tooltip>
              </div>
            </section>
          </div>
        </div>
        <StickyScroll content={siteConfig.contents} />
        <div className="p-96">p</div>
      </DefaultLayout>
    </>
  );
}
