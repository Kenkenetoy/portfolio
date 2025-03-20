/* eslint-disable prettier/prettier */
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandLeetcode,
  IconCode,
  IconDevices,
  IconBrandBlender,
  IconBrandLaravel,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandUnity,
  IconBrandVite,
  IconPalette,
  IconLayout,
  IconBrandTypescript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandMysql,
  IconBrandPython,
  IconBrandBootstrap,
  IconBrandFramer,
  IconBrandGit,
  IconBrandPhp,
  IconHomeFilled,
  IconBriefcaseFilled,
  IconAlignBoxLeftMiddleFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import {
  ReactOriginal,
  TypescriptOriginal,
  LaravelOriginal,
  TailwindcssOriginal,
  UnityOriginal,
  BlenderOriginal,
  ViteOriginal,
  CsharpOriginal,
  Css3Original,
  Html5Original,
  JavaOriginal,
  JavascriptOriginal,
  MysqlOriginal,
  PerlOriginal,
  PythonOriginal,
  SqliteOriginal,
  BootstrapOriginal,
  FramermotionOriginal,
  GitOriginal,
  PhpOriginal,
  AxiosPlain,
  XmlOriginal,
  WordpressOriginal,
  AmazonwebservicesOriginalWordmark,
} from "devicons-react";

export const siteConfig = {
  Devmode: false,

  name: "Kenneth Aparece",
  logo: "228041565_1204885213317442_2861452606248897561_n.webp",
  hero_big: "designer & developer",
  hero_small:
    "I blend design and development to create smooth digital experiences.",
  location: { province: ["Bohol"], country: ["Philippines"] },
  role: "Software Engineer",

  url: "https://www.portfolio-kenprce09.vercel.app",

  meta_type: "website",
  meta_title: "Kenneth Aparece",
  meta_description:
    "Check out Kenneth's portfolio showcasing  latest projects and skills!",
  meta_image: "228041565_1204885213317442_2861452606248897561_n.webp",

  email: {
    first: "kennethjoseaparece@gmail.com",
    second: "yonascarren@gmail.com",
  },

  navItems: {
    Home: { label: "Home", href: "/", icon: IconHomeFilled },
    Projects: {
      label: "Projects",
      href: "/projects",
      icon: IconBriefcaseFilled,
    },
    About: {
      label: "About Me",
      href: "/about",
      icon: IconAlignBoxLeftMiddleFilled,
    },
    Contact: {
      label: "Contact Me",
      href: "/contact",
      icon: IconMailFilled,
    },
  },

  navMenuItems: [{ label: "Projects", href: "/projects" }],

  socials: [
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/kenkenetoy/",
      icon: IconBrandLinkedin,
    },
    {
      title: "GitHub",
      link: "https://github.com/Kenkenetoy",
      icon: IconBrandGithub,
    },
    {
      title: "LeetCode",
      link: "https://leetcode.com/u/Kenkenetoy/",
      icon: IconBrandLeetcode,
    },
  ],

  stack: {
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
    react: {
      title: "React",
      description:
        "A powerful JavaScript library for building dynamic and interactive UIs.",
      icon: IconBrandReact,
      devicon: ReactOriginal,
    },
    axios: {
      title: "Axios",
      description:
        "A promise-based HTTP client for making API requests in JavaScript and Node.js.",
      devicon: AxiosPlain,
    },
    laravel: {
      title: "Laravel",
      description:
        "A PHP framework for building scalable and maintainable backends.",
      icon: IconBrandLaravel,
      devicon: LaravelOriginal,
    },
    php: {
      title: "PHP",
      description:
        "A popular general-purpose scripting language suited for web development.",
      icon: IconBrandPhp, // Replace with an actual PHP icon if available
      devicon: PhpOriginal, // Devicon should have this
    },

    typescript: {
      title: "TypeScript",
      description:
        "A strongly typed programming language that builds on JavaScript.",
      icon: IconBrandTypescript,
      devicon: TypescriptOriginal,
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
    csharp: {
      title: "C#",
      description:
        "A powerful object-oriented programming language used in game development and enterprise applications.",
      devicon: CsharpOriginal,
    },
    java: {
      title: "Java",
      description:
        "A robust and versatile programming language for backend, mobile, and enterprise applications.",
      devicon: JavaOriginal,
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

    xml: {
      title: "XML",
      description:
        "A markup language used for defining structured data, commonly utilized in KRpano for scene configurations and settings.",
      devicon: XmlOriginal, // Custom placeholder, replace with an actual icon if needed
    },
    wordpress: {
      title: "WordPress",
      description:
        "A popular content management system (CMS) used for building websites and blogs. Known for its flexibility, vast plugin ecosystem, and user-friendly interface.",
      devicon: WordpressOriginal, // Custom placeholder, replace with an actual icon if needed
    },
    aws: {
      title: "Amazon Web Services (AWS)",
      description:
        "A comprehensive cloud computing platform offering scalable infrastructure, hosting, and cloud services. Commonly used for web hosting, database management, and email handling (including MX records for mail servers).",
      devicon: AmazonwebservicesOriginalWordmark, // Custom placeholder, replace with an actual icon if needed
    },
  },

  contents: [
    {
      title: "VLOG: 01",
      type: "Capstone Project - Game Development",
      description:
        "Our capstone team created our first ever game—a 3D horror puzzle game set in my school. Solve puzzles, navigate dark hallways, and uncover secrets while avoiding threats.\n\nI am the junior programmer and graphics programmer. I meticulously build and optimize game assets, and integrate visuals in the system.",
      feature_list: [
        {
          title: "3D Horror Environment",
          description:
            "Explore a realistic school setting with eerie lighting and atmospheric details.",
        },
        {
          title: "Puzzle Mechanics",
          description:
            "Solve interactive puzzles that require logic and exploration.",
        },
        {
          title: "Dynamic Lighting",
          description:
            "Implemented optimized real-time shadows and light effects for immersion.",
        },
        {
          title: "Enemy AI",
          description:
            "Designed AI behavior that reacts to player movement and sound cues.",
        },
        {
          title: "Performance Optimization",
          description:
            "Reduced asset load times and optimized rendering for smooth gameplay.",
        },
      ],
      extra: {
        directdownload: "https://example.com/game-download.zip",
        title: "Updated Release",
        description: "Download the latest revised version directly.",
      },
      imageSrc: "Poster.png",
      stack: ["unity", "C#", "blender"],
      url: {
        demo: "https://sites.google.com/view/vlog-01",
        github: "",
      },
    },
    {
      title: "Costa Vida",
      type: "Interactive Virtual Tour",
      description:
        "An immersive 360° virtual tour of Costa Vida using KRpano. Designed to provide potential customers with an engaging preview of the property through seamless panoramic navigation and interactive hotspots.",
      feature_list: [
        {
          title: "360° Panoramic Navigation",
          description:
            "Allows users to explore the property as if they were there in person.",
        },
        {
          title: "Interactive Hotspots",
          description:
            "Embedded hotspots provide additional details, links, and multimedia content.",
        },
        {
          title: "Mobile & Desktop Compatibility",
          description:
            "Fully responsive design ensuring smooth experience across devices.",
        },
        {
          title: "Integrated 3D Assets in Real-World Panoramas",
          description:
            "Seamlessly blended 3D-rendered objects with real-world panoramic images to create an immersive and interactive experience. Ensured accurate lighting, perspective alignment, and smooth transitions for a natural look.",
        },
      ],
      imageSrc: "Screenshot2025-03-17132127.png",
      stack: ["krpano", "javascript", "xml", "css", "blender"],
      url: {
        demo: "https://mata.ph/mactannewtown/",
      },
    },
    {
      title: "The Flying Pig",
      type: "Interactive Virtual Tour",
      description:
        "A high-quality 360° virtual tour developed for Borromeo Bros Real Estate. Created to showcase The Flying Pig venue with a focus on engaging potential vendors and buyers through interactive elements and a seamless user experience.",
      feature_list: [
        {
          title: "High-Resolution Panoramas",
          description:
            "Crisp, clear visuals to highlight the venue’s unique architecture.",
        },
        {
          title: "SEO Optimization",
          description:
            "Structured metadata for better discoverability in search engines.",
        },
      ],
      imageSrc: "Screenshot2025-03-17161055.png",
      stack: ["krpano", "javascript", "xml", "css", "blender"],
      url: {
        demo: "https://borromeo.ph/tfpvirtualtour/",
      },
    },
    {
      title: "Ehrlich Ph",
      type: "Corporate Website",
      description:
        "Revamped and optimized the Ehrlich Ph website after inheriting a bloated version from a past developer. Redesigned the UI/UX using Figma for a cleaner and more intuitive layout, then rebuilt the site for improved performance and maintainability. Additionally, troubleshot and resolved an AWS mail (MX) overload issue to ensure reliable email delivery.",
      imageSrc: "Screenshot2025-03-17155511.png",
      stack: ["wordpress", "php", "css", "figma", "aws"],
      url: {
        demo: "https://ehrlich.ph/",
      },
    },
    {
      title: "Portfolio",
      type: "Front-end Project",
      description:
        "A sleek, interactive web portfolio designed to showcase my projects, skills, and technical expertise. Built with modern front-end technologies, incorporating smooth transitions, light/dark mode, and optimized for mobile responsiveness.",
      feature_list: [
        {
          title: "Smooth Animations",
          description:
            "Framer Motion-based animations for a dynamic browsing experience.",
        },
        {
          title: "Dark & Light Mode",
          description:
            "Easily switch between themes with persistent state management.",
        },
        {
          title: "Project Showcases",
          description:
            "Interactive sections displaying key projects with detailed case studies.",
        },
        {
          title: "SEO & Performance Optimization",
          description:
            "Fast load times and structured metadata for better visibility.",
        },
        {
          title: "Responsive Layout",
          description:
            "Fully adaptable for an optimal experience across all devices.",
        },
      ],
      imageSrc: "Screenshot2025-03-17155713.png",
      stack: ["react", "typescript", "tailwind", "git"],
      url: {
        demo: "https://portfolio-gamma-seven-14.vercel.app/",
        github: "https://github.com/Kenkenetoy/portfolio",
      },
    },
    {
      title: "Realty CMS",
      type: "Full-Stack Application",
      description:
        "A simple CMS built for realtors using Java and SQL, allowing real estate professionals to manage properties, user accounts, and statistics through an interactive and stylish dashboard. Features automated SQL setup for new devices and extensive CRUD functionality.\n\nRequires Java JDK and Xampp/Laragon",
      feature_list: [
        {
          title: "Automated SQL Generation",
          description:
            "Automatically configures the database when deployed on a new device.",
        },
        {
          title: "User Authentication & Management",
          description:
            "Users can register, log in, and modify credentials securely.",
        },
        {
          title: "Property Management",
          description:
            "Create, edit, archive, and delete property listings with images and value adjustments.",
        },
        {
          title: "Realty Statistics Dashboard",
          description:
            "Provides insights into real estate performance and property records.",
        },
        {
          title: "Admin Privileges & Security",
          description:
            "Admins can manage most features, while Super Admins (future feature) have full control.",
        },
      ],
      imageSrc: "Screenshot2025-03-17161401.png",
      stack: ["java", "sql", "netbeans", "jdbc", "xampp"],
      url: {
        demo: "",
        github: "",
      },
    },

    {
      title: "Down ATM",
      type: "Web Application",
      description:
        "A fictional tourism promotion website for the Philippines, built using Laravel 11 and Bootstrap 5.3. Features an intuitive UI for browsing attractions, making reservations, and managing users through an administrative panel.",
      feature_list: [
        {
          title: "Tourist Attraction Listings",
          description:
            "Users can browse available destinations with descriptions and images.",
        },
        {
          title: "User Authentication & Booking",
          description:
            "Visitors can register, log in, and make reservations seamlessly.",
        },
        {
          title: "Admin & Superadmin Dashboard",
          description:
            "Admins manage attractions and user data, while Superadmins have full privileges, including restoring archived data and granting/removing admin roles.",
        },
        {
          title: "Model-View-Controller (MVC) Architecture",
          description:
            "Laravel’s structured approach improves maintainability and scalability.",
        },
        {
          title: "Bootstrap-Powered Responsiveness",
          description:
            "Ensures a clean, mobile-friendly design for all screen sizes.",
        },
      ],
      imageSrc: "https://heroui.com/images/card-example-2.jpeg",
      stack: ["laravel", "php", "bootstrap", "mysql"],
      url: {
        demo: "",
        github: "",
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
      icon: IconLayout,
      iconColor: "primary",
      // image: "Screenshot2025-03-19183302.png",
      hoverImage: "2025-03-2004-07-44-ezgif.com-crop.gif",
    },
    {
      title: "Full-Stack Development",
      description:
        "I build seamless web and mobile apps, handling both front-end and back-end for a smooth user experience.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-secondary",
      icon: IconCode,
      iconColor: "secondary",
      // image: "Screenshot2025-03-19184009.png",
      hoverImage: "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",
    },
    {
      title: "Mobile & Web Apps",
      description:
        "I create fast, responsive apps that work smoothly across all devices and platforms.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-warning",
      icon: IconDevices,
      iconColor: "warning",
      // image: "Screenshot2025-03-19193016-left(1).jpg",
      hoverImage: "2025-03-1918-46-14-ezgif.com-video-to-gif-converter.gif",
    },
    {
      title: "Creative Direction",
      description:
        "I lead the visual design, crafting concepts that tell a story and connect with your audience.",
      backgroundClass: "bg-default-50",
      textColorClass: "text-danger",
      icon: IconPalette,
      iconColor: "danger",
      // image:
      // "https://www.facebook.com/photo/?fbid=974708283685950&set=a.110066923483428",
      hoverImage: "2025-03-2004-39-34-ezgif.com-optimize.gif",
    },
  ],
};
