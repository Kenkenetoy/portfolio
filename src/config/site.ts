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
    react: {
      title: "React",
      description: "Used to create the frontend",
    },
    laravel: {
      title: "Laravel",
      description: "Used to create the backend",
    },
    tailwind: {
      title: "Tailwind CSS",
      description: "Used to style the frontend",
    },
  } as Record<string, { title: string; description: string }>,

  contents: [
    {
      title: "Collaborative Editing",
      type: "Full-stack Project",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      imageSrc: "https://heroui.com/images/card-example-1.jpeg",
      stack: ["react", "laravel", "tailwind"],
    },
    {
      title: "Real-time changes",
      type: "Back-end Project",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["laravel", "tailwind"],
    },
    {
      title: "Version control",
      type: "Front-end Project",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",

      imageSrc: "https://heroui.com/images/card-example-3.jpeg",
      stack: ["react"],
    },
    {
      title: "Running out of content",
      type: "Front-end Project",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
      stack: ["tailwind"], // Keep it as a string
    },
  ],
};
