/* eslint-disable prettier/prettier */
export const siteConfig = {
  name: "Kenneth Aparece",

  url: "https://portfolio-kenprce09.vercel.app/",

  meta_type: "website",
  meta_title: "Kenneth Aparece",
  meta_description:
    "Check out Kenneth's portfolio showcasing  latest projects and skills!",
  meta_image:
    "https://portfolio-kenprce09.vercel.app/228041565_1204885213317442_2861452606248897561_n.webp",

  email: {
    first: "kennethjoseaparece@gmail.com",
    second: "yonascarren@gmail.com",
  },
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
    linkedin: { title: "LinkedIn", link: "https://linkedin.com/hero_ui" },
    youtube: { title: "YouTube", link: "https://youtube.com/hero_ui" },
    instagram: { title: "Instagram", link: "https://instagram.com/hero_ui" },
    leetcode: { title: "LeetCode", link: "https://leetcode.com/hero_ui" },
  },

  stack: {
    react: {
      title: "React",
      description:
        "A powerful JavaScript library for building dynamic and interactive UIs.",
    },
    laravel: {
      title: "Laravel",
      description:
        "A PHP framework for building scalable and maintainable backends.",
    },
    tailwind: {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid and responsive UI design.",
    },
    unity: {
      title: "Unity",
      description:
        "A game engine for developing immersive 2D and 3D experiences.",
    },
    figma: {
      title: "Figma",
      description:
        "A collaborative design tool for UI/UX prototyping and wireframing.",
    },
    aftereffects: {
      title: "After Effects",
      description:
        "A motion graphics and visual effects software for animations and compositing.",
    },
    photoshop: {
      title: "Photoshop",
      description:
        "An industry-standard tool for image editing, retouching, and digital design.",
    },
    blender: {
      title: "Blender",
      description:
        "An open-source 3D software for modeling, texturing, rigging, and animation.",
    },
    framermotion: {
      title: "Framer Motion",
      description:
        "A React animation library for smooth and interactive UI transitions.",
    },

    vite: {
      title: "Vite",
      description:
        "A fast build tool and development server for modern web projects.",
    },
  } as Record<string, { title: string; description: string }>,

  contents: [
    {
      title: "VLOG: 01",
      type: "Capstone Project - Game Development",
      description:
        "With no prior game dev experience, our capstone team built a 3D horror game based on our college.\n\nAs Junior Programmer & Graphics Lead, I handled 3D modeling, rigging, animation, UI/UX, and contributed to game logic and system design. I also helped develop core mechanics and the game’s webpage.\n\nDue to school policy, only a live demo is available.",
      imageSrc: "https://heroui.com/images/card-example-5.jpeg",
      stack: [
        "unity",
        "blender",
        "figma",
        "aftereffects",
        "photoshop",
        "react",
        "tailwind",
        "vite",
      ],
      url: {
        demo: "https://sites.google.com/view/vlog-01",
        github: "",
      },
    },
    {
      title: "Portfolio",
      type: "Front-end Project",
      description:
        "I built my minimalistic portfolio using React and Tailwind CSS, with Framer Motion for animations, Aceternity for UI, HeroUI for components, and DaisyUI for styling.\n\nIt’s clean, responsive, and interactive, showcasing my work with smooth transitions.",
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["react", "tailwind", "framermotion", "vite"],
      url: {
        demo: "https://portfolio-gamma-seven-14.vercel.app/",
        github: "https://github.com/Kenkenetoy/portfolio",
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
