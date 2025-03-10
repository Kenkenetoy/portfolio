/* eslint-disable prettier/prettier */
"use client";
import { useState, useEffect } from "react";
import {
  IconCreditCardPay,
  IconBriefcase,
  IconCircleFilled,
  IconHome,
} from "@tabler/icons-react";
import { Link } from "@heroui/link";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <IconHome className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
    {
      label: "About",
      href: "/about",
      icon: (
        <IconCreditCardPay className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
    {
      label: "Blog",
      href: "/blog",
      icon: (
        <IconBriefcase className="w-5 h-5 text-neutral-700 dark:text-neutral-200 shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(() =>
    JSON.parse(localStorage.getItem("sidebarOpen") || "false")
  );

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(open));
  }, [open]);

  return (
    <div
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 h-fit bg-neutral-100 dark:bg-transparent shadow-lg transition-all",
        open ? "w-64 rounded-3xl" : "w-14 rounded-3xl"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between h-full gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <Link
              className="relative z-20 flex items-center py-1 space-x-2 text-sm font-normal text-black"
              href="/"
            >
              <IconCircleFilled className="w-6 h-5 text-black dark:text-white shrink-0" />
              <span className="font-medium text-black whitespace-pre dark:text-white">
                {siteConfig.name}
              </span>
            </Link>
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
