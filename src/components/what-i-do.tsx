/* eslint-disable prettier/prettier */
"use client";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  backgroundImage: string;
  hoverImage: string;
}

const Card = ({
  title,
  description,
  backgroundImage,
  hoverImage,
}: CardProps) => {
  return (
    <div className="w-full max-w-xs">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          `bg-[url(${backgroundImage})] bg-cover`,
          // Preload hover image
          `before:bg-[url(${hoverImage})] before:fixed before:inset-0 before:opacity-0 before:z-[-1]`,
          `hover:bg-[url(${hoverImage})]`,
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="relative z-50 text">
          <h1 className="relative text-xl font-bold md:text-3xl text-gray-50">
            {title}
          </h1>
          <p className="relative my-4 text-base font-normal text-gray-50">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const cardsData: CardProps[] = [
  {
    title: "UI & UX",
    description:
      "Designing interfaces that are intuitive, efficient, and enjoyable to use.",
    backgroundImage: "https://source.unsplash.com/400x400/?ui,ux",
    hoverImage: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
  },
  {
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
    backgroundImage: "https://source.unsplash.com/400x400/?web,mobile",
    hoverImage:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
  {
    title: "Design & Creative",
    description:
      "Crafting visually stunning design that connects deeply with your audience.",
    backgroundImage: "https://source.unsplash.com/400x400/?design,creative",
    hoverImage: "https://i.giphy.com/media/syEfLvksYQnmM/giphy.gif",
  },
  {
    title: "Background Overlays",
    description:
      "Bringing your vision to life with the latest technology and design trends.",
    backgroundImage:
      "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    hoverImage:
      "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif",
  },
];

const WhatIDo = () => {
  return (
    <div>
      <div>
        <h1>WHAT I DO</h1>
      </div>
      {/* Dynamic Card Component */}
      <div className="flex">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
