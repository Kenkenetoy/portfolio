/* eslint-disable prettier/prettier */
import { Divider } from "@heroui/divider";
import { siteConfig } from "@/config/site";
import { motion } from "framer-motion";
import { moveup } from "@/anim/variants";

export const ExperienceComponent = () => {
  const { ExperienceData } = siteConfig;

  return (
    <>
      {ExperienceData.map((data, index) => (

        <motion.div key={index} className="w-full space-y-4 text-default-foreground" initial="initial"
              transition={{ duration: 0.75, ease: "circOut" }}
              variants={moveup}
              viewport={{ once: true, amount: .75 }}
              whileInView="inView">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-default-foreground">
                {data.title}
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl text-default-foreground">
                {data.role}
              </h2>
            </div>

            <div className="flex flex-col items-start sm:items-end">
              <p className="text-sm text-left sm:text-base md:text-lg w-fit text-default-foreground">
                {data.duration}
              </p>
              <div className="flex flex-wrap justify-start gap-1 sm:justify-end">
                {data.stack.map((stackItem, i) => (
                  <span
                    key={i}
                    className="text-[10px] sm:text-xs md:text-sm font-medium text-default-foreground"
                  >
                    {stackItem}
                    {i < data.stack.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Divider />

          <p className="max-w-4xl text-sm sm:text-base md:text-lg">
            {data.description}
          </p>
        </motion.div>
      ))}
    </>
  );
};

export default ExperienceComponent;
