import React from "react";
import { FloatingDock } from "@/components/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "@heroui/image";
import { siteConfig } from "@/config/site";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.links.facebook,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.links.instagram,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.links.github,
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
