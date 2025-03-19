/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
import { Avatar } from "@heroui/avatar";

import { Sidebar, SidebarBody, SidebarLink } from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useSidebar } from "@/context/SidebarContext";

export function SidebarDemo() {
  const { open, setOpen } = useSidebar();

  return (
    <div
      className={cn(
        "fixed lg:left-4 top-4 lg:top-1/2 -translate-y-1/2 h-fit bg-default-50 shadow-lg transition-all scale-75 lg:scale-100",
        open
          ? "lg:w-64 lg:h-fit h-96 w-full rounded-3xl"
          : "lg:w-14 lg:h-fit h-14 w-full rounded-3xl"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between flex-1 w-full h-full gap-4 overflow-x-hidden overflow-y-auto ">
          {/* mobile friendly */}
          {Object.values(siteConfig.navItems).map((navItem, idx) => (
            <SidebarLink
              key={idx}
              link={{
                label: navItem.label,
                href: navItem.href,
                icon: navItem.icon && (
                  <navItem.icon
                    className="text-default-foreground shrink-0"
                    stroke={1}
                  />
                ),
              }}
            />
          ))}
          <ThemeSwitch />
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
