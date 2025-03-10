/* eslint-disable prettier/prettier */
import {
  IconBrandGithub,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLeetcode,
} from "@tabler/icons-react";

import { FloatingDock } from "@/components/floating-dock";
import { siteConfig } from "@/config/site";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.socials.facebook.link,
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.socials.instagram.link,
    },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.socials.leetcode.link,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.socials.github.link,
    },
  ];

  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
