/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";

import { IconHomeFilled } from "@tabler/icons-react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <HeroUINavbar
      className="fixed z-40 items-center w-full h-24 border-b max-w-none bg-slateshit border-default-foreground"
      maxWidth="full"
      position="sticky"
    >
      <div className="grid items-center w-full grid-cols-3">
        {/* Left: Logo */}
        <Link className="flex items-start gap-1" color="foreground" href="/">
          <img alt="Logo" className="w-12 h-12" src="/logo-onlyletter.svg" />
          <p className="w-16 font-sans font-bold">Kenneth Aparece</p>
        </Link>

        {/* Center: Navbar Links (Desktop Only) */}
        <NavbarItem className="hidden gap-8 p-4 px-8 border-gray-300 rounded-full justify-self-center w-fit md:flex dark:border-neutral-800 border-1">
          <NavbarItem>
            <Link color="foreground" href="/">
              <IconHomeFilled className="w-6 h-6" />
            </Link>
          </NavbarItem>
          {Object.values(siteConfig.navItems).map((item, idx) => (
            <NavbarItem key={idx}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarItem>

        {/* Right: Theme Switch */}
        <NavbarItem className="justify-end hidden p-0 duration-200 ease-linear rounded-full transition-color md:flex w-fit h-fit justify-self-end">
          <ThemeSwitch />
        </NavbarItem>
      </div>

      {/* mobile */}
      <NavbarContent className="pl-4 md:hidden basis-1" justify="end">
        <NavbarItem className="flex justify-end p-0 duration-200 ease-linear rounded-full md:hidden transition-color w-fit h-fit justify-self-end">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className="flex justify-center w-12 h-12 p-4 rounded-full just bg-default-foreground text-default" />
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
