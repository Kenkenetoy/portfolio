/* eslint-disable prettier/prettier */
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBriefcase,
  IconCreditCardPay,
  IconHome,
  IconCode,
  IconDevices,
  IconCircleDashed,
  IconBrandBlender,
  IconBrandFigma,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandUnity,
  IconBrandVite,
  IconBrandAdobePhotoshop,
  IconBrandAdobeAfterEffect,
  IconPalette,
  IconLayout,
} from "@tabler/icons-react";

export const siteConfig = {
  name: "Kenneth Aparece",
  logo: IconCircleDashed,
  hero_big: "designer & developer",
  hero_small:
    "I blend design and development to create smooth, user-friendly digital experiences.",
  location: { province: ["Bohol"], country: ["Philippines"] },
  role: "Software Engineer",

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

  navItems: [
    { label: "Home", href: "/", icon: IconHome },
    { label: "Blog", href: "/blog", icon: IconBriefcase },
    { label: "About", href: "/about", icon: IconCreditCardPay },
  ],

  navMenuItems: [{ label: "Projects", href: "/projects" }],

  socials: [
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/kenneth",
      icon: IconBrandLinkedin,
    },
    {
      title: "GitHub",
      link: "https://github.com/kenneth",
      icon: IconBrandGithub,
    },
    {
      title: "LeetCode",
      link: "https://leetcode.com/kenneth",
      icon: IconBrandLeetcode,
    },
  ],

  stack: {
    react: {
      title: "React",
      description:
        "A powerful JavaScript library for building dynamic and interactive UIs.",
      icon: IconBrandReact,
    },
    laravel: {
      title: "Laravel",
      description:
        "A PHP framework for building scalable and maintainable backends.",
      icon: IconBrandLaravel,
    },
    tailwind: {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid and responsive UI design.",
      icon: IconBrandTailwind,
    },
    unity: {
      title: "Unity",
      description:
        "A game engine for developing immersive 2D and 3D experiences.",
      icon: IconBrandUnity,
    },
    figma: {
      title: "Figma",
      description:
        "A collaborative design tool for UI/UX prototyping and wireframing.",
      icon: IconBrandFigma,
    },
    aftereffects: {
      title: "After Effects",
      description:
        "A motion graphics and visual effects software for animations and compositing.",
      icon: IconBrandAdobeAfterEffect,
    },
    photoshop: {
      title: "Photoshop",
      description:
        "An industry-standard tool for image editing, retouching, and digital design.",
      icon: IconBrandAdobePhotoshop,
    },
    blender: {
      title: "Blender",
      description:
        "An open-source 3D software for modeling, texturing, rigging, and animation.",
      icon: IconBrandBlender,
    },
    framermotion: {
      title: "Framer Motion",
      description:
        "A React animation library for smooth and interactive UI transitions.",
      icon: IconBrandReact,
    },
    vite: {
      title: "Vite",
      description:
        "A fast build tool and development server for modern web projects.",
      icon: IconBrandVite,
    },
  },

  contents: [
    {
      title: "VLOG: 01",
      type: "Capstone Project - Game Development",
      description:
        "With no prior game dev experience, our capstone team created a 3D horror game based on our college.\n\nAs Junior Programmer & Graphics Lead, I handled 3D modeling, rigging, animation, UI/UX, 3D programming, and contributed to game logic and system design. I also helped develop core mechanics and the game’s webpage.\n\nDue to school policy, only a live demo is available.",
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
  ],
  whatIDoData: [
    {
      title: "UI/UX Design",
      description:
        "I craft intuitive, user-friendly interfaces that make apps easy to use and visually appealing.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-primary",
      icon: IconLayout, // Consider an icon more focused on design or user interaction
      iconColor: "primary",
    },
    {
      title: "Full-Stack Development",
      description:
        "I build seamless web and mobile apps, handling both front-end and back-end for a smooth user experience.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-secondary",
      icon: IconCode, // A general development or coding icon
      iconColor: "secondary",
    },
    {
      title: "Mobile & Web Apps",
      description:
        "I create fast, responsive apps that work smoothly across all devices and platforms.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-warning",
      icon: IconDevices, // A device-related icon for web and mobile
      iconColor: "warning",
    },
    {
      title: "Creative Direction",
      description:
        "I lead the visual design, crafting concepts that tell a story and connect with your audience.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-danger",
      icon: IconPalette, // A more creative and artistic icon (like a palette or brush)
      iconColor: "danger",
    },
  ],
};
