import { Image } from "@heroui/image";

import { FollowerPointerCard } from "@/components/following-pointer";
import { title } from "@/components/primitives";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { GlareCard } from "@/components/glare-card";
import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";

export default function IndexPage() {
  const blogContent = {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Manu Arora",
    date: "28th March, 2023",
    title: "Amazing Tailwindcss Grid Layout Examples",
    description:
      "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
    image: "https://heroui.com/images/hero-card.jpeg",
    authorAvatar: "https://heroui.com/images/hero-card.jpeg",
  };

  const TitleComponent = ({
    title,
    avatar,
  }: {
    title: string;
    avatar: string;
  }) => (
    <div className="flex items-center space-x-2">
      <Image
        alt="thumbnail"
        className="border-2 border-white rounded-full"
        height="20"
        src={avatar}
        width="20"
      />
      <p>{title}</p>
    </div>
  );

  return (
    <DefaultLayout>
      <div className="m-4 h-[80vh] overflow-hidden rounded-xl">
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 space-x-12 text-3xl font-bold text-center text-white pointer-events-none md:text-4xl lg:text-7xl">
            <section className="flex flex-col items-center justify-center gap-4 py-8 space-y-12 md:py-10">
              <div className="justify-center inline-block max-w-xl text-center">
                <span className={(title(), "capitalize")}>
                  {siteConfig.location} Based {siteConfig.role}
                </span>
              </div>
            </section>
            <GlareCard className="flex flex-col items-center justify-center pointer-events-auto">
              <DraggableMockupPhone />
            </GlareCard>
          </div>
        </BackgroundGradientAnimation>
      </div>
      <div className="mx-auto w-80">
        <FollowerPointerCard
          title={
            <TitleComponent
              avatar={blogContent.authorAvatar}
              title={blogContent.author}
            />
          }
        >
          <div className="relative h-full overflow-hidden transition duration-200 bg-white border rounded-2xl group hover:shadow-xl border-zinc-100">
            <div className="relative w-full overflow-hidden bg-gray-100 rounded-tl-lg rounded-tr-lg aspect-w-16 aspect-h-10 xl:aspect-w-16 xl:aspect-h-10">
              <Image
                alt="thumbnail"
                className={`group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200 `}
                layout="fill"
                objectFit="cover"
                src={blogContent.image}
              />
            </div>
            <div className="p-4">
              <div className="flex flex-row items-center justify-between mt-10">
                <span className="text-sm text-gray-500">
                  {blogContent.date}
                </span>
                <div className="relative z-10 block px-6 py-2 text-xs font-bold text-white bg-black rounded-xl">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </FollowerPointerCard>
      </div>
    </DefaultLayout>
  );
}
