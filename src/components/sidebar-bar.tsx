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
        "fixed left-4 top-1/2 -translate-y-1/2 h-fit bg-default-50 shadow-lg transition-all hidden lg:block",
        open ? "w-64 rounded-3xl" : "w-14 rounded-3xl"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="flex flex-col justify-between h-full gap-10">
          <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
            <Link
              className="relative z-20 flex items-center py-1 space-x-2 text-base font-normal text-default-foreground"
              href="/"
            >
              <Avatar
                className="w-6 h-6 text-tiny shrink-0"
                color="default"
                src={siteConfig.logo}
              />
              <span className="font-medium uppercase whitespace-pre text-default-foreground">
                {siteConfig.name}
              </span>
            </Link>
            <div className="flex flex-col gap-2 mt-8">
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
            </div>
          </div>
          <ThemeSwitch />
        </SidebarBody>
      </Sidebar>
    </div>
  );
}
