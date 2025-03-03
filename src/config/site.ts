export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kenneth Aparece",
  description: "Cebu Based Software Engineer",
  location: "Cebu",
  role: "Web Developer",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Projects",
      href: "/projects",
    },
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    facebook: "https://facebook.com/hero_ui",
    youtube: "https://youtube.com/hero_ui",
    instagram: "https://instagram.com/hero_ui",
    leetcode: "https://leetcode.com/hero_ui",
  },
};
