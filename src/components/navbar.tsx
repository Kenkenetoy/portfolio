/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";
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
      className="fixed z-40 w-full h-24 border-b max-w-none bg-slateshit border-default-foreground"
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
        <NavbarItem className="hidden gap-8 p-4 px-8 rounded-full justify-self-center w-fit md:flex border-default-100 border-1">
          {Object.values(siteConfig.navItems).map((item, idx) => (
            <NavbarItem key={idx}>
              <Link color="foreground" href={item.href}>
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarItem>

        {/* Right: Theme Switch */}
        <NavbarItem className="justify-end hidden md:flex">
          <ThemeSwitch />
        </NavbarItem>
      </div>

      {/* mobile */}
      <NavbarContent className="pl-4 md:hidden basis-1" justify="end">
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
