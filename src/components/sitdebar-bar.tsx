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
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-[60vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="flex flex-col gap-2 mt-8">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <Image
                    alt="Avatar"
                    className="rounded-full h-7 w-7 shrink-0"
                    height={50}
                    src="https://assets.aceternity.com/manu.png"
                    width={50}
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
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

// Dummy dashboard component with content
const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="flex flex-col flex-1 w-full h-full gap-2 p-2 bg-white border md:p-10 rounded-tl-2xl border-neutral-200 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="flex gap-2">
          {[...new Array(4)].map((i) => (
            <div
              key={"first-array" + i}
              className="w-full h-20 bg-gray-100 rounded-lg dark:bg-neutral-800 animate-pulse"
            />
          ))}
        </div>
        <div className="flex flex-1 gap-2">
          {[...new Array(2)].map((i) => (
            <div
              key={"second-array" + i}
              className="w-full h-full bg-gray-100 rounded-lg dark:bg-neutral-800 animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
