/* eslint-disable prettier/prettier */
"use client";
import { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Link } from "@heroui/link";
import { motion } from "motion/react";
import { Image } from "@heroui/image";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/theme-switch";

export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 h-[50vh] bg-neutral-100 dark:bg-transparent shadow-lg transition-all",
        open ? "w-64 rounded-xl" : "w-14 rounded-xl"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between h-full gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="flex flex-col gap-2 mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <ThemeSwitch />
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
export const Logo = () => {
  return (
    <Link
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
      href="#"
    >
      <div className="w-6 h-5 bg-black rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg dark:bg-white shrink-0" />
      <motion.span
        animate={{ opacity: 1 }}
        className="font-medium text-black whitespace-pre dark:text-white"
        initial={{ opacity: 0 }}
      >
        Acet Labs
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
      href="#"
    >
      <div className="w-6 h-5 bg-black rounded-tl-lg rounded-tr-sm rounded-bl-sm rounded-br-lg dark:bg-white shrink-0" />
    </Link>
  );
};
