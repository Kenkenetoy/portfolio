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
      description: "Used to create the frontend.",
    },
    laravel: {
      title: "Laravel",
      description: "Used to create the backend.",
    },
    tailwind: {
      title: "Tailwind CSS",
      description: "Used to style the frontend.",
    },
    unity: {
      title: "Unity",
      description: "Used to develop the game.",
    },
    figma: {
      title: "Figma",
      description: "Used to visualize UI/UX.",
    },
    aftereffects: {
      title: "After Effects",
      description: "Used to create VFX.",
    },
    photoshop: {
      title: "Photoshop",
      description: "Used to manipulate images and textures.",
    },
    blender: {
      title: "Blender",
      description: "Used to model, texture, and rig 3d models.",
    },
  } as Record<string, { title: string; description: string }>,

  contents: [
    {
      title: "VLOG: 01",
      type: "Capstone Project - Game Development",
      description:
        "With no prior game development experience, our capstone team created a fully 3D horror game based on our college.\n\nAs Junior Programmer and Graphics Lead, I handled character and environment modeling, rigging, animation, and UI/UX design. I also contributed to game logic, system design, and core mechanics development, and collaborated on the game’s webpage.\n\nThe game is a proprietary project of our college. To comply with the school's capstone publication policy, only a live demo is allowed.",
      imageSrc: "https://heroui.com/images/card-example-5.jpeg",
      stack: [
        "unity",
        "blender",
        "figma",
        "aftereffects",
        "photoshop",
        "react",
        "tailwind",
      ],
      url: {
        demo: "https://sites.google.com/view/vlog-01",
        github: "",
      },
    },
    {
      title: "Real-time changes",
      type: "Back-end Project",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["laravel", "tailwind"],
      url: {
        demo: "",
        github: "",
      },
    },
    {
      title: "Version control",
      type: "Front-end Project",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",

      imageSrc: "https://heroui.com/images/card-example-3.jpeg",
      stack: ["react"],
      url: {
        demo: "",
        github: "",
      },
    },
    {
      title: "Running out of content",
      type: "Front-end Project",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
      stack: ["tailwind"],
      url: {
        demo: "",
        github: "",
      },
    },
  ],
};
