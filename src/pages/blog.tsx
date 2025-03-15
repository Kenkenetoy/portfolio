import { Helmet } from "react-helmet-async";
import { Divider } from "@heroui/divider";
import { IconCodeCircle2 } from "@tabler/icons-react";
import { motion } from "motion/react";

import DefaultLayout from "@/layouts/default";
import { siteConfig } from "@/config/site";
import Footer from "@/components/footer";
import { LayoutGrid } from "@/components/layout-grid";

const moveright = {
  // Initial state: translateY far off-screen
  initial: { x: -50, opacity: 0 },
  // When the element is in view, translateY to 0
  inView: { x: 0, opacity: 1 },
  // When the element goes out of view, move it further down (you can modify this value if necessary)
  outOfView: { x: -50, opacity: 0 },
};

const moveleft = {
  // Initial state: slightly off-screen
  initial: { x: 500, opacity: 0, scale: 0 },
  // When the element is in view
  inView: { x: 0, opacity: 1, scale: 1 },
  // When the element goes out of view
  outOfView: { x: 500, opacity: 0, scale: 0 },
};

const moveup = {
  // Initial state: slightly off-screen
  initial: { y: 50, opacity: 0 },
  // When the element is in view
  inView: { y: 0, opacity: 1 },
  // When the element goes out of view
  outOfView: { y: 50, opacity: 0 },
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        House above the clouds
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Greens all over
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="text-xl font-bold text-white md:text-4xl">
        Rivers are serene
      </p>
      <p className="text-base font-normal text-white"></p>
      <p className="max-w-lg my-4 text-base font-normal text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function DocsPage() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Blog | {siteConfig.name}</title>
        <meta content={siteConfig.meta_description} name="description" />
        <link href={siteConfig.url} rel="canonical" />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta content="website" property="og:type" />
        <meta content={siteConfig.url} property="og:url" />
        <meta content={siteConfig.name} property="og:title" />
        <meta content={siteConfig.meta_description} property="og:description" />
        <meta content={siteConfig.meta_image} property="og:image" />

        {/* Twitter Meta Tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={siteConfig.url} name="twitter:url" />
        <meta content={siteConfig.name} name="twitter:title" />
        <meta
          content={siteConfig.meta_description}
          name="twitter:description"
        />
        <meta content={siteConfig.meta_image} name="twitter:image" />
      </Helmet>

      <DefaultLayout>
        <motion.div
          className="space-y-8 max-w-[110rem] mx-auto"
          initial="initial"
          transition={{ duration: 0.25, ease: "circOut" }}
          variants={moveup}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="inView"
        >
          <motion.h1
            className="font-serif text-8xl"
            initial="initial"
            transition={{ duration: 0.75, ease: "circOut" }}
            variants={moveright}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="inView"
          >
            My Projects
          </motion.h1>
          <motion.div
            className="relative flex items-center w-full"
            initial="initial"
            transition={{ duration: 1.1, ease: "circOut" }}
            variants={moveleft}
            viewport={{ once: true, amount: 1 }}
            whileInView="inView"
          >
            <Divider className="flex-1" />
            <motion.div className="absolute p-2 transition-colors ease-in-out rounded-full bg-default-foreground left-[50%] duration-250">
              <IconCodeCircle2
                className="w-20 h-20 text-default-50"
                stroke={1}
              />
            </motion.div>
          </motion.div>
          <div className="relative flex flex-col ">
            <LayoutGrid cards={cards} />
          </div>
          <Divider />
        </motion.div>
        <div className="mx-auto max-w-screen-2xl">
          <Footer />
        </div>
      </DefaultLayout>
    </>
  );
}
