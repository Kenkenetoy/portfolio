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
  socials: {
    github: {
      title: "GitHub",
      link: "https://github.com/frontio-ai/heroui",
    },
    facebook: {
      title: "Facebook",
      link: "https://facebook.com/hero_ui",
    },
    youtube: {
      title: "YouTube",
      link: "https://youtube.com/hero_ui",
    },
    instagram: {
      title: "Instagram",
      link: "https://instagram.com/hero_ui",
    },
    leetcode: {
      title: "LeetCode",
      link: "https://leetcode.com/hero_ui",
    },
  },
};
