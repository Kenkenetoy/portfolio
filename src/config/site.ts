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
  IconCircleFilled,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandPython,
  IconBrandWordpress,
  IconTerminal,
  IconBrandBootstrap,
  IconBrandFramer,
  IconBrandGit,
} from "@tabler/icons-react";
import {
  ReactOriginal,
  TypescriptOriginal,
  LaravelOriginal,
  TailwindcssOriginal,
  UnityOriginal,
  FigmaOriginal,
  AftereffectsOriginal,
  PhotoshopOriginal,
  BlenderOriginal,
  ViteOriginal,
  GithubOriginal,
  BashOriginal,
  CsharpOriginal,
  Css3Original,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  MysqlOriginal,
  PerlOriginal,
  PythonOriginal,
  SqliteOriginal,
  WordpressOriginal,
  BootstrapOriginal,
  FramermotionOriginal,
  GitOriginal,
} from "devicons-react";

export const siteConfig = {
  name: "Kenneth Aparece",
  logo: IconCircleFilled,
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
    { label: "Projects", href: "/blog", icon: IconBriefcase },
    { label: "About Me", href: "/about", icon: IconCreditCardPay },
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
      devicon: ReactOriginal,
    },
    typescript: {
      title: "TypeScript",
      description:
        "A strongly typed programming language that builds on JavaScript.",
      icon: IconBrandTypescript,
      devicon: TypescriptOriginal,
    },
    laravel: {
      title: "Laravel",
      description:
        "A PHP framework for building scalable and maintainable backends.",
      icon: IconBrandLaravel,
      devicon: LaravelOriginal,
    },
    tailwind: {
      title: "Tailwind CSS",
      description:
        "A utility-first CSS framework for rapid and responsive UI design.",
      icon: IconBrandTailwind,
      devicon: TailwindcssOriginal,
    },
    bootstrap: {
      title: "Bootstrap",
      description:
        "A popular CSS framework for building responsive and mobile-first websites.",
      icon: IconBrandBootstrap,
      devicon: BootstrapOriginal,
    },
    framer: {
      title: "Framer Motion",
      description:
        "A powerful animation library for React, enabling smooth and interactive UI animations.",
      icon: IconBrandFramer,
      devicon: FramermotionOriginal,
    },
    unity: {
      title: "Unity",
      description:
        "A game engine for developing immersive 2D and 3D experiences.",
      icon: IconBrandUnity,
      devicon: UnityOriginal,
    },
    blender: {
      title: "Blender",
      description:
        "An open-source 3D software for modeling, texturing, rigging, and animation.",
      icon: IconBrandBlender,
      devicon: BlenderOriginal,
    },
    vite: {
      title: "Vite",
      description:
        "A fast build tool and development server for modern web projects.",
      icon: IconBrandVite,
      devicon: ViteOriginal,
    },
    git: {
      title: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
      icon: IconBrandGit,
      devicon: GitOriginal,
    },
    java: {
      title: "Java",
      description:
        "A robust and versatile programming language for backend, mobile, and enterprise applications.",
      devicon: JavaOriginal,
    },
    javascript: {
      title: "JavaScript",
      description:
        "A versatile programming language for building web applications.",
      icon: IconBrandJavascript,
      devicon: JavascriptOriginal,
    },
    html: {
      title: "HTML",
      description: "The standard markup language for creating web pages.",
      icon: IconBrandHtml5,
      devicon: Html5Original,
    },
    css: {
      title: "CSS",
      description:
        "A style sheet language used for describing the look of web pages.",
      icon: IconBrandCss3,
      devicon: Css3Original,
    },
    csharp: {
      title: "C#",
      description:
        "A powerful object-oriented programming language used in game development and enterprise applications.",
      devicon: CsharpOriginal,
    },
    python: {
      title: "Python",
      description:
        "A widely-used programming language for web development, AI, and automation.",
      icon: IconBrandPython,
      devicon: PythonOriginal,
    },
    mysql: {
      title: "MySQL",
      description:
        "A popular relational database management system for structured data storage.",
      icon: IconBrandMysql,
      devicon: MysqlOriginal,
    },
    sqlite: {
      title: "SQLite",
      description:
        "A lightweight, self-contained SQL database engine for embedded applications.",
      devicon: SqliteOriginal,
    },
    perl: {
      title: "Perl",
      description:
        "A high-level programming language known for its text-processing capabilities.",
      devicon: PerlOriginal,
    },
    shell: {
      title: "Shell Scripting",
      description:
        "A command-line scripting language used for automating system tasks.",
      icon: IconTerminal,
      devicon: BashOriginal,
    },
  },

  contents: [
    {
      title: "VLOG: 01",
      type: "Capstone Project - Game Development",
      description:
        "A 3D horror puzzle game set in my school. Players solve puzzles, navigate dark hallways, and uncover hidden secrets while avoiding lurking threats.",
      imageSrc: "https://heroui.com/images/card-example-5.jpeg",
      stack: ["unity", "blender", "react", "typescript", "tailwind"],
      url: {
        demo: "https://sites.google.com/view/vlog-01",
        github: "",
      },
    },
    {
      title: "Portfolio",
      type: "Front-end Project",
      description:
        "A minimalistic portfolio built with React, Tailwind CSS, Framer Motion, Aceternity, HeroUI, and DaisyUI—clean, responsive, and interactive with smooth transitions.",
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["react", "typescript", "tailwind", "framer", "git"],
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
