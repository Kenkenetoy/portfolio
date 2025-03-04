export const siteConfig = {
  name: "Kenneth Aparece",
  description: "Cebu Based Software Engineer",
  location: "Cebu",
  role: "Software Engineer",

  navItems: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],
  navMenuItems: [{ label: "Projects", href: "/projects" }],

  socials: {
    github: { title: "GitHub", link: "https://github.com/frontio-ai/heroui" },
    facebook: { title: "Facebook", link: "https://facebook.com/hero_ui" },
    youtube: { title: "YouTube", link: "https://youtube.com/hero_ui" },
    instagram: { title: "Instagram", link: "https://instagram.com/hero_ui" },
    leetcode: { title: "LeetCode", link: "https://leetcode.com/hero_ui" },
  },

  stack: {
    react: { title: "React", description: "Used to create the frontend" },
    laravel: { title: "Laravel", description: "Used to create the backend" },
    tailwind: {
      title: "Tailwind CSS",
      description: "Used to style the frontend",
    },
  } as Record<string, { title: string; description: string }>, // 🔥 Add this to allow indexing

  contents: [
    {
      title: "Collaborative Editing",
      description: "Work together in real time with your team...",
      imageSrc: "https://heroui.com/images/card-example-1.jpeg",
      stack: ["react", "laravel", "tailwind"],
    },
    {
      title: "Real-time changes",
      description: "See changes as they happen...",
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["laravel", "tailwind"],
    },
    {
      title: "Version control",
      description: "Experience real-time updates...",
      imageSrc: "https://heroui.com/images/card-example-3.jpeg",
      stack: ["react"],
    },
    {
      title: "Running out of content",
      description: "Experience real-time updates...",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
      stack: ["tailwind"], // Keep it as a string
    },
  ],
};

// ✅ Convert stack string keys to actual objects
const resolvedContents = siteConfig.contents.map((content) => ({
  ...content,
  stack: content.stack.map((key) => siteConfig.stack[key]), // No more TS error
}));
