import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandLeetcode,
  IconBrandGmail,
  IconLink,
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

import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import { StickyScroll } from "@/components/sticky-scroll-reveal";
import { GlareCard } from "@/components/glare-card";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <DefaultLayout>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
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
                backdrop="opaque"
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
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 capitalize">
                        Connect with me
                      </ModalHeader>
                      <ModalBody>
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<IconLink size={20} />}
                          href={siteConfig.email.first}
                        >
                          {siteConfig.email.first}
                        </Link>
                        <Link
                          isExternal
                          showAnchorIcon
                          anchorIcon={<IconLink size={20} />}
                          href={siteConfig.email.second}
                        >
                          {siteConfig.email.second}
                        </Link>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          color="warning"
                          variant="solid"
                          onPress={onClose}
                        >
                          Share
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
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
                      {siteConfig.socials.facebook.title}
                    </div>
                    <div className="text-tiny">
                      This opens another tab to
                      {siteConfig.socials.facebook.link}
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
                  <IconBrandFacebook />
                </Button>
              </Tooltip>
              <Tooltip
                content={
                  <div className="px-1 py-2">
                    <div className="font-bold text-small">
                      {siteConfig.socials.github.title}
                    </div>
                    <div className="text-tiny">
                      This opens another tab to {siteConfig.socials.github.link}
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
  );
}
