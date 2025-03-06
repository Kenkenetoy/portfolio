import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import {
  IconBrandFacebook,
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

import { siteConfig } from "@/config/site";

export const ShareModal = ({
  children,
  className = "",
  variant = "solid",
  color = "default",
  size = "md",
  radius = "lg",
  fullWidth = false,
  isDisabled = false,
}: {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "solid"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | "ghost";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  fullWidth?: boolean;
  isDisabled?: boolean;
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const pageUrl = encodeURIComponent(siteConfig.url);
  const pageTitle = encodeURIComponent(
    `Check out ${siteConfig.name}'s portfolio!`,
  );
  const pageDescription = encodeURIComponent(siteConfig.meta_description);
  const pageImage = encodeURIComponent(siteConfig.meta_image);

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
      <Button
        aria-label="Share"
        className={className}
        color={color}
        fullWidth={fullWidth}
        isDisabled={isDisabled}
        radius={radius}
        size={size}
        variant={variant}
        onPress={onOpen}
      >
        {children}
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
                  Clicking the links below will open Gmail in a new tab. This
                  method is secure as it directly opens Gmail’s official
                  website.
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
                            height={200}
                            src={`https://api.microlink.io/?url=${encodeURIComponent(
                              `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`,
                            )}&screenshot=true&meta=false&embed=screenshot.url`}
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
                    className="gap-2 w-fit"
                    color="foreground"
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.first}`}
                    target="_blank"
                    underline="always"
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
    </>
  );
};
