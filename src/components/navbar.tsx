/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="fixed z-40 w-full h-24 px-4 border-b max-w-none bg-slateshit border-default-foreground"
      position="sticky"
    >
      {/* desktop */}
      <Link
        className="flex items-start justify-start gap-1"
        color="foreground"
        href="/"
      >
        <img alt="Logo" className="w-12 h-12" src="/logo-onlyletter.svg" />
        <p className="w-16 font-sans font-bold font-border-l-warning-200">
          Kenneth Aparece
        </p>
      </Link>

      <NavbarItem className="justify-center hidden gap-8 p-4 px-8 rounded-full border-default-100 lg:flex border-1">
        {Object.values(siteConfig.navItems).map((item, idx) => (
          <NavbarItem key={idx}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarItem>

      <NavbarItem className="hidden lg:flex">
        <ThemeSwitch />
      </NavbarItem>

      <NavbarContent className="pl-4 lg:hidden basis-1" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-4 mx-auto mt-12 text-center">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link color="foreground" href="#" size="lg">
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
