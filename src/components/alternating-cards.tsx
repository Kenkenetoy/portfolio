/* eslint-disable prettier/prettier */
import { Image } from "@heroui/image";
import { motion } from "motion/react";

import { siteConfig } from "@/config/site";
import { Divider } from "@heroui/divider";

const AlternatingCards = () => {
  return (
    <div className="flex flex-col gap-12 py-10">
      {siteConfig.contents.map((item, index) => (
        <motion.div
          key={index}
          className={`border-1 border-default-50 p-8 rounded-3xl flex flex-col md:flex-row items-center ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          } gap-6 md:gap-12`}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <motion.div
              className="overflow-hidden rounded-lg shadow-lg"
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                alt={item.title}
                className="object-cover w-full h-auto"
                height={400}
                src={item.imageSrc}
                width={600}
              />
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="w-full space-y-4 md:w-1/2">
            <h2 className="font-serif text-5xl text-default-foreground">
              {item.title}
            </h2>
            <p className="text-xl text-default-foreground">{item.type}</p>
            {/* Tech Stack */}
            <div className="flex gap-3">
              {item.stack.map((tech, i) => (
                <span
                  key={i}
                  className="gap-4 text-sm font-medium text-default-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Divider />

            <p className="text-base text-default-foreground">
              {item.description}
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-4">
              {item.url.demo && (
                <a
                  className="text-blue-400 hover:underline"
                  href={item.url.demo}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              )}
              {item.url.github && (
                <a
                  className="text-blue-400 hover:underline"
                  href={item.url.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AlternatingCards;
