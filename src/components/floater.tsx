import {
  IconBrandGithub,
  IconBrandFacebook,
  // IconBrandInstagram,
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
      href: siteConfig.links.facebook,
    },
    // {
    //   title: "Instagram",
    //   icon: (
    //     <IconBrandInstagram className="w-full h-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: siteConfig.links.instagram,
    // },
    {
      title: "LeetCode",
      icon: (
        <IconBrandLeetcode className="w-full h-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: siteConfig.links.leetcode,
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
        items={links}
        mobileClassName="translate-y-20" // only for demo, remove for production
      />
    </div>
  );
}
