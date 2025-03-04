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

  contents: [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Real-time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
  ],
};
